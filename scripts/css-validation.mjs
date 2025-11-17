#!/usr/bin/env node

/**
 * CSS Validation and Optimization Script
 * Validates CSS syntax, checks for unused classes, and optimizes bundle size
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { glob } from 'glob';
import postcss from 'postcss';
import cssnano from 'cssnano';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/**
 * Extract CSS classes from CSS content
 */
function extractCSSClasses(cssContent) {
  const classes = new Set();

  // Match class selectors (simplified)
  const classRegex = /\.([a-zA-Z_-][a-zA-Z0-9_-]*)/g;
  let match;

  while ((match = classRegex.exec(cssContent)) !== null) {
    classes.add(match[1]);
  }

  return classes;
}

/**
 * Extract classes used in TypeScript/React files
 */
function extractUsedClasses(tsxFiles) {
  const usedClasses = new Set();

  for (const file of tsxFiles) {
    try {
      const content = fs.readFileSync(file, 'utf8');

      // Match className attributes
      const classNameRegex = /className=["']([^"']+)["']/g;
      let match;

      while ((match = classNameRegex.exec(content)) !== null) {
        const classNames = match[1].split(/\s+/);
        classNames.forEach(cls => {
          // Handle responsive prefixes and states
          const baseClass = cls.replace(/^(sm:|md:|lg:|xl:|2xl:|hover:|focus:|active:|disabled:)/, '');
          usedClasses.add(baseClass);
        });
      }

      // Also match clsx/cn utility functions
      const utilityRegex = /(?:clsx|cn)\(\s*["']([^"']+)["']/g;
      while ((match = utilityRegex.exec(content)) !== null) {
        const classNames = match[1].split(/\s+/);
        classNames.forEach(cls => usedClasses.add(cls));
      }
    } catch (error) {
      console.warn(`Failed to read ${file}:`, error.message);
    }
  }

  return usedClasses;
}

/**
 * Analyze CSS for optimization opportunities
 */
async function analyzeCSS(cssPath) {
  const issues = [];

  try {
    const css = fs.readFileSync(cssPath, 'utf8');

    // Check for common issues
    const lines = css.split('\n');

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const lineNum = i + 1;

      // Check for !important overuse
      if (line.includes('!important') && !line.trim().startsWith('/*')) {
        issues.push({
          type: 'warning',
          message: 'Use of !important detected',
          file: cssPath,
          line: lineNum,
          suggestion: 'Consider using more specific selectors instead of !important'
        });
      }

      // Check for very long selectors (potential specificity issues)
      const selectorMatch = line.match(/^([^{]+)\s*{/);
      if (selectorMatch) {
        const selector = selectorMatch[1].trim();
        if (selector.split(/\s+|>|~/).length > 4) {
          issues.push({
            type: 'warning',
            message: 'Complex selector detected',
            file: cssPath,
            line: lineNum,
            suggestion: 'Consider simplifying this selector for better maintainability'
          });
        }
      }

      // Check for unused CSS variables
      const varMatch = line.match(/--([a-zA-Z0-9_-]+):\s*([^;]+)/);
      if (varMatch) {
        const varName = varMatch[1];
        const varValue = varMatch[2];

        // Check if variable is used elsewhere in the CSS
        const usageCount = (css.match(new RegExp(`var\\(--${varName}\\)`, 'g')) || []).length;
        if (usageCount === 0) {
          issues.push({
            type: 'info',
            message: `CSS variable --${varName} may be unused`,
            file: cssPath,
            line: lineNum,
            suggestion: 'Check if this CSS variable is used elsewhere'
          });
        }
      }
    }

    return issues;
  } catch (error) {
    return [{
      type: 'error',
      message: `Failed to analyze CSS: ${error.message}`,
      file: cssPath,
      line: 0
    }];
  }
}

/**
 * Optimize CSS using cssnano
 */
async function optimizeCSS(cssPath, dryRun = true) {
  try {
    const css = fs.readFileSync(cssPath, 'utf8');
    const originalSize = css.length;

    const result = await postcss([cssnano()]).process(css, { from: cssPath });
    const optimizedSize = result.css.length;

    const savings = originalSize - optimizedSize;
    const savingsPercent = ((savings / originalSize) * 100).toFixed(1);

    if (dryRun) {
      console.log(`📊 CSS Optimization Analysis for ${path.basename(cssPath)}:`);
      console.log(`   Original size: ${originalSize} bytes`);
      console.log(`   Optimized size: ${optimizedSize} bytes`);
      console.log(`   Potential savings: ${savings} bytes (${savingsPercent}%)`);
      console.log('');

      return { originalSize, optimizedSize, savings, savingsPercent };
    } else {
      // Create backup
      fs.writeFileSync(`${cssPath}.backup`, css);
      fs.writeFileSync(cssPath, result.css);

      console.log(`✅ Optimized ${path.basename(cssPath)}: ${savings} bytes saved`);
      return { originalSize, optimizedSize, savings, savingsPercent };
    }
  } catch (error) {
    console.error(`❌ Failed to optimize ${cssPath}:`, error.message);
    return null;
  }
}

/**
 * Find unused CSS classes
 */
async function findUnusedClasses() {
  console.log('🔍 Analyzing CSS class usage...\n');

  // Find all CSS files
  const cssFiles = await glob('**/*.{css,scss}', {
    ignore: ['node_modules/**', 'dist/**', '.next/**']
  });

  // Find all TSX files
  const tsxFiles = await glob('**/*.{tsx,jsx,ts,js}', {
    ignore: ['node_modules/**', 'dist/**', '.next/**', '**/*.stories.*', '**/*.spec.*', '**/*.test.*']
  });

  const allDefinedClasses = new Set();
  const usedClasses = extractUsedClasses(tsxFiles);

  // Extract classes from CSS files
  for (const cssFile of cssFiles) {
    try {
      const css = fs.readFileSync(cssFile, 'utf8');
      const classes = extractCSSClasses(css);
      classes.forEach(cls => allDefinedClasses.add(cls));
    } catch (error) {
      console.warn(`Failed to read CSS file ${cssFile}:`, error.message);
    }
  }

  // Find potentially unused classes
  const unusedClasses = [];
  for (const definedClass of allDefinedClasses) {
    if (!usedClasses.has(definedClass) &&
        !definedClass.startsWith('hover:') &&
        !definedClass.startsWith('focus:') &&
        !definedClass.startsWith('active:') &&
        !definedClass.startsWith('disabled:') &&
        !definedClass.startsWith('sm:') &&
        !definedClass.startsWith('md:') &&
        !definedClass.startsWith('lg:') &&
        !definedClass.startsWith('xl:') &&
        !definedClass.startsWith('2xl:')) {
      unusedClasses.push(definedClass);
    }
  }

  console.log(`📊 Class Usage Analysis:`);
  console.log(`   Total defined classes: ${allDefinedClasses.size}`);
  console.log(`   Total used classes: ${usedClasses.size}`);
  console.log(`   Potentially unused classes: ${unusedClasses.length}`);

  if (unusedClasses.length > 0) {
    console.log('\n⚠️  Potentially unused classes:');
    unusedClasses.slice(0, 20).forEach(cls => console.log(`   - ${cls}`));
    if (unusedClasses.length > 20) {
      console.log(`   ... and ${unusedClasses.length - 20} more`);
    }
    console.log('\n💡 Note: This analysis may have false positives. Tailwind utility classes and dynamic classes may not be detected.');
  }

  return { allDefinedClasses, usedClasses, unusedClasses };
}

/**
 * Main validation function
 */
async function main() {
  const args = process.argv.slice(2);
  const command = args[0] || 'analyze';

  console.log('🎨 CSS Validation and Optimization\n');

  switch (command) {
    case 'analyze':
      // Analyze all CSS files
      const cssFiles = await glob('**/*.{css,scss}', {
        ignore: ['node_modules/**', 'dist/**', '.next/**']
      });

      let totalIssues = 0;

      for (const cssFile of cssFiles) {
        const issues = await analyzeCSS(cssFile);

        if (issues.length > 0) {
          console.log(`📄 ${path.relative(process.cwd(), cssFile)}:`);

          issues.forEach(issue => {
            const icon = issue.type === 'error' ? '❌' :
                         issue.type === 'warning' ? '⚠️' : 'ℹ️';
            console.log(`  ${icon} ${issue.message}`);
            if (issue.line > 0) {
              console.log(`     Line ${issue.line}`);
            }
            if (issue.suggestion) {
              console.log(`     💡 ${issue.suggestion}`);
            }
          });

          totalIssues += issues.length;
          console.log('');
        }
      }

      console.log(`📊 Analysis complete. Found ${totalIssues} issues.`);

      // Analyze class usage
      await findUnusedClasses();

      break;

    case 'optimize':
      const cssPath = args[1];
      const dryRun = !args.includes('--apply');

      if (!cssPath) {
        console.error('❌ Please specify a CSS file to optimize');
        console.log('Usage: node scripts/css-validation.mjs optimize <file> [--apply]');
        process.exit(1);
      }

      await optimizeCSS(cssPath, dryRun);
      break;

    case 'unused':
      await findUnusedClasses();
      break;

    default:
      console.log('Usage: node scripts/css-validation.mjs [analyze|optimize|unused]');
      console.log('');
      console.log('Commands:');
      console.log('  analyze    - Analyze CSS files for issues and optimization opportunities');
      console.log('  optimize   - Optimize CSS file (use --apply to save changes)');
      console.log('  unused     - Find potentially unused CSS classes');
      break;
  }
}

main().catch(err => {
  console.error('❌ CSS validation script failed:', err);
  process.exit(1);
});
