import { ArrowUpRightIcon } from 'lucide-react'
import type { ComponentProps } from 'react'
import type { Link } from '@/content/projects'
import { cn } from '@/lib/utils'

export function ExternalLink(props: ComponentProps<'a'>) {
  return <a target="_blank" rel="noopener noreferrer" {...props} />
}

/** A row of external links, each with a ↗ arrow. */
export function LinkList({ links, className }: { links: Link[]; className?: string }) {
  return (
    <ul className={cn('flex flex-wrap gap-x-4 gap-y-1 text-sm font-medium', className)}>
      {links.map(({ label, url }) => (
        <li key={url}>
          <ExternalLink
            href={url}
            className="inline-flex items-center gap-0.5 text-primary hover:underline"
          >
            {label}
            <ArrowUpRightIcon className="size-3.5" aria-hidden />
          </ExternalLink>
        </li>
      ))}
    </ul>
  )
}
