import { StrictMode } from 'react'
import { hydrateRoot } from 'react-dom/client'
import { App } from '@/app'
import './index.css'

const root = document.getElementById('root')
if (!root) throw new Error('Missing #root element')

// The build pre-renders the page into #root (see scripts/prerender.js); React takes it over.
hydrateRoot(
  root,
  <StrictMode>
    <App />
  </StrictMode>,
)
