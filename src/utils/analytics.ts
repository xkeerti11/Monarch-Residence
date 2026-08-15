type WindowWithAnalytics = Window & {
  gtag?: (...args: unknown[]) => void
  dataLayer?: unknown[][]
}

export function trackEvent(name: string, params: Record<string, string | number | boolean> = {}) {
  try {
    const analyticsWindow = window as WindowWithAnalytics
    analyticsWindow.gtag?.('event', name, params)
    if (import.meta.env.DEV) {
      console.log(`[Analytics Event] ${name}:`, params)
    }
  } catch {
    // Silent fail if analytics blocked by ad-blocker
  }
}
