#!/usr/bin/env node

/**
 * Unused Code Analysis Script
 * Detects unused imports, exports, and dependencies
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { glob } from 'glob';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/**
 * Simple TypeScript/JavaScript parser to extract imports and exports
 */
class CodeAnalyzer {
  constructor() {
    this.imports = new Map();
    this.exports = new Map();
    this.usages = new Map();
  }

  /**
   * Parse a file and extract imports/exports
   */
  parseFile(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      const relativePath = path.relative(process.cwd(), filePath);

      // Extract ES6 imports
      this.extractES6Imports(content, relativePath);

      // Extract exports
      this.extractExports(content, relativePath);

      // Extract usages (simplified)
      this.extractUsages(content, relativePath);

    } catch (error) {
      console.warn(`Failed to parse ${filePath}:`, error.message);
    }
  }

  extractES6Imports(content, filePath) {
    // Match import statements
    const importRegex = /^import\s+.*?\s+from\s+['"]([^'"]+)['"];?$/gm;
    const namedImportRegex = /^import\s+\{([^}]+)\}\s+from\s+['"]([^'"]+)['"];?$/gm;
    const defaultImportRegex = /^import\s+(\w+)(?:\s*,\s*\{[^}]+\})?\s+from\s+['"]([^'"]+)['"];?$/gm;

    let match;

    // Named imports
    while ((match = namedImportRegex.exec(content)) !== null) {
      const imports = match[1].split(',').map(s => s.trim());
      const modulePath = match[2];

      imports.forEach(imp => {
        const cleanImport = imp.replace(/^\s*(\w+)(?:\s+as\s+\w+)?\s*$/, '$1');
        if (cleanImport) {
          this.addImport(cleanImport, modulePath, filePath);
        }
      });
    }

    // Default imports
    while ((match = defaultImportRegex.exec(content)) !== null) {
      const importName = match[1];
      const modulePath = match[2];
      this.addImport(importName, modulePath, filePath);
    }

    // Other imports
    while ((match = importRegex.exec(content)) !== null) {
      const modulePath = match[1];
      // Skip side-effect imports
      if (!match[0].includes(' from ')) continue;
      // This is a catch-all for other import patterns
    }
  }

  extractExports(content, filePath) {
    // Match export statements
    const exportRegex = /^export\s+(?:const|let|var|function|class)\s+(\w+)/gm;
    const namedExportRegex = /^export\s+\{([^}]+)\}/gm;
    const defaultExportRegex = /^export\s+default\s+(?:\w+|\{[^}]+\}|\([^)]+\))/gm;

    let match;

    // Named exports
    while ((match = exportRegex.exec(content)) !== null) {
      const exportName = match[2];
      this.addExport(exportName, filePath);
    }

    // Named export blocks
    while ((match = namedExportRegex.exec(content)) !== null) {
      const exports = match[1].split(',').map(s => s.trim());
      exports.forEach(exp => {
        const cleanExport = exp.replace(/^\s*(\w+)(?:\s+as\s+\w+)?\s*$/, '$1');
        if (cleanExport) {
          this.addExport(cleanExport, filePath);
        }
      });
    }

    // Default exports (simplified)
    if (defaultExportRegex.test(content)) {
      this.addExport('default', filePath);
    }
  }

  extractUsages(content, filePath) {
    // Simple regex to find identifier usages
    // This is very basic and will have false positives
    const identifierRegex = /\b([a-zA-Z_$][a-zA-Z0-9_$]*)\b/g;

    const identifiers = new Set();
    let match;

    while ((match = identifierRegex.exec(content)) !== null) {
      const identifier = match[1];
      // Skip keywords and common words
      if (!this.isKeyword(identifier) && identifier.length > 1) {
        identifiers.add(identifier);
      }
    }

    identifiers.forEach(id => {
      if (!this.usages.has(id)) {
        this.usages.set(id, new Set());
      }
      this.usages.get(id).add(filePath);
    });
  }

  addImport(name, modulePath, filePath) {
    const key = `${name}:${modulePath}`;
    if (!this.imports.has(key)) {
      this.imports.set(key, new Set());
    }
    this.imports.get(key).add(filePath);
  }

  addExport(name, filePath) {
    if (!this.exports.has(name)) {
      this.exports.set(name, new Set());
    }
    this.exports.get(name).add(filePath);
  }

  isKeyword(word) {
    const keywords = new Set([
      'const', 'let', 'var', 'function', 'class', 'if', 'else', 'for', 'while',
      'return', 'import', 'export', 'from', 'async', 'await', 'try', 'catch',
      'throw', 'new', 'this', 'super', 'extends', 'interface', 'type', 'enum',
      'true', 'false', 'null', 'undefined', 'console', 'window', 'document',
      'process', 'require', 'module', 'exports', 'default', 'as'
    ]);
    return keywords.has(word);
  }

  getUnusedImports() {
    const unused = [];

    for (const [key, files] of this.imports) {
      const [importName] = key.split(':');

      if (!this.usages.has(importName)) {
        files.forEach(file => {
          unused.push({ importName, file });
        });
      }
    }

    return unused;
  }

  getUnusedExports() {
    const unused = [];

    for (const [exportName, files] of this.exports) {
      if (exportName === 'default') continue; // Skip default exports for now

      if (!this.usages.has(exportName) || this.usages.get(exportName).size <= files.size) {
        // If used in same or fewer files than exported, might be unused
        files.forEach(file => {
          unused.push({ exportName, file });
        });
      }
    }

    return unused;
  }
}

/**
 * Analyze package.json dependencies
 */
function analyzePackageDependencies() {
  try {
    const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
    const allDeps = {
      ...packageJson.dependencies,
      ...packageJson.devDependencies
    };

    console.log('📦 Analyzing package.json dependencies...');

    // This is a very basic check - in reality, you'd need more sophisticated analysis
    const potentiallyUnused = [];

    for (const [dep, version] of Object.entries(allDeps)) {
      // Check if dependency is imported anywhere
      const importPattern = new RegExp(`from ['"]${dep}['"]`, 'g');

      let used = false;
      // Simple check in source files
      const sourceFiles = glob.sync('**/*.{ts,tsx,js,jsx}', {
        ignore: ['node_modules/**', 'dist/**', '.next/**']
      });

      for (const file of sourceFiles.slice(0, 50)) { // Limit for performance
        try {
          const content = fs.readFileSync(file, 'utf8');
          if (importPattern.test(content)) {
            used = true;
            break;
          }
        } catch (e) {
          // Skip files that can't be read
        }
      }

      if (!used) {
        potentiallyUnused.push(dep);
      }
    }

    if (potentiallyUnused.length > 0) {
      console.log('\n⚠️  Potentially unused dependencies:');
      potentiallyUnused.slice(0, 10).forEach(dep => console.log(`   - ${dep}`));
      if (potentiallyUnused.length > 10) {
        console.log(`   ... and ${potentiallyUnused.length - 10} more`);
      }
      console.log('\n💡 Note: This analysis may have false positives. Dynamic imports and peer dependencies may not be detected.');
    }

    return potentiallyUnused;
  } catch (error) {
    console.warn('Failed to analyze package.json:', error.message);
    return [];
  }
}

/**
 * Main analysis function
 */
async function main() {
  console.log('🔍 Analyzing unused code...\n');

  const analyzer = new CodeAnalyzer();

  // Find all TypeScript/JavaScript files
  const files = await glob('**/*.{ts,tsx,js,jsx}', {
    ignore: [
      'node_modules/**',
      'dist/**',
      '.next/**',
      '**/*.stories.*',
      '**/*.spec.*',
      '**/*.test.*',
      '**/*.config.*',
      'scripts/**'
    ]
  });

  console.log(`📄 Analyzing ${files.length} source files...`);

  // Parse all files
  for (const file of files) {
    analyzer.parseFile(file);
  }

  // Analyze results
  const unusedImports = analyzer.getUnusedImports();
  const unusedExports = analyzer.getUnusedExports();

  console.log('\n📊 Code Analysis Results:');
  console.log(`   Total imports analyzed: ${analyzer.imports.size}`);
  console.log(`   Total exports analyzed: ${analyzer.exports.size}`);
  console.log(`   Potentially unused imports: ${unusedImports.length}`);
  console.log(`   Potentially unused exports: ${unusedExports.length}`);

  if (unusedImports.length > 0) {
    console.log('\n⚠️  Potentially unused imports:');
    unusedImports.slice(0, 20).forEach(({ importName, file }) => {
      console.log(`   - ${importName} in ${file}`);
    });
    if (unusedImports.length > 20) {
      console.log(`   ... and ${unusedImports.length - 20} more`);
    }
  }

  if (unusedExports.length > 0) {
    console.log('\n⚠️  Potentially unused exports:');
    unusedExports.slice(0, 20).forEach(({ exportName, file }) => {
      console.log(`   - ${exportName} in ${file}`);
    });
    if (unusedExports.length > 20) {
      console.log(`   ... and ${unusedExports.length - 20} more`);
    }
  }

  console.log('\n💡 Note: This analysis uses simple regex patterns and may have false positives.');
  console.log('   Always verify before removing any code.');

  // Analyze dependencies
  analyzePackageDependencies();
}

main().catch(err => {
  console.error('❌ Code analysis script failed:', err);
  process.exit(1);
});
