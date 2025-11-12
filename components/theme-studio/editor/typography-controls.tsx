'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useTheme } from '@/lib/theme-engine/theme-context'

export function TypographyControls() {
  const { theme } = useTheme()

  return (
    <Card>
      <CardHeader>
        <CardTitle>Typography Controls</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">
          Typography controls will be implemented here.
        </p>
        <div className="mt-4 space-y-2">
          <div>
            <h4 className="font-medium mb-2">Font Sizes</h4>
            {Object.entries(theme.typography.fontSize).slice(0, 5).map(([key, value]) => (
              <div key={key} className="flex items-center justify-between">
                <span className="text-sm font-medium">{key}</span>
                <span className="text-sm text-muted-foreground">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
