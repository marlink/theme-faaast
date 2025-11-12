'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { useTheme } from '@/lib/theme-engine/theme-context'
import { Palette } from 'lucide-react'

const PRESET_BACKGROUNDS = {
  'ocean-blue': {
    type: 'gradient' as const,
    gradient: {
      type: 'linear' as const,
      angle: 135,
      colors: [
        { color: 'oklch(0.4 0.15 240)', position: 0 },
        { color: 'oklch(0.6 0.1 220)', position: 50 },
        { color: 'oklch(0.3 0.2 260)', position: 100 }
      ],
      blur: '20px'
    }
  },
  'sunset-warm': {
    type: 'gradient' as const,
    gradient: {
      type: 'linear' as const,
      angle: 180,
      colors: [
        { color: 'oklch(0.6 0.15 25)', position: 0 },
        { color: 'oklch(0.7 0.2 45)', position: 50 },
        { color: 'oklch(0.4 0.1 15)', position: 100 }
      ],
      blur: '25px'
    }
  },
  'forest-green': {
    type: 'gradient' as const,
    gradient: {
      type: 'radial' as const,
      colors: [
        { color: 'oklch(0.35 0.1 140)', position: 0 },
        { color: 'oklch(0.25 0.05 120)', position: 70 },
        { color: 'oklch(0.15 0.03 100)', position: 100 }
      ],
      blur: '15px'
    }
  },
  'midnight-purple': {
    type: 'gradient' as const,
    gradient: {
      type: 'conic' as const,
      angle: 45,
      colors: [
        { color: 'oklch(0.2 0.1 300)', position: 0 },
        { color: 'oklch(0.15 0.15 320)', position: 25 },
        { color: 'oklch(0.25 0.08 280)', position: 50 },
        { color: 'oklch(0.18 0.12 340)', position: 75 },
        { color: 'oklch(0.2 0.1 300)', position: 100 }
      ],
      blur: '18px'
    }
  },
  'cosmic-dark': {
    type: 'gradient' as const,
    gradient: {
      type: 'linear' as const,
      angle: 45,
      colors: [
        { color: 'oklch(0.08 0 0)', position: 0 },
        { color: 'oklch(0.12 0.05 270)', position: 30 },
        { color: 'oklch(0.06 0.03 240)', position: 70 },
        { color: 'oklch(0.1 0 0)', position: 100 }
      ],
      blur: '30px'
    }
  },
  'golden-hour': {
    type: 'gradient' as const,
    gradient: {
      type: 'linear' as const,
      angle: 90,
      colors: [
        { color: 'oklch(0.8 0.1 45)', position: 0 },
        { color: 'oklch(0.9 0.15 35)', position: 40 },
        { color: 'oklch(0.7 0.08 55)', position: 80 },
        { color: 'oklch(0.6 0.05 65)', position: 100 }
      ],
      blur: '22px'
    }
  }
}

export function BackgroundEditor() {
  const { theme, updateTheme } = useTheme()

  const applyPreset = (backgroundKey: string, presetName: string) => {
    const preset = PRESET_BACKGROUNDS[presetName as keyof typeof PRESET_BACKGROUNDS]
    if (preset) {
      updateTheme({
        backgrounds: {
          ...theme.backgrounds,
          [backgroundKey]: preset
        }
      })
    }
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Palette className="w-5 h-5" />
            Background Themes
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.entries(theme.backgrounds).map(([key, background]) => (
              <div key={key} className="space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium capitalize">{key.replace('-', ' ')}</h4>
                  <div className="flex gap-1">
                    {Object.keys(PRESET_BACKGROUNDS).slice(0, 3).map(preset => (
                      <Button
                        key={preset}
                        variant="ghost"
                        size="sm"
                        onClick={() => applyPreset(key, preset)}
                        className="text-xs px-2 py-1 h-6"
                      >
                        {preset.split('-')[0]}
                      </Button>
                    ))}
                  </div>
                </div>

                <div
                  className="h-24 rounded-lg border relative overflow-hidden cursor-pointer"
                  style={{
                    background: background.type === 'gradient' && background.gradient
                      ? `linear-gradient(${background.gradient.angle || 0}deg, ${background.gradient.colors.map(c => `${c.color} ${c.position}%`).join(', ')})`
                      : undefined
                  }}
                  onClick={() => {
                    // Could open a detailed editor modal here
                    console.log('Edit background:', key)
                  }}
                >
                  {background.gradient?.blur && (
                    <div
                      className="absolute inset-0"
                      style={{ filter: `blur(${background.gradient.blur})` }}
                    />
                  )}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white font-medium text-xs bg-black/50 px-2 py-1 rounded">
                      {background.type}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-6 border-t">
            <h4 className="font-medium mb-3">Available Presets</h4>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {Object.keys(PRESET_BACKGROUNDS).map(preset => (
                <Button
                  key={preset}
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    // Apply to all backgrounds
                    const presetBg = PRESET_BACKGROUNDS[preset as keyof typeof PRESET_BACKGROUNDS]
                    const newBackgrounds = Object.keys(theme.backgrounds).reduce((acc, key) => {
                      acc[key] = presetBg
                      return acc
                    }, {} as any)

                    updateTheme({ backgrounds: newBackgrounds })
                  }}
                  className="capitalize text-xs"
                >
                  {preset.replace('-', ' ')}
                </Button>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
