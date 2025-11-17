import Stripe from 'stripe'

let stripeInstance: Stripe | null = null

export function getStripeClient(): Stripe {
  if (!stripeInstance) {
    const secretKey = process.env.STRIPE_SECRET_KEY
    if (!secretKey) {
      throw new Error('STRIPE_SECRET_KEY is not set')
    }

    stripeInstance = new Stripe(secretKey, {
      apiVersion: '2025-10-29.clover',
      typescript: true,
    })
  }

  return stripeInstance
}

// For backwards compatibility, export a getter that returns the client
export const stripe = new Proxy({} as Stripe, {
  get(target, prop) {
    const client = getStripeClient()
    return (client as any)[prop]
  }
})

