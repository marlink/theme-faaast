'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Navigation } from '@/components/navigation'
import { CreditCard, Loader2, CheckCircle, Lock } from 'lucide-react'
import { toast } from 'sonner'

export default function PaymentPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const handleCheckout = async () => {
    setLoading(true)

    try {
      // Get price ID from environment variable (available at build time)
      const priceId = process.env.NEXT_PUBLIC_STRIPE_PRICE_ID

      if (!priceId) {
        toast.error('Payment configuration error. Please contact support.')
        setLoading(false)
        return
      }

      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ priceId }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to create checkout session')
      }

      if (data.url) {
        window.location.href = data.url
      }
    } catch (error: any) {
      toast.error(error.message || 'Failed to start checkout. Please try again.')
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-zinc-900">
      <Navigation />
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <Card className="bg-zinc-800 border-zinc-700">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-white flex items-center gap-2">
              <CreditCard className="w-6 h-6" />
              Upgrade to Premium
            </CardTitle>
            <CardDescription className="text-zinc-400">
              Unlock unlimited theme downloads
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-gradient-to-r from-orange-900/20 to-orange-800/20 border border-orange-700 rounded-lg p-6">
              <div className="text-center mb-6">
                <div className="text-4xl font-bold text-white mb-2">$4.99</div>
                <p className="text-zinc-400">One-time payment</p>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-zinc-300">
                  <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />
                  <span>Unlimited theme downloads</span>
                </div>
                <div className="flex items-center gap-3 text-zinc-300">
                  <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />
                  <span>Create and customize unlimited themes</span>
                </div>
                <div className="flex items-center gap-3 text-zinc-300">
                  <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />
                  <span>Export themes in multiple formats</span>
                </div>
                <div className="flex items-center gap-3 text-zinc-300">
                  <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />
                  <span>Lifetime access</span>
                </div>
              </div>

              <Button
                onClick={handleCheckout}
                disabled={loading}
                className="w-full bg-orange-600 hover:bg-orange-700 text-white text-lg py-6"
                size="lg"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    <Lock className="w-5 h-5 mr-2" />
                    Proceed to Payment
                  </>
                )}
              </Button>
            </div>

            <Alert className="bg-zinc-900/50 border-zinc-700">
              <AlertDescription className="text-zinc-400 text-sm">
                Secure payment powered by Stripe. Your payment information is encrypted and secure.
              </AlertDescription>
            </Alert>

            <Button
              variant="outline"
              onClick={() => router.back()}
              className="w-full border-zinc-600 text-zinc-300"
            >
              Cancel
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

