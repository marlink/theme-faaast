'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { createClient } from '@/lib/supabase/client'
import { checkDownloadStatusClient, incrementDownloadCountClient } from '@/lib/supabase/utils-client'
import { useTheme } from '@/lib/theme-engine/theme-context'
import { Download, Lock, Loader2, AlertCircle, CheckCircle, CreditCard } from 'lucide-react'
import { toast } from 'sonner'
import type { ThemeConfig } from '@/types/theme'

interface ExportDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function ExportDialog({ open, onOpenChange }: ExportDialogProps) {
  const router = useRouter()
  const { theme } = useTheme()
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(false)
  const [saving, setSaving] = useState(false)
  const [downloading, setDownloading] = useState(false)
  const [themeName, setThemeName] = useState(theme.name)
  const [downloadStatus, setDownloadStatus] = useState<any>(null)

  useEffect(() => {
    if (open) {
      checkAuth()
    }
  }, [open])

  const checkAuth = async () => {
    const supabase = createClient()
    const {
      data: { user: currentUser },
    } = await supabase.auth.getUser()

    if (currentUser) {
      setUser(currentUser)
      const status = await checkDownloadStatusClient(currentUser.id)
      setDownloadStatus(status)
    } else {
      setUser(null)
      setDownloadStatus(null)
    }
  }

  const handleSaveTheme = async () => {
    if (!user) {
      router.push('/auth/login?redirect=/theme-studio')
      return
    }

    if (!themeName.trim()) {
      toast.error('Please enter a theme name')
      return
    }

    setSaving(true)

    try {
      const supabase = createClient()

      // Convert Date to string for JSON storage
      const themeData = {
        ...theme,
        timestamp: theme.timestamp.toISOString(),
      }

      const { error } = await supabase.from('themes').insert({
        user_id: user.id,
        name: themeName,
        theme_data: themeData,
        download_count: 0,
        is_paid: false,
      })

      if (error) {
        throw error
      }

      toast.success('Theme saved successfully!')
      setSaving(false)
      onOpenChange(false)
      router.push('/profile')
    } catch (error: any) {
      toast.error(error.message || 'Failed to save theme')
      setSaving(false)
    }
  }

  const handleDownload = async (format: 'json' | 'css' | 'tailwind') => {
    if (!user) {
      router.push('/auth/login?redirect=/theme-studio')
      return
    }

    if (!downloadStatus?.canDownload && !downloadStatus?.hasPaid) {
      router.push('/profile/payment')
      return
    }

    setDownloading(true)

    try {
      // First, save the theme if it hasn't been saved
      const supabase = createClient()
      const { data: existingTheme } = await supabase
        .from('themes')
        .select('id')
        .eq('user_id', user.id)
        .eq('name', themeName)
        .single()

      let themeId = existingTheme?.id

      if (!themeId) {
        const themeData = {
          ...theme,
          timestamp: theme.timestamp.toISOString(),
        }

        const { data: newTheme, error } = await supabase
          .from('themes')
          .insert({
            user_id: user.id,
            name: themeName,
            theme_data: themeData,
            download_count: 0,
            is_paid: false,
          })
          .select()
          .single()

        if (error) throw error
        themeId = newTheme.id
      }

      // Increment download count
      await incrementDownloadCountClient(user.id, themeId)

      // Generate download based on format
      let content = ''
      let filename = ''
      let mimeType = ''

      if (format === 'json') {
        content = JSON.stringify(theme, null, 2)
        filename = `${themeName.replace(/\s+/g, '-').toLowerCase()}-theme.json`
        mimeType = 'application/json'
      } else if (format === 'css') {
        // Generate CSS variables
        content = generateCSS(theme)
        filename = `${themeName.replace(/\s+/g, '-').toLowerCase()}-theme.css`
        mimeType = 'text/css'
      } else {
        // Tailwind config
        content = generateTailwindConfig(theme)
        filename = `${themeName.replace(/\s+/g, '-').toLowerCase()}-tailwind.config.js`
        mimeType = 'text/javascript'
      }

      // Trigger download
      const blob = new Blob([content], { type: mimeType })
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = filename
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      URL.revokeObjectURL(url)

      toast.success('Theme downloaded successfully!')
      setDownloading(false)
      onOpenChange(false)
      router.refresh()
    } catch (error: any) {
      toast.error(error.message || 'Failed to download theme')
      setDownloading(false)
    }
  }

  const generateCSS = (theme: ThemeConfig): string => {
    let css = `/* ${theme.name} Theme */\n:root {\n`

    // Colors
    Object.entries(theme.colors).forEach(([key, token]) => {
      css += `  --color-${key}: ${token.value};\n`
    })

    // Spacing
    Object.entries(theme.spacing).forEach(([key, value]) => {
      css += `  --spacing-${key}: ${value};\n`
    })

    css += '}\n'
    return css
  }

  const generateTailwindConfig = (theme: ThemeConfig): string => {
    const colors: Record<string, string> = {}
    Object.entries(theme.colors).forEach(([key, token]) => {
      colors[key] = token.value
    })

    const spacing: Record<string, string> = {}
    Object.entries(theme.spacing).forEach(([key, value]) => {
      spacing[key] = value
    })

    return `module.exports = {
  theme: {
    extend: {
      colors: ${JSON.stringify(colors, null, 6).replace(/"/g, "'")},
      spacing: ${JSON.stringify(spacing, null, 6).replace(/"/g, "'")},
    },
  },
}`
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-zinc-800 border-zinc-700">
        <DialogHeader>
          <DialogTitle className="text-white">Export Theme</DialogTitle>
          <DialogDescription className="text-zinc-400">
            Save and download your theme in various formats
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          {!user ? (
            <Alert className="bg-orange-900/20 border-orange-800">
              <AlertCircle className="h-4 w-4 text-orange-500" />
              <AlertDescription className="text-orange-200">
                You need to sign in to save and download themes.
              </AlertDescription>
            </Alert>
          ) : downloadStatus && !downloadStatus.canDownload && !downloadStatus.hasPaid ? (
            <Alert className="bg-orange-900/20 border-orange-800">
              <Lock className="h-4 w-4 text-orange-500" />
              <AlertDescription className="text-orange-200">
                You've used your free download. Upgrade to premium for unlimited downloads.
              </AlertDescription>
            </Alert>
          ) : downloadStatus?.hasPaid ? (
            <Alert className="bg-green-900/20 border-green-800">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <AlertDescription className="text-green-200">
                Premium account - Unlimited downloads available
              </AlertDescription>
            </Alert>
          ) : null}

          <div className="space-y-2">
            <Label htmlFor="theme-name" className="text-zinc-300">
              Theme Name
            </Label>
            <Input
              id="theme-name"
              value={themeName}
              onChange={(e) => setThemeName(e.target.value)}
              placeholder="My Awesome Theme"
              className="bg-zinc-900 border-zinc-700 text-white"
              disabled={saving || downloading}
            />
          </div>

          <div className="space-y-2">
            <Label className="text-zinc-300">Export Format</Label>
            <div className="flex gap-2 flex-wrap">
              <Button
                variant="outline"
                onClick={() => handleDownload('json')}
                disabled={!user || saving || downloading}
                className="border-zinc-600 text-zinc-300 hover:bg-zinc-700"
              >
                {downloading ? (
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                ) : (
                  <Download className="w-4 h-4 mr-2" />
                )}
                JSON
              </Button>
              <Button
                variant="outline"
                onClick={() => handleDownload('css')}
                disabled={!user || saving || downloading}
                className="border-zinc-600 text-zinc-300 hover:bg-zinc-700"
              >
                {downloading ? (
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                ) : (
                  <Download className="w-4 h-4 mr-2" />
                )}
                CSS
              </Button>
              <Button
                variant="outline"
                onClick={() => handleDownload('tailwind')}
                disabled={!user || saving || downloading}
                className="border-zinc-600 text-zinc-300 hover:bg-zinc-700"
              >
                {downloading ? (
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                ) : (
                  <Download className="w-4 h-4 mr-2" />
                )}
                Tailwind
              </Button>
            </div>
          </div>

          {user && (
            <div className="pt-4 border-t border-zinc-700">
              <Button
                onClick={handleSaveTheme}
                disabled={saving || downloading || !themeName.trim()}
                className="w-full bg-orange-600 hover:bg-orange-700 text-white"
              >
                {saving ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Saving...
                  </>
                ) : (
                  'Save Theme to Profile'
                )}
              </Button>
            </div>
          )}

          {!user && (
            <div className="pt-4 border-t border-zinc-700 space-y-2">
              <Button
                onClick={() => router.push('/auth/login?redirect=/theme-studio')}
                className="w-full bg-orange-600 hover:bg-orange-700 text-white"
              >
                Sign In to Continue
              </Button>
            </div>
          )}

          {user && !downloadStatus?.hasPaid && downloadStatus && downloadStatus.totalDownloads >= 1 && (
            <Button
              onClick={() => router.push('/profile/payment')}
              variant="outline"
              className="w-full border-orange-600 text-orange-500 hover:bg-orange-900/20"
            >
              <CreditCard className="w-4 h-4 mr-2" />
              Upgrade to Premium
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
