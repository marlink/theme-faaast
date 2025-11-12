# Authentication & Payment Setup Guide

This guide will help you set up Supabase authentication and Stripe payments for the theme studio.

## Prerequisites

- A Supabase account (free tier works)
- A Stripe account (free to start)
- Node.js and pnpm installed

## Step 1: Set Up Supabase

1. **Create a Supabase Project**
   - Go to [https://app.supabase.com](https://app.supabase.com)
   - Click "New Project"
   - Fill in your project details
   - Wait for the project to be created

2. **Get Your API Keys**
   - Go to Project Settings → API
   - Copy your `Project URL` (this is `NEXT_PUBLIC_SUPABASE_URL`)
   - Copy your `anon public` key (this is `NEXT_PUBLIC_SUPABASE_ANON_KEY`)

3. **Set Up the Database**
   - Go to SQL Editor in your Supabase dashboard
   - Copy the contents of `supabase/schema.sql`
   - Paste and run it in the SQL Editor
   - This will create all necessary tables and policies

4. **Configure Authentication**
   - Go to Authentication → Settings
   - Under "Site URL", add your app URL (e.g., `http://localhost:3000` for development)
   - Under "Redirect URLs", add:
     - `http://localhost:3000/auth/callback` (for development)
     - `https://yourdomain.com/auth/callback` (for production)

## Step 2: Set Up Stripe

1. **Create a Stripe Account**
   - Go to [https://dashboard.stripe.com/register](https://dashboard.stripe.com/register)
   - Complete the account setup

2. **Get Your API Keys**
   - Go to Developers → API keys
   - Copy your "Publishable key" (this is `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`)
   - Copy your "Secret key" (this is `STRIPE_SECRET_KEY`)
   - **Important**: Use test keys for development, live keys for production

3. **Create a Product and Price**
   - Go to Products → Add Product
   - Name: "Theme Studio Premium"
   - Description: "Unlimited theme downloads"
   - Pricing: One-time payment, $4.99 (or your preferred amount)
   - Copy the Price ID (starts with `price_`) - this is `STRIPE_PRICE_ID`

4. **Set Up Webhooks**
   - Go to Developers → Webhooks
   - Click "Add endpoint"
   - Endpoint URL: `https://yourdomain.com/api/webhooks/stripe` (use ngrok for local testing)
   - Select events: `checkout.session.completed`
   - Copy the webhook signing secret (starts with `whsec_`) - this is `STRIPE_WEBHOOK_SECRET`

   **For Local Development:**
   - Install ngrok: `brew install ngrok` (Mac) or download from [ngrok.com](https://ngrok.com)
   - Run: `ngrok http 3000`
   - Use the ngrok URL for your webhook endpoint
   - Update the webhook URL in Stripe dashboard

## Step 3: Configure Environment Variables

1. **Create `.env.local` file** in the root directory:

```bash
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# Stripe Configuration
STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_stripe_publishable_key
STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret

# Stripe Price ID
NEXT_PUBLIC_STRIPE_PRICE_ID=price_your_price_id

# Application URL
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

2. **Replace all placeholder values** with your actual keys from Steps 1 and 2

## Step 4: Update Payment Page

The payment page needs to read the price ID from environment variables. Make sure `NEXT_PUBLIC_STRIPE_PRICE_ID` is set correctly.

## Step 5: Test the Setup

1. **Start the development server:**
   ```bash
   pnpm dev
   ```

2. **Test Authentication:**
   - Go to `/auth/signup`
   - Create a test account
   - Verify you can log in at `/auth/login`
   - Check that your profile appears at `/profile`

3. **Test Theme Creation:**
   - Go to `/theme-studio`
   - Create a theme
   - Try to export it (should prompt for login if not logged in)
   - After login, you should be able to download once for free

4. **Test Payments (Test Mode):**
   - Use Stripe test card: `4242 4242 4242 4242`
   - Any future expiry date
   - Any CVC
   - Complete the checkout flow
   - Verify the webhook updates your user profile

## Troubleshooting

### Database Errors
- Make sure you ran the SQL schema in Supabase
- Check that Row Level Security (RLS) policies are enabled
- Verify your API keys are correct

### Authentication Issues
- Check that redirect URLs are configured in Supabase
- Verify `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` are set
- Check browser console for errors

### Payment Issues
- Verify all Stripe keys are correct
- Check that webhook endpoint is accessible
- Use Stripe dashboard to view webhook events
- Make sure `NEXT_PUBLIC_STRIPE_PRICE_ID` matches your Stripe price

### Webhook Not Working
- For local development, use ngrok to expose your local server
- Verify the webhook secret matches
- Check Stripe dashboard → Webhooks → Events for delivery status
- Check server logs for webhook processing errors

## Production Deployment

1. **Update Environment Variables** in your hosting platform (Vercel recommended):
   - Add all environment variables from `.env.local`
   - Use production Stripe keys (starts with `sk_live_` and `pk_live_`)
   - Update `NEXT_PUBLIC_APP_URL` to your production domain

2. **Update Supabase Redirect URLs:**
   - Add your production domain to allowed redirect URLs

3. **Update Stripe Webhook:**
   - Add production webhook endpoint
   - Use production webhook secret

4. **Test Everything:**
   - Create a test account
   - Test the payment flow with a real card (use a small amount first)
   - Verify webhooks are working

## Security Notes

- Never commit `.env.local` to git
- Use different keys for development and production
- Regularly rotate your API keys
- Monitor Stripe dashboard for suspicious activity
- Use Supabase RLS policies to protect user data

