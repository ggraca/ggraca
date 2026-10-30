import type { Link } from './projects'

export const profile = {
  name: 'Guilherme Graça',
  headline: 'Software engineer at early-stage startups',
  links: [
    { label: 'GitHub', url: 'https://github.com/ggraca/' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/ggraca/' },
  ] satisfies Link[],
  /** Intro paragraphs, the same on both views. */
  bio: [
    'Portuguese software engineer with 10+ years of experience building products with Ruby on Rails and React.',
    "I'm currently at Fission, a fintech startup making tokenized funds liquid. Before that, I was an early engineer at Stepful (YC S21).",
    'Outside work, I still make the occasional game and build my own apps.',
  ],
}

/** The page's two views, by URL hash, with their tab labels. `work` is the default. */
export const views = {
  work: 'Work',
  showcase: 'Showcase',
}

export type View = keyof typeof views

export type Job = {
  company: string
  url: string
  role: string
  /** Year the job started. */
  start: number
  /** Year the job ended. Leave out for the current job ("2024 – now"). */
  end?: number
  /** One string per paragraph. */
  summary: string[]
  links?: Link[]
  tags: string[]
}

/** Newest first. */
export const experience: Job[] = [
  {
    company: 'Fission',
    url: 'https://fission.xyz/',
    role: 'Engineer #2',
    start: 2024,
    summary: [
      'Building the product, from the web app to its integrations with EVM chains and Solana.',
    ],
    tags: ['Ruby on Rails', 'React', 'GraphQL', 'EVM', 'Solana'],
  },
  {
    company: 'Stepful (YC S21)',
    url: 'https://www.stepful.com/',
    role: 'Engineer #2',
    start: 2022,
    end: 2024,
    summary: [
      'Owned features across data, back office, student acquisition and graduation flows at a startup widening access to healthcare education in the US.',
    ],
    tags: ['Ruby on Rails', 'React', 'GraphQL', 'BigQuery'],
  },
  {
    company: 'Vinterior',
    url: 'https://www.vinterior.co/',
    role: 'Software engineer',
    start: 2019,
    end: 2022,
    summary: [
      'Helped redesign the SEO and frontend infrastructure of a vintage furniture marketplace, working in 8-week cycles inspired by Shape Up.',
      'Took time off in 2020 to co-found Ripplr.',
    ],
    tags: ['Ruby on Rails', 'Webpack', 'SEO', 'Web Vitals'],
  },
  {
    company: 'Coatsink',
    url: 'https://coatsink.com/',
    role: 'MSc placement',
    start: 2019,
    end: 2019,
    summary: [
      "Researched AI systems with Unity's then-new DOTS framework during early development of a VR title, later released as Jurassic World Aftermath.",
    ],
    tags: ['Unity', 'DOTS', 'Utility AI'],
  },
  {
    company: 'Whitesmith',
    url: 'https://www.whitesmith.co/',
    role: 'Software engineer',
    start: 2016,
    end: 2018,
    summary: [
      'Client work at a product studio, from discovery to MVP to ongoing improvements, for clients including EDP, Brand Digital, Yardlynk and Supazaar.',
      'Also built Soundy, a "Giphy for sounds", at a team hackathon.',
    ],
    tags: ['Ruby on Rails', 'React', 'Redux'],
  },
]

export type Education = {
  title: string
  place: string
  url: string
  /** "YYYY" */
  year: string
}

/** Newest first. */
export const education: Education[] = [
  {
    title: 'MSc Computer Games Engineering',
    place: 'Newcastle University',
    url: 'https://www.ncl.ac.uk/',
    year: '2019',
  },
  {
    title: 'BSc Computer Science',
    place: 'Universidade de Coimbra',
    url: 'https://www.uc.pt/',
    year: '2016',
  },
  {
    title: 'Organised Shift APPens 2016',
    place: 'Informatics Student Association',
    url: 'https://shiftappens.com/',
    year: '2016',
  },
]
