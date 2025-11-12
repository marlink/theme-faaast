# Vercel Deployment Guide

## Prerequisites

Before deploying to Vercel, ensure you have:

1. A Vercel account
2. A Supabase project set up
3. A Stripe account configured

## Required Environment Variables

Set these environment variables in your Vercel project settings:

### Supabase Configuration
```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
```

### Stripe Configuration
```
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
```

### Application Configuration
```
NEXT_PUBLIC_APP_URL=https://your-app-name.vercel.app
```

### Optional: Analytics and Monitoring
```
NEXT_PUBLIC_GA_TRACKING_ID=your_google_analytics_id
VERCEL_ANALYTICS_ID=your_vercel_analytics_id
```

## Deployment Steps

1. **Connect Repository**: Link your GitHub repository to Vercel
2. **Configure Environment Variables**: Add all required environment variables in Vercel dashboard
3. **Deploy**: Vercel will automatically build and deploy on every push to main branch

## Vercel Configuration

The `vercel.json` file is already configured with:
- Build settings optimized for Next.js
- API route timeout settings (30 seconds max)
- CORS headers for API routes

## Database Setup

Ensure your Supabase database has the required tables and RLS policies configured.

## Stripe Webhooks

Configure Stripe webhooks to point to your Vercel deployment URL:
- Webhook endpoint: `https://your-app-name.vercel.app/api/webhooks/stripe`
- Events to listen for: `checkout.session.completed`, `payment_intent.succeeded`

## Post-Deployment Checklist

- [ ] Test authentication flows
- [ ] Test Stripe checkout process
- [ ] Verify Supabase database connections
- [ ] Check all API routes are working
- [ ] Test file uploads
- [ ] Verify email functionality (if configured)
