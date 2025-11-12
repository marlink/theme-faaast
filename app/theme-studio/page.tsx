'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { ThemeProvider, useTheme } from '@/lib/theme-engine/theme-context'
import { ColorPicker } from '@/components/theme-studio/editor/color-picker'
import { BackgroundEditor } from '@/components/theme-studio/editor/background-editor'
import { PreviewPanel } from '@/components/theme-studio/preview/preview-panel'
import { ExportDialog } from '@/components/theme-studio/export/export-dialog'
import { HistoryPanel } from '@/components/theme-studio/history/history-panel'
import { Eye, Download, History, Settings } from 'lucide-react'

function ThemeStudioContent() {
  const { theme, deviceCapabilities, error } = useTheme()
  const [activeTab, setActiveTab] = useState('colors')
  const [showExport, setShowExport] = useState(false)

  return (
    <div className="min-h-screen bg-background">

      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Theme Studio</h1>
              <p className="text-muted-foreground">
                Customize your theme with advanced controls
              </p>
            </div>
            <div className="flex items-center gap-2">
              {deviceCapabilities && (
                <Badge variant="outline">
                  {deviceCapabilities.type} • {deviceCapabilities.screen.width}x{deviceCapabilities.screen.height}
                </Badge>
              )}
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowExport(true)}
              >
                <Download className="w-4 h-4 mr-2" />
                Export
              </Button>
            </div>
          </div>

          {error && (
            <div className="mt-4 p-4 bg-destructive/10 border border-destructive/20 rounded-md">
              <p className="text-destructive text-sm">{error}</p>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Editor Panel */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="w-5 h-5" />
                  Theme Editor
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs value={activeTab} onValueChange={setActiveTab}>
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="colors">
                      Colors
                    </TabsTrigger>
                    <TabsTrigger value="backgrounds">
                      Backgrounds
                    </TabsTrigger>
                    <TabsTrigger value="preview">
                      Preview
                    </TabsTrigger>
                  </TabsList>

                  <div className="mt-6">
                    <TabsContent value="colors">
                      <ColorPicker />
                    </TabsContent>

                    <TabsContent value="backgrounds">
                      <BackgroundEditor />
                    </TabsContent>

                    <TabsContent value="preview">
                      <PreviewPanel />
                    </TabsContent>
                  </div>
                </Tabs>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Theme Info */}
            <Card>
              <CardHeader>
                <CardTitle>Current Theme</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium">Name</label>
                  <p className="text-sm text-muted-foreground">{theme.name}</p>
                </div>
                <div>
                  <label className="text-sm font-medium">Version</label>
                  <p className="text-sm text-muted-foreground">{theme.version}</p>
                </div>
                <div>
                  <label className="text-sm font-medium">Last Modified</label>
                  <p className="text-sm text-muted-foreground">
                    {theme.timestamp.toLocaleString()}
                  </p>
                </div>
                <div>
                  <label className="text-sm font-medium">Tags</label>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {theme.metadata.tags.map(tag => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* History */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <History className="w-5 h-5" />
                  History
                </CardTitle>
              </CardHeader>
              <CardContent>
                <HistoryPanel />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Export Dialog */}
      <ExportDialog open={showExport} onOpenChange={setShowExport} />
    </div>
  )
}

export default function ThemeStudioPage() {
  return (
    <ThemeProvider>
      <ThemeStudioContent />
    </ThemeProvider>
  )
}
