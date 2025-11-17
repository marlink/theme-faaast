import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { checkDownloadStatusClient as checkDownloadStatus } from '@/lib/supabase/utils-client'
import { ProfileContent } from './profile-content'
import { Navigation } from '@/components/navigation'

export default async function ProfilePage() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect('/auth/login')
  }

  // Ensure user profile exists
  const { data: existingProfile } = await supabase
    .from('user_profiles')
    .select('id')
    .eq('user_id', user.id)
    .single()

  if (!existingProfile) {
    // Create profile if it doesn't exist
    await supabase.from('user_profiles').insert({
      user_id: user.id,
      has_paid: false,
      total_downloads: 0,
    })
  }

  const downloadStatus = await checkDownloadStatus(user.id)

  // Get user's themes
  const { data: themes } = await supabase
    .from('themes')
    .select('*')
    .eq('user_id', user.id)
    .order('created_at', { ascending: false })

  // Get payment status
  const { data: payments } = await supabase
    .from('payments')
    .select('*')
    .eq('user_id', user.id)
    .eq('status', 'completed')
    .order('created_at', { ascending: false })

  return (
    <div className="min-h-screen bg-zinc-900">
      <Navigation />
      <ProfileContent
        user={user}
        themes={themes || []}
        downloadStatus={downloadStatus}
        hasPaid={Boolean(payments && payments.length > 0)}
      />
    </div>
  )
}

