import { TrophyIcon } from 'lucide-react'
import { LinkList } from '@/components/external-link'
import { TagList } from '@/components/tag-list'
import { Badge } from '@/components/ui/badge'
import { Popover, PopoverArrow, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { OWNER, type Project } from '@/content/projects'
import { thumbnailUrl } from '@/content/thumbnails'
import { formatMonth } from '@/lib/format'

export function ProjectCard({ project }: { project: Project }) {
  const { title, image, award, date, context, team, description, links = [], tags } = project
  const others = team.filter((person) => person !== OWNER)

  return (
    <article
      data-testid="project-card"
      className="flex h-full flex-col overflow-hidden rounded-xl border bg-card text-card-foreground transition-shadow hover:shadow-lg"
    >
      <div className="relative aspect-video overflow-hidden bg-muted">
        <img
          src={thumbnailUrl(image)}
          alt=""
          loading="lazy"
          className="size-full object-cover dark:brightness-90"
        />
        {award && (
          <Badge className="absolute top-3 left-3 shadow-sm">
            <TrophyIcon aria-hidden />
            {award}
          </Badge>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs text-muted-foreground">
          {formatMonth(date)} · {context}
        </p>
        <h3 className="mt-1 text-lg font-semibold">{title}</h3>
        <div className="mt-2 space-y-2 text-sm leading-relaxed text-foreground/80">
          {description.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <TagList tags={tags} className="mt-auto pt-4" />
      </div>

      {(links.length > 0 || others.length > 0) && (
        <footer className="flex items-center justify-between gap-4 border-t px-5 py-3">
          <LinkList links={links} />
          {others.length > 0 && (
            <Popover>
              <PopoverTrigger className="shrink-0 rounded-sm text-xs text-muted-foreground hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring">
                Team of {team.length}
              </PopoverTrigger>
              <PopoverContent align="end" side="top" className="w-max max-w-72 gap-2 p-3 shadow-lg">
                <p className="text-[11px] font-semibold tracking-wide text-muted-foreground uppercase">
                  Made with
                </p>
                <ul className="grid grid-cols-2 gap-x-4 gap-y-1 text-xs">
                  {others.map((person) => (
                    <li key={person}>{person}</li>
                  ))}
                </ul>
                <PopoverArrow className="fill-popover" />
              </PopoverContent>
            </Popover>
          )}
        </footer>
      )}
    </article>
  )
}
