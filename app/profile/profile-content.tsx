'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { createClient } from '@/lib/supabase/client'
import { checkDownloadStatusClient as checkDownloadStatus, incrementDownloadCountClient as incrementDownloadCount, type UserDownloadStatus } from '@/lib/supabase/utils-client'
import { User, Download, LogOut, CreditCard, CheckCircle, Lock, Link as LinkIcon } from 'lucide-react'
import { toast } from 'sonner'
import type { User as SupabaseUser } from '@supabase/supabase-js'

interface Theme {
  id: string
  name: string
  theme_data: any
  download_count: number
  created_at: string
}

interface ProfileContentProps {
  user: SupabaseUser
  themes: Theme[]
  downloadStatus: UserDownloadStatus
  hasPaid: boolean
}

export function ProfileContent({ user, themes, downloadStatus, hasPaid }: ProfileContentProps) {
  const router = useRouter()
  const [downloading, setDownloading] = useState<string | null>(null)

  const handleLogout = async () => {
    const supabase = createClient()
    await supabase.auth.signOut()
    router.push('/')
    router.refresh()
  }

  const handleDownload = async (theme: Theme) => {
    if (!downloadStatus.canDownload && !hasPaid) {
      router.push('/profile/payment')
      return
    }

    setDownloading(theme.id)

    try {
      // Increment download count
      await incrementDownloadCount(user.id, theme.id)

      // Create download
      const themeJson = JSON.stringify(theme.theme_data, null, 2)
      const blob = new Blob([themeJson], { type: 'application/json' })
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = `${theme.name.replace(/\s+/g, '-').toLowerCase()}-theme.json`
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      URL.revokeObjectURL(url)

      toast.success('Theme downloaded successfully!')
      router.refresh()
    } catch (error) {
      toast.error('Failed to download theme. Please try again.')
      console.error('Download error:', error)
    } finally {
      setDownloading(null)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">Profile</h1>
            <p className="text-zinc-400">Manage your themes and account</p>
          </div>
          <Button variant="outline" onClick={handleLogout} className="border-zinc-700 text-zinc-300">
            <LogOut className="w-4 h-4 mr-2" />
            Sign out
          </Button>
        </div>
      </div>

      {/* User Info Card */}
      <Card className="mb-6 bg-zinc-800 border-zinc-700">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <User className="w-5 h-5" />
            Account Information
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <p className="text-sm text-zinc-400 mb-1">Email</p>
            <p className="text-white">{user.email}</p>
          </div>
          <div className="flex items-center gap-4">
            <div>
              <p className="text-sm text-zinc-400 mb-1">Status</p>
              {hasPaid ? (
                <Badge className="bg-green-600 text-white">
                  <CheckCircle className="w-3 h-3 mr-1" />
                  Premium
                </Badge>
              ) : (
                <Badge variant="outline" className="border-zinc-600 text-zinc-300">
                  Free
                </Badge>
              )}
            </div>
            <div>
              <p className="text-sm text-zinc-400 mb-1">Downloads</p>
              <p className="text-white">
                {downloadStatus.totalDownloads} / {hasPaid ? '∞' : '1'}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Download Status Alert */}
      {!downloadStatus.canDownload && !hasPaid && (
        <Alert className="mb-6 bg-orange-900/20 border-orange-800">
          <Lock className="h-4 w-4 text-orange-500" />
          <AlertDescription className="text-orange-200">
            You've used your free download. Upgrade to premium for unlimited downloads.
          </AlertDescription>
        </Alert>
      )}

      {/* Payment CTA */}
      {!hasPaid && (
        <Card className="mb-6 bg-gradient-to-r from-orange-900/20 to-orange-800/20 border-orange-700">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">Unlock Unlimited Downloads</h3>
                <p className="text-zinc-400 text-sm">
                  Get unlimited theme downloads for just $4.99 (one-time payment)
                </p>
              </div>
              <Button
                onClick={() => router.push('/profile/payment')}
                className="bg-orange-600 hover:bg-orange-700 text-white"
              >
                <CreditCard className="w-4 h-4 mr-2" />
                Upgrade Now
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Themes List */}
      <Card className="bg-zinc-800 border-zinc-700">
        <CardHeader>
          <CardTitle className="text-white">Your Themes</CardTitle>
          <CardDescription className="text-zinc-400">
            {themes.length === 0
              ? "You haven't created any themes yet."
              : `You have ${themes.length} theme${themes.length !== 1 ? 's' : ''}.`}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {themes.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-zinc-400 mb-4">Start creating themes in the Theme Studio</p>
              <Button
                onClick={() => router.push('/theme-studio')}
                className="bg-orange-600 hover:bg-orange-700 text-white"
              >
                Go to Theme Studio
              </Button>
            </div>
          ) : (
            <div className="grid gap-4">
              {themes.map((theme) => (
                <Card key={theme.id} className="bg-zinc-900 border-zinc-700">
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-white mb-1">{theme.name}</h3>
                        <div className="flex items-center gap-4 text-sm text-zinc-400">
                          <span>Created: {new Date(theme.created_at).toLocaleDateString()}</span>
                          <span>Downloads: {theme.download_count}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => router.push(`/theme-studio?theme=${theme.id}`)}
                          className="border-zinc-600 text-zinc-300"
                        >
                          <LinkIcon className="w-4 h-4 mr-2" />
                          Edit
                        </Button>
                        <Button
                          size="sm"
                          onClick={() => handleDownload(theme)}
                          disabled={downloading === theme.id || (!downloadStatus.canDownload && !hasPaid)}
                          className="bg-orange-600 hover:bg-orange-700 text-white"
                        >
                          {downloading === theme.id ? (
                            <>
                              <Download className="w-4 h-4 mr-2 animate-pulse" />
                              Downloading...
                            </>
                          ) : (
                            <>
                              <Download className="w-4 h-4 mr-2" />
                              Download
                            </>
                          )}
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

