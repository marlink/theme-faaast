#!/usr/bin/env node

/**
 * Theme Validation Script
 * Validates theme JSON files against the schema
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// Simple theme validation (in production, this would import the full validation schema)
function validateTheme(theme) {
  const errors = []

  if (!theme.id) errors.push('Missing theme ID')
  if (!theme.name) errors.push('Missing theme name')
  if (!theme.version) errors.push('Missing theme version')
  if (!theme.colors) errors.push('Missing colors object')
  if (!theme.spacing) errors.push('Missing spacing object')
  if (!theme.typography) errors.push('Missing typography object')

  // Check for dangerous CSS values
  const dangerousPatterns = [/javascript:/i, /expression\(/i, /vbscript:/i]
  Object.values(theme.colors || {}).forEach(color => {
    if (typeof color === 'object' && color.value) {
      dangerousPatterns.forEach(pattern => {
        if (pattern.test(color.value)) {
          errors.push(`Potentially dangerous CSS value in color: ${color.value}`)
        }
      })
    }
  })

  return {
    valid: errors.length === 0,
    errors
  }
}

async function main() {
  console.log('🔍 Validating themes...')

  const themesDir = path.join(__dirname, '..', 'themes')
  const errors = []

  try {
    // Check if themes directory exists
    if (!fs.existsSync(themesDir)) {
      console.log('⚠️  No themes directory found, skipping validation')
      return
    }

    const files = fs.readdirSync(themesDir).filter(file => file.endsWith('.json'))

    if (files.length === 0) {
      console.log('⚠️  No theme files found')
      return
    }

    for (const file of files) {
      const filePath = path.join(themesDir, file)
      try {
        const content = fs.readFileSync(filePath, 'utf8')
        const theme = JSON.parse(content)

        const result = validateTheme(theme)

        if (!result.valid) {
          errors.push(`${file}: ${result.errors.join(', ')}`)
          console.log(`❌ ${file}: ${result.errors.join(', ')}`)
        } else {
          console.log(`✅ ${file}: Valid`)
        }
      } catch (err) {
        errors.push(`${file}: Failed to parse JSON - ${err.message}`)
        console.log(`❌ ${file}: Failed to parse JSON - ${err.message}`)
      }
    }

    if (errors.length > 0) {
      console.log(`\n❌ Validation failed with ${errors.length} error(s)`)
      process.exit(1)
    } else {
      console.log('\n✅ All themes validated successfully')
    }

  } catch (err) {
    console.error('❌ Validation script failed:', err.message)
    process.exit(1)
  }
}

main().catch(err => {
  console.error('❌ Unexpected error:', err)
  process.exit(1)
})
