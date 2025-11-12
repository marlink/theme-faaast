import { createClient } from '@/lib/supabase/server'

export interface UserDownloadStatus {
  canDownload: boolean
  hasPaid: boolean
  totalDownloads: number
  remainingFreeDownloads: number
}

export async function checkDownloadStatus(userId: string): Promise<UserDownloadStatus> {
  const supabase = await createClient()

  // Get user profile
  const { data: profile } = await supabase
    .from('user_profiles')
    .select('has_paid, total_downloads')
    .eq('user_id', userId)
    .single()

  const hasPaid = profile?.has_paid || false
  const totalDownloads = profile?.total_downloads || 0

  // Free users get 1 download, paid users get unlimited
  const canDownload = hasPaid || totalDownloads < 1
  const remainingFreeDownloads = hasPaid ? Infinity : Math.max(0, 1 - totalDownloads)

  return {
    canDownload,
    hasPaid,
    totalDownloads,
    remainingFreeDownloads,
  }
}

export async function incrementDownloadCount(userId: string, themeId: string) {
  const supabase = await createClient()

  // Increment theme download count
  const { error: themeError } = await supabase.rpc('increment_theme_download', {
    theme_id: themeId,
  })

  if (themeError) {
    // Fallback if RPC doesn't exist
    const { data: theme } = await supabase.from('themes').select('download_count').eq('id', themeId).single()
    await supabase
      .from('themes')
      .update({ download_count: (theme?.download_count || 0) + 1 })
      .eq('id', themeId)
  }

  // Increment user profile total downloads
  const { data: profile } = await supabase
    .from('user_profiles')
    .select('total_downloads')
    .eq('user_id', userId)
    .single()

  await supabase
    .from('user_profiles')
    .update({ total_downloads: (profile?.total_downloads || 0) + 1 })
    .eq('user_id', userId)
}

