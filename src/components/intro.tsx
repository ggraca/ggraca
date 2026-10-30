import { LinkList } from '@/components/external-link'
import { profile } from '@/content/profile'

export function Intro() {
  return (
    <header className="flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-8">
      <img
        src="/profilepic.jpeg"
        alt={profile.name}
        width={150}
        height={150}
        className="size-24 rounded-full ring-1 ring-border sm:size-32"
      />
      <div>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{profile.name}</h1>
        <p className="mt-1 text-lg text-muted-foreground">{profile.headline}</p>
        <div className="mt-4 max-w-2xl space-y-3 leading-relaxed">
          {profile.bio.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <LinkList links={profile.links} className="mt-4" />
      </div>
    </header>
  )
}
