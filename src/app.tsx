import { LinkList } from '@/components/external-link'
import { Intro } from '@/components/intro'
import { ShowcaseView } from '@/components/showcase-view'
import { useView, ViewSwitch } from '@/components/view-switch'
import { WorkView } from '@/components/work-view'
import { profile } from '@/content/profile'

export function App() {
  const view = useView()

  return (
    <div className="relative mx-auto max-w-5xl px-4 py-10 sm:px-8 sm:py-16">
      {/* Above the intro on phones; top right, level with the name, from md up. */}
      <div className="mb-10 md:absolute md:top-16 md:right-8 md:mb-0">
        <ViewSwitch view={view} />
      </div>
      <Intro />
      <main>{view === 'work' ? <WorkView /> : <ShowcaseView />}</main>
      <footer className="mt-20 flex flex-wrap items-center justify-between gap-4 border-t pt-6 text-sm text-muted-foreground">
        <p>{profile.name}</p>
        <LinkList links={profile.links} />
      </footer>
    </div>
  )
}
