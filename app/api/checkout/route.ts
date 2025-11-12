import { createClient } from '@/lib/supabase/server'
import { stripe } from '@/lib/stripe/client'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const supabase = await createClient()
    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { priceId } = await request.json()

    if (!priceId) {
      return NextResponse.json({ error: 'Price ID is required' }, { status: 400 })
    }

    const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'

    // Create Stripe Checkout Session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${appUrl}/profile?payment=success`,
      cancel_url: `${appUrl}/profile?payment=cancelled`,
      metadata: {
        userId: user.id,
      },
      customer_email: user.email || undefined,
    })

    return NextResponse.json({ url: session.url })
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Failed to create checkout session'
    return NextResponse.json({ error: errorMessage }, { status: 500 })
  }
}

