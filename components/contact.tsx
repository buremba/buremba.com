'use client'

import { useAnalyticsEvent } from '../hooks/useAnalytics'
import { ExtLink, Button } from './atoms'

export function Contact() {
  const { trackCustomEvent } = useAnalyticsEvent()
  return (
    <div className="mt-16 full-width-container bg-back-secondary">
      <div className="container max-w-screen-xl p-8 mx-auto">
        <p className="px-4 text-center text-fore-secondary">
          You can also reach me around the web:{' '}
          <ExtLink link="https://github.com/buremba">GitHub</ExtLink>,{' '}
          <ExtLink link="https://twitter.com/bu7emba">Twitter</ExtLink>
          <span role="img" aria-label="wave">
            👋
          </span>
        </p>
      </div>
    </div>
  )
}
