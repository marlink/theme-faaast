'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'
import { useTheme } from '@/lib/theme-engine/theme-context'
import { Palette, Copy, Check } from 'lucide-react'

export function ColorPicker() {
  const { theme, updateTheme } = useTheme()
  const [copiedColor, setCopiedColor] = useState<string | null>(null)

  const copyToClipboard = async (color: string) => {
    try {
      await navigator.clipboard.writeText(color)
      setCopiedColor(color)
      setTimeout(() => setCopiedColor(null), 2000)
    } catch (err) {
      console.error('Failed to copy color:', err)
    }
  }

  const updateColor = (key: string, value: string) => {
    updateTheme({
      colors: {
        ...theme.colors,
        [key]: {
          ...theme.colors[key],
          value
        }
      }
    })
  }

  const colorGroups = {
    brand: ['primary', 'primary-hover', 'primary-foreground'],
    surface: ['background', 'background-secondary', 'foreground', 'card', 'card-foreground', 'popover', 'popover-foreground'],
    interactive: ['accent', 'accent-foreground', 'muted', 'muted-foreground'],
    status: ['destructive', 'destructive-foreground', 'success', 'warning'],
    border: ['border', 'input', 'ring']
  }

  return (
    <div className="space-y-6">
      {Object.entries(colorGroups).map(([groupName, colorKeys]) => (
        <Card key={groupName}>
          <CardHeader>
            <CardTitle className="capitalize flex items-center gap-2">
              <Palette className="w-4 h-4" />
              {groupName} Colors
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {colorKeys.map(key => {
                const colorToken = theme.colors[key]
                if (!colorToken) return null

                return (
                  <div key={key} className="space-y-2">
                    <Label className="text-sm font-medium capitalize">
                      {key.replace('-', ' ')}
                    </Label>

                    <div className="flex items-center gap-2">
                      <div
                        className="w-8 h-8 rounded border border-border cursor-pointer"
                        style={{ backgroundColor: colorToken.value }}
                        onClick={() => copyToClipboard(colorToken.value)}
                      />

                      <Input
                        type="text"
                        value={colorToken.value}
                        onChange={(e) => updateColor(key, e.target.value)}
                        className="flex-1 font-mono text-sm"
                      />

                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => copyToClipboard(colorToken.value)}
                        className="p-2"
                      >
                        {copiedColor === colorToken.value ? (
                          <Check className="w-4 h-4 text-green-500" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </Button>
                    </div>

                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="text-xs">
                        {colorToken.space}
                      </Badge>
                      {colorToken.contrast && (
                        <Badge variant="secondary" className="text-xs">
                          {colorToken.contrast.toFixed(1)}:1
                        </Badge>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>
      ))}

      {/* Color Harmony Suggestions */}
      <Card>
        <CardHeader>
          <CardTitle>Color Harmony</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-4">
            Generate harmonious color combinations based on your primary color.
          </p>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              Complementary
            </Button>
            <Button variant="outline" size="sm">
              Triadic
            </Button>
            <Button variant="outline" size="sm">
              Analogous
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
