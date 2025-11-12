import { z } from 'zod'
import type { ValidationResult, ThemeConfig } from '@/types/theme'

// Color validation
export const ColorTokenSchema = z.object({
  value: z.string().min(1, 'Color value cannot be empty'),
  space: z.enum(['oklch', 'hsl', 'rgb', 'hex'], {
    errorMap: () => ({ message: 'Invalid color space. Must be oklch, hsl, rgb, or hex' })
  }),
  contrast: z.number().min(1).max(21).optional(),
  semantic: z.string().optional()
})

// Validate CSS color values
export function validateColorValue(value: string, space: string): boolean {
  switch (space) {
    case 'hex':
      return /^#([A-Fa-f0-9]{3}|[A-Fa-f0-9]{6}|[A-Fa-f0-9]{8})$/.test(value)
    case 'rgb':
      return /^rgb\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*\)$/.test(value) ||
             /^rgba\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*,\s*[\d.]+\s*\)$/.test(value)
    case 'hsl':
      return /^hsl\(\s*\d+\s*,\s*\d+%\s*,\s*\d+%\s*\)$/.test(value) ||
             /^hsla\(\s*\d+\s*,\s*\d+%\s*,\s*\d+%\s*,\s*[\d.]+\s*\)$/.test(value)
    case 'oklch':
      return /^oklch\(\s*[\d.]+\s+[\d.]+\s+\d+\s*\)$/.test(value) ||
             /^oklch\(\s*[\d.]+\s+[\d.]+\s+\d+\s+\/\s*[\d.]+\s*\)$/.test(value)
    default:
      return false
  }
}

// Spacing validation
export const SpacingScaleSchema = z.object({
  xs: z.string().regex(/^\d+(\.\d+)?(px|rem|em)$/, 'Invalid spacing unit'),
  sm: z.string().regex(/^\d+(\.\d+)?(px|rem|em)$/, 'Invalid spacing unit'),
  md: z.string().regex(/^\d+(\.\d+)?(px|rem|em)$/, 'Invalid spacing unit'),
  lg: z.string().regex(/^\d+(\.\d+)?(px|rem|em)$/, 'Invalid spacing unit'),
  xl: z.string().regex(/^\d+(\.\d+)?(px|rem|em)$/, 'Invalid spacing unit'),
  '2xl': z.string().regex(/^\d+(\.\d+)?(px|rem|em)$/, 'Invalid spacing unit'),
  '3xl': z.string().regex(/^\d+(\.\d+)?(px|rem|em)$/, 'Invalid spacing unit')
})

// Typography validation
export const TypographyScaleSchema = z.object({
  fontSize: z.record(z.string().regex(/^\d+(\.\d+)?(px|rem|em)$/, 'Invalid font size')),
  fontWeight: z.record(z.string().regex(/^\d+$/, 'Font weight must be numeric')),
  lineHeight: z.record(z.string().regex(/^[\d.]+$/, 'Line height must be numeric')),
  letterSpacing: z.record(z.string().regex(/^-?[\d.]+em$/, 'Letter spacing must be in em units'))
})

// Gradient validation
export const GradientConfigSchema = z.object({
  id: z.string().min(1, 'Gradient ID cannot be empty'),
  name: z.string().min(1, 'Gradient name cannot be empty'),
  type: z.enum(['linear', 'radial', 'conic']),
  angle: z.number().min(0).max(360).optional(),
  position: z.string().optional(),
  colors: z.array(z.object({
    color: z.string(),
    position: z.number().min(0).max(100)
  })).min(2, 'Gradient must have at least 2 color stops'),
  css: z.string()
})

// Shadow validation
export const ShadowConfigSchema = z.object({
  x: z.number(),
  y: z.number(),
  blur: z.number().min(0),
  spread: z.number().optional(),
  color: z.string(),
  inset: z.boolean().optional()
})

// Border validation
export const BorderConfigSchema = z.object({
  width: z.string().regex(/^\d+px$/, 'Border width must be in px'),
  style: z.enum(['solid', 'dashed', 'dotted']),
  color: z.string(),
  radius: z.string().regex(/^\d+(\.\d+)?(px|rem|em)$/, 'Invalid border radius unit')
})

// Effects validation
export const EffectConfigSchema = z.object({
  blur: z.string().regex(/^\d+px$/, 'Blur must be in px'),
  opacity: z.number().min(0).max(1),
  backdropBlur: z.string().regex(/^\d+px$/, 'Backdrop blur must be in px').optional(),
  mixBlendMode: z.enum(['normal', 'multiply', 'screen', 'overlay', 'darken', 'lighten', 'color-dodge', 'color-burn', 'hard-light', 'soft-light', 'difference', 'exclusion', 'hue', 'saturation', 'color', 'luminosity']).optional()
})

// Animation validation
export const AnimationConfigSchema = z.object({
  duration: z.string().regex(/^\d+ms$|^\d+(\.\d+)?s$/, 'Duration must be in ms or s'),
  easing: z.string(),
  delay: z.string().regex(/^\d+ms$|^\d+(\.\d+)?s$/, 'Delay must be in ms or s').optional(),
  direction: z.enum(['normal', 'reverse', 'alternate', 'alternate-reverse']).optional()
})

// Background validation
export const BackgroundConfigSchema = z.object({
  type: z.enum(['gradient', 'solid', 'image']),
  gradient: z.object({
    type: z.enum(['linear', 'radial', 'conic']),
    angle: z.number().min(0).max(360).optional(),
    colors: z.array(z.object({
      color: z.string(),
      position: z.number().min(0).max(100)
    })).min(2, 'Gradient must have at least 2 colors'),
    blur: z.string().regex(/^\d+px$/, 'Blur must be in px').optional()
  }).optional(),
  solid: z.object({
    color: z.string()
  }).optional(),
  image: z.object({
    url: z.string().url('Must be a valid URL'),
    opacity: z.number().min(0).max(1),
    blur: z.string().regex(/^\d+px$/, 'Blur must be in px'),
    overlay: z.object({
      color: z.string(),
      opacity: z.number().min(0).max(1)
    }).optional()
  }).optional()
})

// Complete theme validation schema
export const ThemeConfigSchema = z.object({
  id: z.string().min(1, 'Theme ID cannot be empty'),
  name: z.string().min(1, 'Theme name cannot be empty'),
  version: z.string().regex(/^\d+\.\d+\.\d+$/, 'Version must be in semver format'),
  timestamp: z.date(),
  author: z.string().optional(),
  colors: z.record(ColorTokenSchema),
  spacing: SpacingScaleSchema,
  typography: TypographyScaleSchema,
  gradients: z.array(GradientConfigSchema).optional(),
  shadows: z.array(ShadowConfigSchema).optional(),
  borders: BorderConfigSchema,
  effects: EffectConfigSchema,
  animations: z.record(AnimationConfigSchema).optional(),
  backgrounds: z.record(BackgroundConfigSchema),
  responsive: z.record(z.any()).optional(), // Device-specific overrides
  metadata: z.object({
    baseTheme: z.string(),
    tags: z.array(z.string()),
    description: z.string(),
    accessibility: z.object({
      wcagLevel: z.enum(['A', 'AA', 'AAA']),
      contrastRatio: z.number().min(1),
      reducedMotion: z.boolean()
    }),
    performance: z.object({
      tier: z.enum(['low', 'medium', 'high']),
      estimatedSize: z.number().min(0)
    })
  })
})

// Validation functions
export async function validateTheme(theme: unknown): Promise<ValidationResult> {
  const result: ValidationResult = {
    valid: true,
    errors: [],
    warnings: [],
    accessibility: {
      score: 100,
      issues: []
    }
  }

  try {
    // Parse with Zod
    const parsedTheme = ThemeConfigSchema.parse(theme) as ThemeConfig

    // Custom validations
    await validateColorContrasts(parsedTheme, result)
    validateCSSInjection(parsedTheme, result)
    validatePerformance(parsedTheme, result)

  } catch (error) {
    if (error instanceof z.ZodError) {
      result.valid = false
      error.errors.forEach(err => {
        result.errors.push({
          path: err.path.join('.'),
          message: err.message,
          severity: 'error'
        })
      })
    } else {
      result.valid = false
      result.errors.push({
        path: 'unknown',
        message: 'Unknown validation error',
        severity: 'error'
      })
    }
  }

  return result
}

async function validateColorContrasts(theme: ThemeConfig, result: ValidationResult): Promise<void> {
  const colorPairs = [
    { fg: 'foreground', bg: 'background' },
    { fg: 'primary-foreground', bg: 'primary' },
    { fg: 'card-foreground', bg: 'card' },
    { fg: 'popover-foreground', bg: 'popover' },
    { fg: 'accent-foreground', bg: 'accent' },
    { fg: 'muted-foreground', bg: 'muted' }
  ]

  for (const pair of colorPairs) {
    const fgToken = theme.colors[pair.fg]
    const bgToken = theme.colors[pair.bg]

    if (fgToken && bgToken) {
      const contrast = calculateContrastRatio(fgToken.value, bgToken.value)

      if (contrast < 4.5) {
        result.accessibility.issues.push({
          type: 'contrast',
          message: `Contrast ratio between ${pair.fg} and ${pair.bg} is ${contrast.toFixed(1)}:1 (minimum 4.5:1 required)`,
          impact: 'serious'
        })
        result.accessibility.score -= 20
      }
    }
  }

  // Update WCAG level based on results
  if (result.accessibility.issues.length === 0) {
    theme.metadata.accessibility.wcagLevel = 'AAA'
  } else if (result.accessibility.issues.some(i => i.impact === 'serious')) {
    theme.metadata.accessibility.wcagLevel = 'A'
  } else {
    theme.metadata.accessibility.wcagLevel = 'AA'
  }
}

function validateCSSInjection(theme: ThemeConfig, result: ValidationResult): void {
  const dangerousPatterns = [
    /javascript:/i,
    /expression\(/i,
    /vbscript:/i,
    /data:text/i,
    /@import/i,
    /<script/i,
    /<\/script>/i
  ]

  Object.values(theme.colors).forEach(token => {
    dangerousPatterns.forEach(pattern => {
      if (pattern.test(token.value)) {
        result.errors.push({
          path: `colors.${Object.keys(theme.colors).find(k => theme.colors[k] === token)}`,
          message: 'Potentially dangerous CSS value detected',
          severity: 'error'
        })
      }
    })
  })

  // Size limits
  const themeSize = JSON.stringify(theme).length
  if (themeSize > 200 * 1024) { // 200KB limit
    result.errors.push({
      path: 'root',
      message: 'Theme size exceeds 200KB limit',
      severity: 'error'
    })
  }
}

function validatePerformance(theme: ThemeConfig, result: ValidationResult): void {
  // Count CSS variables
  const variableCount = Object.keys(theme.colors).length +
                       Object.keys(theme.spacing).length +
                       Object.keys(theme.typography.fontSize).length

  if (variableCount > 100) {
    result.warnings.push({
      path: 'performance',
      message: 'High number of CSS variables may impact performance',
      suggestion: 'Consider consolidating similar tokens'
    })
  }

  // Estimate bundle size
  theme.metadata.performance.estimatedSize = Math.round(variableCount * 0.1) // Rough estimate

  // Set performance tier
  if (theme.metadata.performance.estimatedSize > 50) {
    theme.metadata.performance.tier = 'low'
  } else if (theme.metadata.performance.estimatedSize > 25) {
    theme.metadata.performance.tier = 'medium'
  } else {
    theme.metadata.performance.tier = 'high'
  }
}

// Utility function for contrast calculation
function calculateContrastRatio(fg: string, bg: string): number {
  // Simplified contrast calculation
  // In production, use a proper color library like colorjs.io
  const fgLuminance = getLuminance(fg)
  const bgLuminance = getLuminance(bg)

  const lighter = Math.max(fgLuminance, bgLuminance)
  const darker = Math.min(fgLuminance, bgLuminance)

  return (lighter + 0.05) / (darker + 0.05)
}

function getLuminance(color: string): number {
  // Placeholder - implement proper luminance calculation
  // For now, return a reasonable default
  return 0.5
}

// Sanitization utilities
export function sanitizeCSSValue(value: string): string {
  // Remove potentially dangerous content
  return value
    .replace(/javascript:/gi, '')
    .replace(/vbscript:/gi, '')
    .replace(/expression\(/gi, '')
    .replace(/<script/gi, '')
    .replace(/<\/script>/gi, '')
    .trim()
}

export function sanitizeThemeName(name: string): string {
  return name.replace(/[^a-zA-Z0-9\s\-_]/g, '').trim()
}

// Migration utilities
export function migrateTheme(oldTheme: any): ThemeConfig {
  // Handle version migrations
  // This would contain logic to upgrade old theme formats
  return oldTheme as ThemeConfig
}
