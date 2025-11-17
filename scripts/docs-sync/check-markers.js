#!/usr/bin/env node

/* eslint-disable no-console */

/**
 * Documentation Markers Checker
 *
 * This script checks for missing documentation markers in code
 * and suggests additions to keep documentation synchronized.
 */

const fs = require('fs');
const path = require('path');

const CONFIG = {
  sourceDirs: ['app', 'components', 'lib', 'types'],
  excludePatterns: ['node_modules', '.git', 'dist', 'build'],
  requiredMarkers: {
    components: ['component', 'category', 'description'],
    apis: ['api', 'description', 'methods'],
    features: ['feature', 'description', 'status']
  }
};

function scanDirectory(dirPath, results = []) {
  if (!fs.existsSync(dirPath)) return results;

  const items = fs.readdirSync(dirPath);

  for (const item of items) {
    const fullPath = path.join(dirPath, item);
    const stat = fs.statSync(fullPath);

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

function checkFileForMarkers(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const relativePath = path.relative(process.cwd(), filePath);
  const issues = [];

  // Check for export statements without documentation
  const exportRegex = /export\s+(?:const|function|default|class)\s+(\w+)/g;
  let match;

  while ((match = exportRegex.exec(content)) !== null) {
    const exportName = match[1];
    const exportIndex = match.index;

    // Check if there's a documentation comment above
    const beforeExport = content.substring(0, exportIndex);
    const lastCommentIndex = beforeExport.lastIndexOf('/**');

    if (lastCommentIndex === -1) {
      issues.push({
        type: 'MISSING_DOCS',
        export: exportName,
        file: relativePath,
        line: content.substring(0, exportIndex).split('\n').length,
        suggestion: `Add JSDoc comment with @component, @feature, or @api marker`
      });
    } else {
      // Check if the comment has required markers
      const commentEndIndex = beforeExport.indexOf('*/', lastCommentIndex);
      if (commentEndIndex !== -1) {
        const comment = content.substring(lastCommentIndex, commentEndIndex);

        // Determine what type of export this is
        let exportType = 'component';
        if (filePath.includes('/api/') || content.includes('@api')) {
          exportType = 'api';
        } else if (content.includes('@feature') || exportName.includes('Feature')) {
          exportType = 'feature';
        }

        const requiredMarkers = CONFIG.requiredMarkers[exportType] || [];
        const missingMarkers = requiredMarkers.filter(marker =>
          !comment.includes(`@${marker}`)
        );

        if (missingMarkers.length > 0) {
          issues.push({
            type: 'MISSING_MARKERS',
            export: exportName,
            file: relativePath,
            line: content.substring(0, exportIndex).split('\n').length,
            missing: missingMarkers,
            suggestion: `Add missing markers: ${missingMarkers.join(', ')}`
          });
        }
      }
    }
  }

  return issues;
}

function generateSuggestions(issues) {
  const suggestions = [];

  issues.forEach(issue => {
    let suggestion = '';

    switch (issue.type) {
      case 'MISSING_DOCS':
        suggestion = `/**
 * @component ${issue.export}
 * @description Brief description of what this component does
 * @category ${getCategoryFromPath(issue.file)}
 */
`;
        break;

      case 'MISSING_MARKERS':
        suggestion = `Add to existing JSDoc: ${issue.missing.map(m => `@${m}`).join(', ')}`;
        break;
    }

    suggestions.push({
      file: issue.file,
      line: issue.line,
      export: issue.export,
      suggestion
    });
  });

  return suggestions;
}

function getCategoryFromPath(filePath) {
  if (filePath.includes('/ui/')) return 'ui';
  if (filePath.includes('/theme-studio/')) return 'theme';
  if (filePath.includes('/marketing/')) return 'marketing';
  if (filePath.includes('/layout/')) return 'layout';
  return 'component';
}

function main() {
  console.log('🔍 Checking for documentation markers...\n');

  const files = CONFIG.sourceDirs.flatMap(dir => scanDirectory(dir));
  console.log(`📊 Scanning ${files.length} source files...\n`);

  let allIssues = [];

  files.forEach(file => {
    const issues = checkFileForMarkers(file);
    allIssues = allIssues.concat(issues);
  });

  if (allIssues.length === 0) {
    console.log('✅ All exports have proper documentation markers!');
    return;
  }

  console.log(`⚠️  Found ${allIssues.length} documentation issues:\n`);

  allIssues.forEach((issue, index) => {
    console.log(`${index + 1}. ${issue.type}: ${issue.export} in ${issue.file}:${issue.line}`);
    console.log(`   ${issue.suggestion}\n`);
  });

  const suggestions = generateSuggestions(allIssues);

  console.log('💡 Suggested fixes:');
  console.log('==================\n');

  suggestions.forEach((suggestion, index) => {
    console.log(`${index + 1}. ${suggestion.file}:${suggestion.line} - ${suggestion.export}`);
    console.log(`${suggestion.suggestion}\n`);
  });

  console.log('📖 See scripts/docs-sync/docs-markers.js for marker examples.');
  console.log('🔄 Run "npm run docs:sync" to update documentation automatically.');

  // Exit with error if there are issues
  process.exit(allIssues.length > 0 ? 1 : 0);
}

if (require.main === module) {
  main();
}

module.exports = { main, checkFileForMarkers, generateSuggestions };
