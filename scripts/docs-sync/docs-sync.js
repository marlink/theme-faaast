#!/usr/bin/env node

/* eslint-disable no-console, no-unused-vars, @typescript-eslint/no-unused-vars */

/**
 * Documentation Synchronization System
 *
 * This script analyzes the codebase and keeps user stories, documentation,
 * and feature lists synchronized with actual implemented features.
 *
 * Usage:
 * - npm run docs:sync
 * - node scripts/docs-sync/docs-sync.js
 * - As part of CI/CD pipeline
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Configuration
const CONFIG = {
  docsDir: 'docs',
  sourceDirs: ['app', 'components', 'lib', 'types'],
  excludePatterns: ['node_modules', '.git', 'dist', 'build'],
  featureMarkers: {
    userStory: /\/\*\*\s*\n\s*\*\s*@user-story\s+([\w-]+(?:\s*,\s*[\w-]+)*)/gi,
    feature: /\/\*\*\s*\n\s*\*\s*@feature\s+([\w-]+)/gi,
    component: /\/\*\*\s*\n\s*\*\s*@component\s+([\w-]+)/gi,
    api: /\/\*\*\s*\n\s*\*\s*@api\s+([\w-]+)/gi,
  }
};

// Analysis results
const analysisResults = {
  components: new Map(),
  features: new Map(),
  userStories: new Map(),
  apis: new Map(),
  pages: new Map(),
  routes: new Map(),
  changes: []
};

/**
 * Recursively scan directory for files
 */
function scanDirectory(dirPath, results = []) {
  if (!fs.existsSync(dirPath)) return results;

  const items = fs.readdirSync(dirPath);

  for (const item of items) {
    const fullPath = path.join(dirPath, item);
    const stat = fs.statSync(fullPath);

    // Skip excluded patterns
    if (CONFIG.excludePatterns.some(pattern => item.includes(pattern))) {
      continue;
    }

    if (stat.isDirectory()) {
      scanDirectory(fullPath, results);
    } else if (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.js') || item.endsWith('.jsx')) {
      results.push(fullPath);
    }
  }

  return results;
}

/**
 * Analyze a single file for documentation markers
 */
function analyzeFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const relativePath = path.relative(process.cwd(), filePath);

    // Check for documentation markers
    Object.entries(CONFIG.featureMarkers).forEach(([type, regex]) => {
      let match;
      const originalRegex = new RegExp(regex.source, regex.flags); // Reset regex
      while ((match = originalRegex.exec(content)) !== null) {
        const [_fullMatch, id] = match;
        const key = `${type}-${id}`;

        const markerInfo = {
          id,
          file: relativePath,
          line: content.substring(0, match.index).split('\n').length,
          lastModified: fs.statSync(filePath).mtime,
          type
        };

        analysisResults[type + 's'].set(key, markerInfo);

        // For components, also store in components map
        if (type === 'component') {
          const componentKey = id.startsWith('component-') ? id.substring(10) : id;
          const existingComponent = analysisResults.components.get(componentKey) || {};
          analysisResults.components.set(componentKey, {
            ...existingComponent,
            ...markerInfo,
            name: componentKey
          });
        }

      }
    });

    // Extract component information
    if (relativePath.includes('components/')) {
      const componentName = path.basename(filePath, path.extname(filePath));
      const existingComponent = analysisResults.components.get(componentName);


      analysisResults.components.set(componentName, {
        name: componentName,
        path: relativePath,
        exports: extractExports(content),
        props: extractProps(content),
        lastModified: fs.statSync(filePath).mtime,
        ...existingComponent // Merge with any marker information
      });
    }

    // Extract page information
    if (relativePath.includes('app/') && relativePath.includes('/page.tsx')) {
      const pagePath = relativePath.replace('/app', '').replace('/page.tsx', '');
      analysisResults.pages.set(pagePath, {
        path: pagePath,
        file: relativePath,
        route: pagePath === '/page' ? '/' : pagePath,
        lastModified: fs.statSync(filePath).mtime
      });
    }

  } catch (error) {
    console.warn(`Warning: Could not analyze ${filePath}: ${error.message}`);
  }
}

/**
 * Extract exports from a file
 */
function extractExports(content) {
  const exports = [];
  const exportRegex = /export\s+(?:const|function|default)\s+(\w+)/g;
  let match;

  while ((match = exportRegex.exec(content)) !== null) {
    exports.push(match[1]);
  }

  return exports;
}

/**
 * Extract props from a React component
 */
function extractProps(content) {
  const props = [];
  const propRegex = /interface\s+(\w+Props)\s*{([^}]*)}/gs;
  let match;

  while ((match = propRegex.exec(content)) !== null) {
    const interfaceName = match[1];
    const interfaceContent = match[2];

    const propMatches = interfaceContent.match(/(\w+)[?:]\s*([^;]+)/g) || [];
    const extractedProps = propMatches.map(prop => {
      const [name, type] = prop.split(/[?:]/).map(s => s.trim());
      return { name, type };
    });

    props.push({
      interface: interfaceName,
      props: extractedProps
    });
  }

  return props;
}

/**
 * Analyze git history for recent changes
 */
function analyzeGitHistory() {
  try {
    const since = '30 days ago';
    const gitLog = execSync(`git log --since="${since}" --oneline --name-only`, { encoding: 'utf8' });
    const lines = gitLog.split('\n').filter(line => line.trim());

    let currentCommit = null;
    for (const line of lines) {
      if (line.match(/^[a-f0-9]+\s/)) {
        currentCommit = line;
      } else if (line && currentCommit) {
        // This is a file that was changed
        analysisResults.changes.push({
          commit: currentCommit,
          file: line,
          date: new Date()
        });
      }
    }
  } catch (error) {
    console.warn('Could not analyze git history:', error.message);
  }
}

/**
 * Update user stories documentation
 */
function updateUserStories() {
  const userStoriesPath = path.join(CONFIG.docsDir, 'user-journeys', 'happy-paths.md');

  if (!fs.existsSync(userStoriesPath)) {
    console.warn('User stories file not found, skipping update');
    return;
  }

  let content = fs.readFileSync(userStoriesPath, 'utf8');

  // Update component counts
  content = content.replace(
    /Browses (\d+) available components/g,
    `Browses ${analysisResults.components.size} available components`
  );

  // Update feature counts
  content = content.replace(
    /Access to (\d+) pre-built components/g,
    `Access to ${analysisResults.components.size} pre-built components`
  );

  // Update page creation limits
  const pageLimit = 3; // From theme configuration
  content = content.replace(
    /Create up to (\d+) custom pages/g,
    `Create up to ${pageLimit} custom pages`
  );

  // Update with recent changes
  const recentChanges = analysisResults.changes.slice(0, 5);
  if (recentChanges.length > 0) {
    const changeList = recentChanges.map(change =>
      `- ${change.commit.split(' ')[1]} (${change.file})`
    ).join('\n');

    content = content.replace(
      /(---\s*)$/,
      `## Recent Development Updates\n\n${changeList}\n\n---\n`
    );
  }

  fs.writeFileSync(userStoriesPath, content);
  console.log('✅ Updated user stories documentation');
}

/**
 * Update README with current feature status
 */
function updateReadme() {
  const readmePath = 'README.md';

  if (!fs.existsSync(readmePath)) {
    console.log('README.md not found, skipping update');
    return;
  }

  let content = fs.readFileSync(readmePath, 'utf8');

  // Update component count
  content = content.replace(
    /🎨 (\d+) Components/g,
    `🎨 ${analysisResults.components.size} Components`
  );

  // Update feature count
  content = content.replace(
    /⚡ (\d+) Features/g,
    `⚡ ${analysisResults.features.size} Features`
  );

  // Update page count
  content = content.replace(
    /📄 (\d+) Pages/g,
    `📄 ${analysisResults.pages.size} Pages`
  );

  fs.writeFileSync(readmePath, content);
  console.log('✅ Updated README with current metrics');
}

/**
 * Generate feature inventory
 */
function generateFeatureInventory() {
  const inventoryPath = path.join(CONFIG.docsDir, 'FEATURE_INVENTORY.md');

  let content = `# Feature Inventory\n\n`;
  content += `*Generated on ${new Date().toISOString()}*\n\n`;

  // Components
  content += `## Components (${analysisResults.components.size})\n\n`;
  for (const [name, component] of analysisResults.components) {
    content += `### ${name}\n`;
    content += `- **File**: ${component.path}\n`;
    content += `- **Exports**: ${component.exports?.join(', ') || 'None'}\n`;
    if (component.props?.length > 0) {
      content += `- **Props**: ${component.props.map(p => p.interface).join(', ')}\n`;
    }
    content += `- **Last Modified**: ${component.lastModified?.toISOString() || 'Unknown'}\n\n`;
  }

  // Pages
  content += `## Pages (${analysisResults.pages.size})\n\n`;
  for (const [path, page] of analysisResults.pages) {
    content += `- **${path}** → ${page.route} (${page.file})\n`;
  }
  content += '\n';

  // User Stories
  content += `## User Stories (${analysisResults.userStories.size})\n\n`;
  for (const [_key, story] of analysisResults.userStories) {
    content += `- **${story.id}**: ${story.description || 'No description'}\n`;
    content += `  - File: ${story.file}:${story.line}\n`;
  }
  content += '\n';

  // Features
  content += `## Features (${analysisResults.features.size})\n\n`;
  for (const [_key, feature] of analysisResults.features) {
    content += `- **${feature.id}**: ${feature.description || 'No description'}\n`;
    content += `  - File: ${feature.file}:${feature.line}\n`;
  }

  fs.writeFileSync(inventoryPath, content);
  console.log('✅ Generated feature inventory');
}

/**
 * Check for documentation drift
 */
function checkDocumentationDrift() {
  const issues = [];

  // Check if all components are documented
  for (const [name, component] of analysisResults.components) {
    // Skip components without location information
    if (!component.file && !component.path) continue;

    const hasStory = Array.from(analysisResults.userStories.values())
      .some(story => story.description?.toLowerCase().includes(name.toLowerCase()));

    if (!hasStory) {
      issues.push(`UNDOCUMENTED_COMPONENT: ${name} (${component.path || component.file})`);
    }
  }

  // Check if all user stories have implementation
  for (const [_key, story] of analysisResults.userStories) {
    const hasImplementation = Array.from(analysisResults.components.values())
      .some(comp => comp.name.toLowerCase().includes(story.id.toLowerCase()));

    if (!hasImplementation) {
      issues.push(`UNIMPLEMENTED_STORY: ${story.id} (${story.file})`);
    }
  }

  if (issues.length > 0) {
    console.log('\n⚠️  Documentation Drift Detected:');
    issues.forEach(issue => console.log(`   ${issue}`));
    console.log('\nConsider updating documentation or implementing missing features.\n');
  } else {
    console.log('✅ No documentation drift detected');
  }

  return issues;
}

/**
 * Main execution function
 */
function main() {
  console.log('🔍 Starting documentation synchronization...\n');

// Analyze codebase
console.log('📊 Analyzing codebase...');
const files = CONFIG.sourceDirs.flatMap(dir => scanDirectory(dir));
console.log(`   Found ${files.length} source files to analyze`);

  files.forEach(file => analyzeFile(file));

  console.log(`   📦 Components: ${analysisResults.components.size}`);
  console.log(`   ⚡ Features: ${analysisResults.features.size}`);
  console.log(`   📖 User Stories: ${analysisResults.userStories.size}`);
  console.log(`   📄 Pages: ${analysisResults.pages.size}`);
  console.log(`   🔗 APIs: ${analysisResults.apis.size}`);

  // Analyze git history
  console.log('\n📝 Analyzing recent changes...');
  analyzeGitHistory();
  console.log(`   Found ${analysisResults.changes.length} recent file changes`);

  // Update documentation
  console.log('\n📝 Updating documentation...');
  updateUserStories();
  updateReadme();
  generateFeatureInventory();

  // Check for drift
  console.log('\n🔍 Checking for documentation drift...');
  const driftIssues = checkDocumentationDrift();

  console.log('\n✨ Documentation synchronization complete!');

  // Exit with error code if there are drift issues
  if (driftIssues.length > 0) {
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  main();
}

module.exports = { main, analysisResults, CONFIG };
