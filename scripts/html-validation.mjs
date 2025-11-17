#!/usr/bin/env node

/**
 * HTML Validation Script
 * Validates HTML structure, accessibility, and semantic correctness
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { HtmlValidate } from 'html-validate';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const config = {
  extends: ['html-validate:recommended'],
  rules: {
    // WCAG 2.1 AA compliance rules
    'wcag/h30': 'error', // Link text must not be empty
    'wcag/h32': 'error', // Form submit button must have accessible name
    'wcag/h37': 'error', // Image must have alt attribute
    'wcag/h63': 'error', // Table cell must not be empty
    'wcag/h71': 'error', // Table must have caption or summary

    // HTML structure and semantics
    'heading-level': 'error', // Heading levels should only increase by one
    'no-missing-references': 'error', // References must point to existing element
    'require-sri': 'off', // Skip SRI for now
    'script-type': 'off', // Allow modern script tags
    'style-disabled': 'off', // Allow style tags

    // Accessibility
    'aria-label-missing': 'error', // ARIA label is missing
    'aria-labelledby-missing': 'error', // aria-labelledby references missing element
    'empty-heading': 'error', // Heading must not be empty
    'empty-title': 'error', // Title must not be empty
    'img-req-alt': 'error', // Image must have alt attribute
    'input-requires-label': 'error', // Input must have label
    'prefer-native-element': 'warn', // Prefer native elements over ARIA roles

    // Best practices
    'deprecated': 'warn', // Deprecated elements/attributes
    'doctype-html5': 'error', // Must use HTML5 doctype
    'element-permitted-content': 'error', // Element has invalid content
    'element-required-attributes': 'error', // Required attributes missing
    'meta-charset-utf-8': 'error', // Meta charset must be UTF-8
    'no-autoplay': 'off', // Allow autoplay for now
    'no-dup-id': 'error', // Duplicate IDs not allowed
    'void-style': 'error', // Void elements must not have content
  }
};

const validator = new HtmlValidate(config);

/**
 * Extract HTML content from Next.js pages
 * This is a simplified approach - in production, you'd use Next.js build output
 */
function extractHTMLFromJSX(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');

    // Simple regex to extract JSX return statements
    // This is not perfect but works for basic validation
    const jsxMatch = content.match(/return\s*\(\s*([\s\S]*?)\s*\);?\s*$/);
    if (!jsxMatch) return null;

    let jsx = jsxMatch[1];

    // Basic JSX to HTML conversion (simplified)
    jsx = jsx
      .replace(/className=/g, 'class=')
      .replace(/\{\/\*[\s\S]*?\*\/\}/g, '') // Remove comments
      .replace(/\{[^}]*\}/g, '') // Remove expressions
      .replace(/<>/g, '<div>') // Convert fragments
      .replace(/<\/>/g, '</div>');

    return `<html><body>${jsx}</body></html>`;
  } catch (error) {
    console.warn(`Failed to extract HTML from ${filePath}:`, error.message);
    return null;
  }
}

/**
 * Validate HTML content
 */
async function validateHTML(content, filename) {
  try {
    const report = await validator.validateString(content, filename);
    return {
      valid: report.valid,
      errors: report.results[0]?.messages || [],
      filename
    };
  } catch (error) {
    return {
      valid: false,
      errors: [{ message: `Validation failed: ${error.message}` }],
      filename
    };
  }
}

/**
 * Find all page components
 */
function findPages() {
  const pages = [];

  // App router pages
  const appPages = path.join(__dirname, '..', 'app');
  if (fs.existsSync(appPages)) {
    const findInDir = (dir) => {
      const items = fs.readdirSync(dir);
      for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
          findInDir(fullPath);
        } else if (item === 'page.tsx' || item === 'page.jsx') {
          pages.push(fullPath);
        }
      }
    };
    findInDir(appPages);
  }

  return pages;
}

/**
 * Main validation function
 */
async function main() {
  console.log('🔍 Validating HTML structure and accessibility...\n');

  const pages = findPages();
  let totalErrors = 0;
  let totalWarnings = 0;
  const results = [];

  for (const pagePath of pages) {
    const html = extractHTMLFromJSX(pagePath);
    if (!html) continue;

    const result = await validateHTML(html, path.relative(process.cwd(), pagePath));
    results.push(result);

    if (!result.valid) {
      const errors = result.errors.filter(e => e.severity === 2);
      const warnings = result.errors.filter(e => e.severity === 1);

      totalErrors += errors.length;
      totalWarnings += warnings.length;

      if (errors.length > 0 || warnings.length > 0) {
        console.log(`📄 ${result.filename}:`);

        errors.forEach(error => {
          console.log(`  ❌ ${error.ruleId}: ${error.message}`);
          if (error.line) {
            console.log(`     Line ${error.line}${error.column ? `:${error.column}` : ''}`);
          }
        });

        warnings.forEach(warning => {
          console.log(`  ⚠️  ${warning.ruleId}: ${warning.message}`);
          if (warning.line) {
            console.log(`     Line ${warning.line}${warning.column ? `:${warning.column}` : ''}`);
          }
        });

        console.log('');
      }
    }
  }

  // Summary
  console.log('📊 Validation Summary:');
  console.log(`   Pages validated: ${results.length}`);
  console.log(`   Total errors: ${totalErrors}`);
  console.log(`   Total warnings: ${totalWarnings}`);

  if (totalErrors > 0) {
    console.log('\n❌ HTML validation failed with errors');
    process.exit(1);
  } else if (totalWarnings > 0) {
    console.log('\n⚠️  HTML validation passed with warnings');
  } else {
    console.log('\n✅ HTML validation passed');
  }
}

main().catch(err => {
  console.error('❌ Validation script failed:', err);
  process.exit(1);
});
