import { useState } from 'react'
import { ProjectCard } from '@/components/project-card'
import { KINDS, type Kind, type Project, projects } from '@/content/projects'
import { cn } from '@/lib/utils'

const FILTERS: { kind: Kind | 'all'; label: string; items: Project[] }[] = [
  { kind: 'all', label: 'All', items: projects },
  ...(Object.keys(KINDS) as Kind[]).map((kind) => ({
    kind,
    label: KINDS[kind],
    items: projects.filter((p) => p.kind === kind),
  })),
]

export function ShowcaseView() {
  const [filter, setFilter] = useState<Kind | 'all'>('all')
  const shown = FILTERS.find((f) => f.kind === filter)?.items ?? projects

  return (
    <section className="mt-12">
      <h2 className="sr-only">Projects</h2>
      <fieldset className="flex flex-wrap gap-2">
        <legend className="sr-only">Filter projects</legend>
        {FILTERS.map(({ kind, label, items }) => (
          <button
            key={kind}
            type="button"
            aria-pressed={filter === kind}
            onClick={() => setFilter(kind)}
            className={cn(
              'rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors hover:bg-muted',
              filter === kind &&
                'border-foreground bg-foreground text-background hover:bg-foreground',
            )}
          >
            {label} <span className="opacity-60">{items.length}</span>
          </button>
        ))}
      </fieldset>
      <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((project) => (
          <li key={project.title}>
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
    </section>
  )
}
