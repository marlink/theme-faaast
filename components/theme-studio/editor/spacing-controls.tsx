'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useTheme } from '@/lib/theme-engine/theme-context';

export function SpacingControls() {
  const { theme } = useTheme();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Spacing Controls</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">Spacing controls will be implemented here.</p>
        <div className="mt-4 space-y-2">
          {Object.entries(theme.spacing).map(([key, value]) => (
            <div key={key} className="flex items-center justify-between">
              <span className="text-sm font-medium">{key}</span>
              <span className="text-sm text-muted-foreground">{value}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
