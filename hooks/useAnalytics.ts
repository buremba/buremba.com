import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

declare global {
  interface Window {
    analytics: any
  }
}

function useAnalyticsInstance() {
  const path = usePathname()
  useEffect(() => {
    if (window.analytics === undefined) return
    window.analytics.track({
      path,
    })
  }, [path])
}

function useAnalyticsEvent() {
  function trackCustomEvent({
                              eventName,
                              eventTitle,
                            }: {
    eventName: string
    eventTitle?: string
  }) {
    if (window.analytics === undefined) return
    window.analytics.track({
      path: eventName,
      title: eventTitle || eventName,
      event: true,
    })
  }

  return { trackCustomEvent }
}

export { useAnalyticsInstance, useAnalyticsEvent }