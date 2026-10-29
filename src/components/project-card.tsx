import { CalendarIcon, UserIcon, UsersIcon } from 'lucide-react'
import { type ReactNode, useRef, useState } from 'react'
import { ExternalLink } from '@/components/external-link'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { OWNER, type Project } from '@/content/projects'
import { thumbnailUrl } from '@/content/thumbnails'
import { formatMonth } from '@/lib/format'

function InfoIcon({ label, children }: { label: string; children: ReactNode }) {
  // Radix tooltips only react to hover and focus. To make a tap toggle the tooltip,
  // ignore Radix's own open/close calls while a touch is in progress.
  const [open, setOpen] = useState(false)
  const tapping = useRef(false)

  return (
    <Tooltip open={open} onOpenChange={(next) => !tapping.current && setOpen(next)}>
      <TooltipTrigger asChild>
        <button
          type="button"
          aria-label={label}
          onPointerDown={(event) => {
            tapping.current = event.pointerType !== 'mouse'
          }}
          onPointerCancel={() => {
            tapping.current = false
          }}
          onClick={() => {
            if (!tapping.current) return
            tapping.current = false
            setOpen((wasOpen) => !wasOpen)
          }}
          className="rounded-sm p-1 text-card-foreground focus-visible:ring-2 focus-visible:ring-ring"
        >
          {children}
        </button>
      </TooltipTrigger>
      <TooltipContent>{label}</TooltipContent>
    </Tooltip>
  )
}

function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <h3 className="mt-4 mb-1 text-[11px] font-bold tracking-wide text-muted-foreground uppercase">
      {children}
    </h3>
  )
}

export function ProjectCard({ project }: { project: Project }) {
  const { title, image, date, context, team, description, links = [], tags } = project
  const solo = team.length === 1 && team[0] === OWNER
  const TeamIcon = solo ? UserIcon : UsersIcon

  return (
    <Card
      data-testid="project-card"
      className="h-full min-h-137.5 gap-0 rounded-none border py-0 ring-0"
    >
      <div className="h-45 overflow-hidden bg-muted">
        <img src={thumbnailUrl(image)} alt="" loading="lazy" className="size-full object-cover" />
      </div>

      <div className="flex flex-1 flex-col p-5 pt-2.5">
        <div className="flex items-center justify-between gap-2 pb-2.5">
          <h2 className="font-bold text-card-foreground">{title}</h2>
          <div className="flex shrink-0">
            <InfoIcon label={team.join(', ')}>
              <TeamIcon className="size-3.5" />
            </InfoIcon>
            <InfoIcon label={`${formatMonth(date)}, ${context}`}>
              <CalendarIcon className="size-3.5" />
            </InfoIcon>
          </div>
        </div>

        <div className="space-y-1 border-t pt-2.5 text-[13px] leading-4.75 text-muted-foreground">
          {description.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div className="mt-auto pt-4">
          {links.length > 0 && (
            <>
              <SectionTitle>Links</SectionTitle>
              <ul className="flex flex-wrap text-xs font-bold">
                {links.map(({ label, url }, i) => (
                  <li key={url}>
                    <ExternalLink href={url} className="text-primary hover:underline">
                      {label}
                    </ExternalLink>
                    {i < links.length - 1 && <span className="mr-1">,</span>}
                  </li>
                ))}
              </ul>
            </>
          )}
          <SectionTitle>Technologies</SectionTitle>
          <ul className="flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <li key={tag}>
                <Badge
                  variant="outline"
                  className="h-auto rounded-[5px] border-2 border-primary px-1.5 py-1 text-[10px] font-bold text-primary"
                >
                  {tag}
                </Badge>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Card>
  )
}
