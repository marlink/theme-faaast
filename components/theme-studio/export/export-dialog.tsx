'use client'

import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'

interface ExportDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function ExportDialog({ open, onOpenChange }: ExportDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Export Theme</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <p className="text-muted-foreground">
            Export your theme in various formats.
          </p>
          <div className="flex gap-2">
            <Button variant="outline">JSON</Button>
            <Button variant="outline">CSS</Button>
            <Button variant="outline">Tailwind</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
