import type { ReactNode } from 'react'
import { ExternalLink } from '@/components/external-link'

function A({ href, children }: { href: string; children: ReactNode }) {
  return (
    <ExternalLink href={href} className="text-primary hover:underline">
      {children}
    </ExternalLink>
  )
}

export function Intro() {
  return (
    <header className="bg-muted">
      <div className="mx-auto max-w-210 px-5 py-10 leading-[1.7]">
        <div className="text-center">
          <img
            src="/profilepic.jpeg"
            alt="Guilherme Graça"
            width={150}
            height={150}
            className="mx-auto size-37.5 rounded-full"
          />
          <h1 className="mt-2.5 text-xl">Guilherme Graça</h1>
        </div>

        <div className="mt-10 space-y-5">
          <p>Hello! I'm a Portuguese software engineer with over 10 years coding experience.</p>
          <p>
            I am building a 3D game engine in ruby called{' '}
            <A href="https://github.com/ggraca/belts">Belts</A>.
          </p>
          <p>
            In the past, I worked at promising startups like{' '}
            <A href="https://www.stepful.com/">Stepful (YC S21)</A>,{' '}
            <A href="https://www.vinterior.co/">Vinterior</A> and{' '}
            <A href="https://www.whitesmith.co/">Whitesmith</A>; launched{' '}
            <A href="https://www.youtube.com/watch?v=N15qLyp5IA0&t=22s">Ripplr</A> during covid; and
            was in the game industry for a bit with <A href="https://coatsink.com/">Coatsink</A>{' '}
            after graduating from <A href="https://www.ncl.ac.uk/">Newcastle University</A> with a
            MSc in Computer Games Engineering.
          </p>
          <p>
            I use <A href="https://www.archlinux.org/">Arch Linux</A> and keep my configs public{' '}
            <A href="https://github.com/ggraca/configs">here</A>.
          </p>
          <p>
            You can find me on <A href="https://github.com/ggraca/">Github</A> and{' '}
            <A href="https://www.linkedin.com/in/ggraca/">LinkedIn</A>.
          </p>
        </div>
      </div>
    </header>
  )
}
