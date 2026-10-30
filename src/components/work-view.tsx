import { ArrowRightIcon } from 'lucide-react'
import type { ReactNode } from 'react'
import { ExternalLink, LinkList } from '@/components/external-link'
import { ProjectCard } from '@/components/project-card'
import { TagList } from '@/components/tag-list'
import { education, experience } from '@/content/profile'
import { projects } from '@/content/projects'

const featured = projects
  .filter((project) => project.featured !== undefined)
  .sort((a, b) => (a.featured ?? 0) - (b.featured ?? 0))

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mt-16">
      <h2 className="text-sm font-semibold tracking-wide text-muted-foreground uppercase">
        {title}
      </h2>
      <div className="mt-6">{children}</div>
    </section>
  )
}

export function WorkView() {
  return (
    <>
      <Section title="Experience">
        <ol className="space-y-10">
          {experience.map((job) => (
            <li key={job.company} className="grid gap-1 sm:grid-cols-[6rem_1fr] sm:gap-6">
              <p className="pt-0.5 text-sm whitespace-nowrap text-muted-foreground tabular-nums">
                {job.start === job.end ? job.start : `${job.start} – ${job.end ?? 'now'}`}
              </p>
              <div>
                <h3 className="font-semibold">
                  <ExternalLink href={job.url} className="hover:text-primary hover:underline">
                    {job.company}
                  </ExternalLink>
                  <span className="font-normal text-muted-foreground"> · {job.role}</span>
                </h3>
                <div className="mt-2 max-w-3xl space-y-2 leading-relaxed text-muted-foreground">
                  {job.summary.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2">
                  <TagList tags={job.tags} />
                  {job.links && <LinkList links={job.links} />}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      <Section title="Selected projects">
        <ul className="grid gap-6 sm:grid-cols-2">
          {featured.map((project) => (
            <li key={project.title}>
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
        <a
          href="#showcase"
          className="mt-6 inline-flex items-center gap-1 font-medium text-primary hover:underline"
        >
          See all {projects.length} projects in the showcase
          <ArrowRightIcon className="size-4" aria-hidden />
        </a>
      </Section>

      <Section title="Education and community">
        <ul className="space-y-4">
          {education.map((item) => (
            <li key={item.title} className="grid gap-1 sm:grid-cols-[6rem_1fr] sm:gap-6">
              <p className="text-sm text-muted-foreground tabular-nums">{item.year}</p>
              <p>
                <span className="font-semibold">{item.title}</span>
                <span className="text-muted-foreground">
                  {' · '}
                  <ExternalLink href={item.url} className="hover:text-primary hover:underline">
                    {item.place}
                  </ExternalLink>
                </span>
              </p>
            </li>
          ))}
        </ul>
      </Section>
    </>
  )
}
