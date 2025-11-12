#!/usr/bin/env node

/**
 * SmartWheels Test Runner Script
 *
 * This script provides a convenient way to run different types of tests
 * with proper setup and teardown.
 */

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const args = process.argv.slice(2);
const command = args[0] || 'full';

console.log('🚀 SmartWheels Test Runner');
console.log('========================\n');

// Ensure test directories exist
const testDirs = [
  'tests/screenshots/happy-paths',
  'tests/screenshots/unhappy-paths',
  'tests/screenshots/regression',
  'test-results'
];

testDirs.forEach(dir => {
  const fullPath = path.join(process.cwd(), dir);
  if (!fs.existsSync(fullPath)) {
    fs.mkdirSync(fullPath, { recursive: true });
    console.log(`📁 Created directory: ${dir}`);
  }
});

const testCommands = {
  'full': {
    description: 'Run complete test suite with all browsers',
    command: 'playwright test'
  },
  'critical': {
    description: 'Run only critical user journey tests',
    command: 'playwright test --grep "quote-request-journey|authentication-journey|service-exploration-journey"'
  },
  'smoke': {
    description: 'Run smoke tests (fast validation)',
    command: 'playwright test --grep "smoke" --project=chromium'
  },
  'screenshots': {
    description: 'Generate screenshots for documentation',
    command: 'playwright test --grep "screenshot" --project=chromium'
  },
  'ui': {
    description: 'Run tests with UI mode for debugging',
    command: 'playwright test --ui'
  },
  'debug': {
    description: 'Run tests in debug mode',
    command: 'playwright test --debug --project=chromium'
  },
  'report': {
    description: 'Show test report',
    command: 'playwright show-report'
  }
};

if (command === 'help' || command === '--help' || command === '-h') {
  console.log('Available commands:');
  Object.entries(testCommands).forEach(([cmd, info]) => {
    console.log(`  ${cmd.padEnd(12)} - ${info.description}`);
  });
  console.log('\nUsage: node scripts/run-tests.mjs [command]');
  process.exit(0);
}

const testConfig = testCommands[command];
if (!testConfig) {
  console.error(`❌ Unknown command: ${command}`);
  console.log('\nAvailable commands:');
  Object.keys(testCommands).forEach(cmd => {
    console.log(`  ${cmd}`);
  });
  process.exit(1);
}

console.log(`🎯 Running: ${testConfig.description}`);
console.log(`📝 Command: ${testConfig.command}\n`);

try {
  // Check if dev server is running for local development
  if (command === 'full' || command === 'critical' || command === 'smoke') {
    if (!process.env.CI) {
      console.log('🌐 Assuming development server is running on http://localhost:3000');
      console.log('💡 Make sure to run: pnpm run dev');
      console.log('');
    }
  }

  // Run the Playwright command
  execSync(testConfig.command, {
    stdio: 'inherit',
    cwd: process.cwd()
  });

  console.log('\n✅ Tests completed successfully!');

  // Show summary
  const resultsDir = path.join(process.cwd(), 'test-results');
  if (fs.existsSync(resultsDir)) {
    const results = fs.readdirSync(resultsDir);
    console.log(`📊 Results saved to: ${resultsDir}`);
    console.log(`📸 Screenshots saved to: tests/screenshots/`);
  }

} catch (error) {
  console.error('\n❌ Tests failed!');
  console.error('Error:', error.message);

  // Show helpful information
  console.log('\n🔍 Troubleshooting:');
  console.log('1. Make sure the development server is running: npm run dev');
  console.log('2. Check test configuration in playwright.config.ts');
  console.log('3. Review test results in test-results/ directory');
  console.log('4. Check screenshots in tests/screenshots/ for visual issues');

  process.exit(1);
}
