import { chromium, Browser, BrowserContext } from '@playwright/test';
import * as fs from 'fs';
import * as path from 'path';

// Global test data and utilities
export default async function globalSetup() {
  console.log('🚀 Setting up SmartWheels test environment...');

  // Ensure screenshot directories exist
  const screenshotDirs = [
    'tests/screenshots/happy-paths',
    'tests/screenshots/unhappy-paths',
    'tests/screenshots/regression',
    'test-results'
  ];

  screenshotDirs.forEach(dir => {
    const fullPath = path.join(process.cwd(), dir);
    if (!fs.existsSync(fullPath)) {
      fs.mkdirSync(fullPath, { recursive: true });
      console.log(`📁 Created directory: ${dir}`);
    }
  });

  // Create a test browser context for setup tasks
  const browser = await chromium.launch();
  const context = await browser.newContext();

  try {
    // Pre-warm the application
    console.log('🔥 Warming up the application...');
    const page = await context.newPage();
    await page.goto('/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000); // Let the app fully load

    console.log('✅ Application warmed up successfully');

  } catch (error) {
    console.warn('⚠️  Warning: Could not warm up application:', error instanceof Error ? error.message : String(error));
  } finally {
    await context.close();
    await browser.close();
  }

  console.log('🎯 Global setup completed');
}
