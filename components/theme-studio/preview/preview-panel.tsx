'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export function PreviewPanel() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Live Preview</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4">Preview your theme changes in real-time.</p>
        <div className="space-y-4">
          <div className="p-4 border rounded-md bg-card">
            <h3 className="font-medium mb-2">Sample Components</h3>
            <Button>Primary Button</Button>
            <div className="mt-2 p-2 bg-muted rounded">Muted content area</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
