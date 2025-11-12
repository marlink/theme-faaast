#!/usr/bin/env node

/**
 * Theme Migration Script
 * Migrates theme JSON files between versions
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// Migration functions for different versions
const migrations = {
  '1.0.0': (theme) => {
    // Add metadata if missing
    if (!theme.metadata) {
      theme.metadata = {
        baseTheme: 'automotive-dark',
        tags: ['migrated'],
        description: 'Migrated from v1.0.0',
        accessibility: {
          wcagLevel: 'AA',
          contrastRatio: 4.5,
          reducedMotion: false
        },
        performance: {
          tier: 'medium',
          estimatedSize: 25
        }
      }
    }

    // Update version
    theme.version = '1.1.0'
    theme.timestamp = new Date().toISOString()

    return theme
  },

  '1.1.0': (theme) => {
    // Add responsive overrides if missing
    if (!theme.responsive) {
      theme.responsive = {}
    }

    // Update version
    theme.version = '1.2.0'
    theme.timestamp = new Date().toISOString()

    return theme
  }
}

function migrateTheme(theme) {
  let currentTheme = { ...theme }
  const appliedMigrations = []

  // Apply migrations in order
  Object.keys(migrations).forEach(version => {
    if (currentTheme.version === version) {
      console.log(`  Applying migration ${version} -> ${version.replace(/\d+$/, match => (parseInt(match) + 1).toString())}`)
      currentTheme = migrations[version](currentTheme)
      appliedMigrations.push(version)
    }
  })

  return {
    theme: currentTheme,
    appliedMigrations
  }
}

async function main() {
  console.log('🔄 Migrating themes...')

  const themesDir = path.join(__dirname, '..', 'themes')
  let migratedCount = 0

  try {
    // Check if themes directory exists
    if (!fs.existsSync(themesDir)) {
      console.log('⚠️  No themes directory found, creating...')
      fs.mkdirSync(themesDir, { recursive: true })
      return
    }

    const files = fs.readdirSync(themesDir).filter(file => file.endsWith('.json'))

    if (files.length === 0) {
      console.log('⚠️  No theme files found to migrate')
      return
    }

    for (const file of files) {
      const filePath = path.join(themesDir, file)
      try {
        const content = fs.readFileSync(filePath, 'utf8')
        const theme = JSON.parse(content)

        const result = migrateTheme(theme)

        if (result.appliedMigrations.length > 0) {
          // Write migrated theme back
          fs.writeFileSync(filePath, JSON.stringify(result.theme, null, 2))
          console.log(`✅ ${file}: Migrated (${result.appliedMigrations.join(', ')})`)
          migratedCount++
        } else {
          console.log(`⏭️  ${file}: No migration needed`)
        }
      } catch (err) {
        console.log(`❌ ${file}: Migration failed - ${err.message}`)
      }
    }

    console.log(`\n✅ Migration complete. ${migratedCount} theme(s) updated.`)

  } catch (err) {
    console.error('❌ Migration script failed:', err.message)
    process.exit(1)
  }
}

main().catch(err => {
  console.error('❌ Unexpected error:', err)
  process.exit(1)
})
