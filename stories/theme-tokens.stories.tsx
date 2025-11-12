import type { Meta, StoryObj } from '@storybook/react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { defaultColors, defaultSpacing, defaultTypography } from '@/lib/theme-engine/tokens'

const meta: Meta = {
  title: 'Theme/Tokens',
  parameters: {
    docs: {
      description: {
        component: 'Display of all theme design tokens used in the system.'
      }
    }
  }
}

export default meta

// Color Tokens Story
export const ColorTokens: StoryObj = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-4">Color Tokens</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {Object.entries(defaultColors).map(([key, token]) => (
            <Card key={key} className="overflow-hidden">
              <div
                className="h-20 w-full"
                style={{ backgroundColor: token.value }}
              />
              <CardContent className="p-3">
                <div className="text-sm font-medium">{key}</div>
                <div className="text-xs text-muted-foreground">{token.value}</div>
                <Badge variant="outline" className="text-xs mt-1">
                  {token.space}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

// Spacing Scale Story
export const SpacingScale: StoryObj = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-4">Spacing Scale</h2>
        <div className="space-y-3">
          {Object.entries(defaultSpacing).map(([key, value]) => (
            <div key={key} className="flex items-center gap-4">
              <div className="w-20 text-sm font-medium">{key}</div>
              <div className="flex-1">
                <div
                  className="bg-primary h-4 rounded"
                  style={{ width: value }}
                />
              </div>
              <div className="text-sm text-muted-foreground w-16">{value}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// Typography Scale Story
export const TypographyScale: StoryObj = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-4">Typography Scale</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Font Sizes</h3>
            <div className="space-y-2">
              {Object.entries(defaultTypography.fontSize).map(([key, value]) => (
                <div key={key} className="flex items-center gap-4">
                  <div className="w-16 text-sm font-medium">{key}</div>
                  <div
                    className="flex-1 text-primary"
                    style={{ fontSize: value }}
                  >
                    The quick brown fox jumps over the lazy dog
                  </div>
                  <div className="text-sm text-muted-foreground w-16">{value}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Font Weights</h3>
            <div className="space-y-2">
              {Object.entries(defaultTypography.fontWeight).map(([key, value]) => (
                <div
                  key={key}
                  className="flex items-center gap-4"
                  style={{ fontWeight: value }}
                >
                  <div className="w-20 text-sm">{key}</div>
                  <div className="flex-1">The quick brown fox jumps over the lazy dog</div>
                  <div className="text-sm text-muted-foreground w-12">{value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Component with Theme Variables
export const ThemedComponents: StoryObj = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-4">Themed Components</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Primary Button</CardTitle>
            </CardHeader>
            <CardContent>
              <button
                className="px-4 py-2 rounded-md text-primary-foreground"
                style={{
                  backgroundColor: 'var(--color-primary)',
                  border: '1px solid var(--color-primary)'
                }}
              >
                Primary Button
              </button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Card with Theme Colors</CardTitle>
            </CardHeader>
            <CardContent>
              <div
                className="p-4 rounded-md"
                style={{
                  backgroundColor: 'var(--color-card)',
                  color: 'var(--color-card-foreground)',
                  border: '1px solid var(--color-border)'
                }}
              >
                This card uses theme variables for colors and spacing.
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Typography Examples</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div style={{ fontSize: 'var(--font-size-xs)' }}>Extra Small Text</div>
              <div style={{ fontSize: 'var(--font-size-sm)' }}>Small Text</div>
              <div style={{ fontSize: 'var(--font-size-base)' }}>Base Text</div>
              <div style={{ fontSize: 'var(--font-size-lg)' }}>Large Text</div>
              <div style={{ fontSize: 'var(--font-size-xl)' }}>Extra Large Text</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Spacing Examples</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div
                  className="bg-primary h-4 rounded"
                  style={{ width: 'var(--space-xs)' }}
                />
                <div
                  className="bg-primary h-4 rounded"
                  style={{ width: 'var(--space-sm)' }}
                />
                <div
                  className="bg-primary h-4 rounded"
                  style={{ width: 'var(--space-md)' }}
                />
                <div
                  className="bg-primary h-4 rounded"
                  style={{ width: 'var(--space-lg)' }}
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
