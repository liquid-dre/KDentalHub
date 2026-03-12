type GTagEvent = {
  action: string
  category: string
  label?: string
  value?: number
}

export function trackEvent({ action, category, label, value }: GTagEvent) {
  if (typeof window === 'undefined') return
  if (!window.gtag) return

  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  })
}

// Pre-built events for common actions
export const analytics = {
  bookingStarted: (service: string) =>
    trackEvent({ action: 'booking_started', category: 'booking', label: service }),

  bookingStepCompleted: (step: string) =>
    trackEvent({ action: 'booking_step_completed', category: 'booking', label: step }),

  bookingSubmitted: (service: string) =>
    trackEvent({ action: 'booking_submitted', category: 'booking', label: service }),

  contactFormSubmitted: () =>
    trackEvent({ action: 'contact_form_submitted', category: 'contact' }),

  ctaClicked: (label: string) =>
    trackEvent({ action: 'cta_clicked', category: 'engagement', label }),

  phoneClicked: () =>
    trackEvent({ action: 'phone_clicked', category: 'engagement', label: 'call_us' }),

  serviceViewed: (service: string) =>
    trackEvent({ action: 'service_viewed', category: 'services', label: service }),

  newsletterSubscribed: () =>
    trackEvent({ action: 'newsletter_subscribed', category: 'engagement' }),
}
