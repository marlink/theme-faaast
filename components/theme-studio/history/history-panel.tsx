'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export function HistoryPanel() {
  return (
    <div className="space-y-2">
      <div className="text-sm text-muted-foreground mb-3">
        Recent changes
      </div>

      <div className="space-y-2">
        <Card className="p-3">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm font-medium">Updated primary color</div>
              <div className="text-xs text-muted-foreground">2 minutes ago</div>
            </div>
            <Badge variant="secondary" className="text-xs">Color</Badge>
          </div>
        </Card>

        <Card className="p-3">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm font-medium">Modified spacing scale</div>
              <div className="text-xs text-muted-foreground">5 minutes ago</div>
            </div>
            <Badge variant="secondary" className="text-xs">Spacing</Badge>
          </div>
        </Card>
      </div>

      <div className="pt-2">
        <Button variant="outline" size="sm" className="w-full">
          View Full History
        </Button>
      </div>
    </div>
  )
}
