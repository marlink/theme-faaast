import { createClient } from '@/lib/supabase/server'
import { stripe } from '@/lib/stripe/client'
import { NextResponse } from 'next/server'
import Stripe from 'stripe'

export async function POST(request: Request) {
  const body = await request.text()
  const signature = request.headers.get('stripe-signature')

  if (!signature) {
    return NextResponse.json({ error: 'No signature' }, { status: 400 })
  }

  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET

  if (!webhookSecret) {
    return NextResponse.json({ error: 'Webhook secret not configured' }, { status: 500 })
  }

  let event: Stripe.Event

  try {
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret)
  } catch (err: any) {
    console.error('Webhook signature verification failed:', err.message)
    return NextResponse.json({ error: `Webhook Error: ${err.message}` }, { status: 400 })
  }

  // Handle the event
  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session

    try {
      const supabase = await createClient()

      // Update user profile to mark as paid
      const { error: profileError } = await supabase
        .from('user_profiles')
        .update({ has_paid: true })
        .eq('user_id', session.metadata?.userId)

      if (profileError) {
        console.error('Error updating profile:', profileError)
      }

      // Record payment
      const { error: paymentError } = await supabase.from('payments').insert({
        user_id: session.metadata?.userId,
        stripe_payment_id: session.id,
        amount: session.amount_total || 0,
        currency: session.currency || 'usd',
        status: 'completed',
      })

      if (paymentError) {
        console.error('Error recording payment:', paymentError)
      }
    } catch (error) {
      console.error('Error processing webhook:', error)
      return NextResponse.json({ error: 'Webhook processing failed' }, { status: 500 })
    }
  }

  return NextResponse.json({ received: true })
}

