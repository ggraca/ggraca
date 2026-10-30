import { useSyncExternalStore } from 'react'
import { type View, views } from '@/content/profile'
import { cn } from '@/lib/utils'

function isView(name: string): name is View {
  return Object.hasOwn(views, name)
}

function subscribe(onChange: () => void) {
  // Switching views replaces most of the page, so start the new one from the top.
  const handler = () => {
    window.scrollTo(0, 0)
    onChange()
  }
  window.addEventListener('hashchange', handler)
  return () => window.removeEventListener('hashchange', handler)
}

/** The view lives in the URL hash (`#work`, `#showcase`) so each one can be linked to. */
export function useView(): View {
  return useSyncExternalStore(
    subscribe,
    () => {
      const hash = window.location.hash.slice(1)
      return isView(hash) ? hash : 'work'
    },
    // The build pre-renders the default view; the browser switches after hydrating.
    () => 'work',
  )
}

export function ViewSwitch({ view }: { view: View }) {
  return (
    <nav aria-label="Profile view" className="inline-flex rounded-full bg-muted p-1 text-sm">
      {Object.entries(views).map(([name, label]) => (
        <a
          key={name}
          href={`#${name}`}
          aria-current={name === view ? 'page' : undefined}
          className={cn(
            'rounded-full px-4 py-1.5 font-medium text-muted-foreground transition-colors hover:text-foreground',
            name === view && 'bg-background text-foreground shadow-sm',
          )}
        >
          {label}
        </a>
      ))}
    </nav>
  )
}
