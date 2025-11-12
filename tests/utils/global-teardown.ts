import * as fs from 'fs';
import * as path from 'path';

export default async function globalTeardown() {
  console.log('🧹 Starting global teardown...');

  try {
    // Archive screenshots and create summary
    const screenshotDir = path.join(process.cwd(), 'tests/screenshots');
    const archiveDir = path.join(process.cwd(), 'test-results', `archive-${Date.now()}`);

    if (fs.existsSync(screenshotDir)) {
      // Create archive directory
      fs.mkdirSync(archiveDir, { recursive: true });

      // Copy screenshots to archive
      const { execSync } = require('child_process');
      execSync(`cp -r ${screenshotDir}/* ${archiveDir}/`, { stdio: 'inherit' });

      console.log(`📦 Screenshots archived to: ${archiveDir}`);

      // Create summary file
      const summaryPath = path.join(archiveDir, 'test-summary.json');
      const summary = {
        timestamp: new Date().toISOString(),
        totalScreenshots: countFilesInDirectory(archiveDir),
        testRun: process.env.CI ? 'CI' : 'Local',
        archived: true
      };

      fs.writeFileSync(summaryPath, JSON.stringify(summary, null, 2));
      console.log('📊 Test summary created');
    }

    // Clean up temporary files if needed
    const tempFiles = [
      path.join(process.cwd(), 'test-results', 'temp-*')
    ];

    tempFiles.forEach(pattern => {
      try {
        const { execSync } = require('child_process');
        execSync(`rm -rf ${pattern}`, { stdio: 'inherit' });
      } catch (error) {
        console.warn('⚠️  Warning during cleanup:', error instanceof Error ? error.message : String(error));
      }
    });

  } catch (error) {
    console.warn('⚠️  Warning during teardown:', error instanceof Error ? error.message : String(error));
  }

  console.log('✅ Global teardown completed');
}

function countFilesInDirectory(dirPath: string): number {
  try {
    const items = fs.readdirSync(dirPath);
    let count = 0;

    for (const item of items) {
      const fullPath = path.join(dirPath, item);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory()) {
        count += countFilesInDirectory(fullPath);
      } else if (item.endsWith('.png') || item.endsWith('.jpg') || item.endsWith('.jpeg')) {
        count++;
      }
    }

    return count;
  } catch (error) {
    return 0;
  }
}
