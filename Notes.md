# Project Notes

## Hero Background Image

**File:** `components/HeroSection.tsx`, line 15 — replace the URL string.

### Recommended Specs

- **Dimensions:** At least 1920x1080px (landscape). The section is full-screen (`h-screen`) so wider is better — 2000px+ wide is ideal.
- **Aspect ratio:** Landscape/wide (16:9 or wider). Avoid portrait images — they'll get cropped heavily on desktop.
- **Format:** JPEG or WebP for best compression. PNG works but files will be larger.
- **File size:** Keep under ~500KB for fast loading. Use compressed/optimized versions.
- **Subject placement:** The text sits at the bottom-left of the screen, so the main subject of the photo should ideally be center or right-of-center to avoid being obscured.
- **Tone:** The image has a 60% black overlay on top (`bg-black/60`), so even lighter photos will look good. Darker photos will appear very dark.
- **Scaling:** `bg-cover bg-center` means the image scales to cover the full viewport and centers itself — edges may be cropped on different screen sizes.

### How to Swap

Replace the URL on line 15 of `components/HeroSection.tsx` with your new image URL, or use a local path like `/images/hero.jpg` (placed in the `public/images/` folder).

---

## Analytics Integration

The site uses two analytics layers: **Vercel Analytics** (traffic + Web Vitals) and **Google Analytics 4** (behavior + conversions).

### 1. Vercel Analytics & Speed Insights

**No configuration needed** — it works automatically when deployed on Vercel.

**How to check:**
1. Deploy to Vercel (or run `vercel` locally if you have the CLI).
2. Go to your Vercel project dashboard → **Analytics** tab.
3. You'll see page views, unique visitors, top pages, and referrers.
4. The **Speed Insights** tab shows Core Web Vitals (LCP, FID, CLS) per page.

> Vercel Analytics only collects data in production deployments. You won't see data in `npm run dev`.

### 2. Google Analytics 4 (GA4)

**Setup steps:**
1. Go to [Google Analytics](https://analytics.google.com/) and create a new GA4 property.
2. Get your **Measurement ID** (starts with `G-`, e.g. `G-XXXXXXXXXX`).
3. Create a `.env.local` file in the project root (see `.env.example`):
   ```
   NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   ```
4. Restart the dev server. GA4 will now load on every page.

**How to check GA4 is working:**
1. Open your site in the browser.
2. Go to GA4 → **Admin** → **DebugView** (or **Realtime** → **Overview**).
3. You should see `page_view` events appearing in real-time.
4. Use the Chrome extension [Google Analytics Debugger](https://chrome.google.com/webstore/detail/google-analytics-debugger/jnkmfdileelhofjcijamephohjechhna) to see events in the browser console.
5. Or open Chrome DevTools → **Network** tab → filter by `collect` — you should see requests to `google-analytics.com`.

**Custom events being tracked:**

| Event Name | Trigger | Where |
|---|---|---|
| `booking_started` | User selects a service on step 1 | Booking page |
| `booking_step_completed` | User clicks "Continue" on any step | Booking page |
| `booking_submitted` | User clicks "Confirm Booking" | Booking page |
| `contact_form_submitted` | User submits the contact form | Contact page |
| `cta_clicked` | User clicks a call-to-action button | CTA sections |
| `phone_clicked` | User clicks "Call Us Today" | CTA section |
| `newsletter_subscribed` | User clicks subscribe in footer | Footer |
| `service_viewed` | User views a service detail page | Services pages |

**How to check custom events:**
1. Go to GA4 → **Realtime** → scroll down to **Event count by Event name**.
2. Click through the booking flow on your site — you should see `booking_step_completed` and `booking_submitted` events.
3. To set up conversions: GA4 → **Admin** → **Events** → mark `booking_submitted` and `contact_form_submitted` as conversions.

### Files Overview

| File | Purpose |
|---|---|
| `components/GoogleAnalytics.tsx` | Loads the GA4 script via `next/script` |
| `lib/analytics.ts` | Helper functions for tracking custom events |
| `types/gtag.d.ts` | TypeScript types for `window.gtag` |
| `.env.example` | Template for environment variables |

### Adding New Events

Use the `analytics` helper from `lib/analytics.ts`:

```tsx
import { analytics } from '@/lib/analytics'

// Use a pre-built event
analytics.serviceViewed('Teeth Whitening')

// Or track a custom event
import { trackEvent } from '@/lib/analytics'
trackEvent({ action: 'my_event', category: 'my_category', label: 'details' })
```
