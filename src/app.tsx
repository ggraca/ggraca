import { Intro } from '@/components/intro'
import { ProjectCard } from '@/components/project-card'
import { TooltipProvider } from '@/components/ui/tooltip'
import { projects } from '@/content/projects'

export function App() {
  return (
    <TooltipProvider delayDuration={100} disableHoverableContent>
      <Intro />
      <main className="bg-background">
        <ul className="mx-auto grid max-w-7xl gap-10 p-5 sm:p-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <li key={project.title}>
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
      </main>
    </TooltipProvider>
  )
}
