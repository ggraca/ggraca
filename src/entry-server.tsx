import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import { App } from '@/app'

/** HTML for the default view, written into dist/index.html at build time. */
export function render(): string {
  return renderToString(
    <StrictMode>
      <App />
    </StrictMode>,
  )
}
