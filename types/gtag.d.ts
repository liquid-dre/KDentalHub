interface Window {
  gtag: (
    command: 'config' | 'event' | 'js',
    targetIdOrDate: string | Date,
    config?: Record<string, unknown>
  ) => void
  dataLayer: Record<string, unknown>[]
}
