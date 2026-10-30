import { profile } from './profile'

export const OWNER = profile.name

export type Link = { label: string; url: string }

/** Showcase filter labels, in display order. */
export const KINDS = {
  personal: 'Side projects',
  jam: 'Game jams',
  hackathon: 'Hackathons',
  university: 'University',
} as const

export type Kind = keyof typeof KINDS

export type Project = {
  title: string
  kind: Kind
  /** Position under "Selected projects" in the work view (1 = first). Leave out to skip. */
  featured?: number
  /** Prize or placement, shown as a badge, e.g. "1st place". */
  award?: string
  /** File name in src/assets/projects/ without .webp. Leave out to show a placeholder. */
  image?: string
  /** Year and month, "YYYY-MM". */
  date: `${number}-${number}`
  /** Where it was made: a company, university, event, "Side project" or "Startup". */
  context: string
  /** People involved. A company name stands for its team. */
  team: string[]
  /** One string per paragraph. */
  description: string[]
  links?: Link[]
  tags: string[]
}

/** Newest first. Jobs live in profile.ts. */
export const projects: Project[] = [
  {
    title: 'Belts',
    kind: 'personal',
    featured: 3,
    image: 'belts',
    date: '2022-01',
    context: 'Side project',
    team: ['Guilherme Graça'],
    description: [
      "An experimental 3D game engine for Ruby, with an entity-component design inspired by Ruby on Rails and Unity's DOTS.",
    ],
    links: [
      { label: 'GitHub', url: 'https://github.com/ggraca/belts' },
      { label: 'RubyGems', url: 'https://rubygems.org/gems/belts' },
    ],
    tags: ['Ruby', 'OpenGL', 'Game Engine'],
  },
  {
    title: 'Ripplr',
    kind: 'personal',
    featured: 2,
    image: 'ripplr',
    date: '2020-10',
    context: 'Startup',
    team: ['Guilherme Graça', 'Mário Balça'],
    description: [
      'A social platform for sharing content found online, which I co-founded and launched during COVID.',
    ],
    links: [
      { label: 'YouTube', url: 'https://www.youtube.com/watch?v=N15qLyp5IA0&t=22s' },
      { label: 'GitHub', url: 'https://github.com/ripplr-io/ripplr-api' },
    ],
    tags: ['Ruby on Rails', 'Vue', 'Vite', 'Kubernetes'],
  },
  {
    title: 'MSc Dissertation',
    kind: 'university',
    image: 'dissertation',
    date: '2019-05',
    context: 'Coatsink',
    team: ['Guilherme Graça'],
    description: [
      "Research into game AI with data-oriented design, using utility AI on Unity's then-new DOTS framework.",
    ],
    tags: ['Unity', 'DOTS', 'Utility AI'],
  },
  {
    title: 'Collect and Destroy',
    kind: 'university',
    featured: 4,
    image: 'teamproject',
    date: '2019-03',
    context: 'University',
    team: [
      'Guilherme Graça',
      'Berkem Çinar',
      'Craig Whittaker',
      'Derianna Thomas',
      'Ed Williams',
      'Martin Engelsgjerd',
      'Nezar Nassif',
      'Sam Bendell',
      'Vassia Vasiladioti',
    ],
    description: [
      'A multiplayer game on a custom C++ engine. I built the engine core and networking, and set up code reviews and CI.',
    ],
    links: [
      { label: 'YouTube', url: 'https://youtu.be/2D5b__zaiHE' },
      { label: 'GitHub', url: 'https://github.com/ggraca/csc8506-teamproject' },
    ],
    tags: ['C++', 'Networking', 'Bullet Physics'],
  },
  {
    title: 'Minecart Rampage',
    kind: 'university',
    image: 'game-prototyping',
    date: '2019-02',
    context: 'University',
    team: ['Guilherme Graça'],
    description: [
      'A Unity prototype made before the MSc team project, built to handle a scene full of objects.',
    ],
    links: [
      { label: 'YouTube', url: 'https://youtu.be/ezQWPo04Wm0' },
      { label: 'GitHub', url: 'https://github.com/ggraca/csc8505' },
    ],
    tags: ['Unity'],
  },
  {
    title: 'Game Tech Coursework',
    kind: 'university',
    image: 'gametech-coursework',
    date: '2018-12',
    context: 'University',
    team: ['Guilherme Graça'],
    description: [
      'Low-level game tech beyond graphics: collision detection and resolution, pathfinding, state machines and networking.',
    ],
    links: [
      { label: 'YouTube', url: 'https://www.youtube.com/watch?v=tb4ZXrDDDWU' },
      { label: 'GitHub', url: 'https://github.com/ggraca/CSC8503' },
    ],
    tags: ['C++', 'Physics', 'AI', 'Networking'],
  },
  {
    title: 'Sacrifitem',
    kind: 'jam',
    image: 'sacrifitem',
    date: '2018-12',
    context: 'Ludum Dare',
    team: ['Guilherme Graça', 'Angelos Tsolakis', 'Berkem Çinar', 'Vassia Vasiladioti'],
    description: [
      'A local multiplayer fighting game inspired by card games, where you choose which items to sacrifice and which to play.',
    ],
    links: [
      { label: 'Play', url: 'https://ggraca.github.io/sacrifitem/' },
      { label: 'GitHub', url: 'https://github.com/ggraca/sacrifitem' },
    ],
    tags: ['Unity'],
  },
  {
    title: 'Graphics Coursework',
    kind: 'university',
    image: 'graphics-coursework',
    date: '2018-11',
    context: 'University',
    team: ['Guilherme Graça'],
    description: [
      'Coursework on the graphics pipeline and shader programming, rendering a scene in C++ and OpenGL.',
    ],
    links: [
      { label: 'YouTube', url: 'https://www.youtube.com/watch?v=plCn6zL45Wc' },
      { label: 'GitHub', url: 'https://github.com/ggraca/CSC8502' },
    ],
    tags: ['C++', 'OpenGL', 'Shaders'],
  },
  {
    title: 'Blockville',
    kind: 'hackathon',
    image: 'blockville',
    date: '2018-05',
    context: 'Shift APPens',
    team: ['Guilherme Graça', 'Miguel Duarte', 'Inês Simões'],
    description: [
      'A real estate and resource management game on the blockchain, with Ethereum smart contracts, voxel art and a 3D interface.',
    ],
    links: [{ label: 'GitHub', url: 'https://github.com/ggraca/blockville' }],
    tags: ['Unity', 'Solidity', 'Node.js', 'Voxel Art'],
  },
  {
    title: 'TCPanic',
    kind: 'jam',
    featured: 1,
    image: 'tcpanic',
    date: '2018-01',
    context: 'Global Game Jam',
    team: ['Guilherme Graça', 'Alexandre Jesus', 'João Marques'],
    description: [
      'A platformer about sending TCP packets and waiting for their acknowledgements, across neon Tron-style levels.',
    ],
    links: [
      { label: 'Play', url: 'https://ggraca.github.io/tcpanic/' },
      { label: 'GitHub', url: 'https://github.com/ggraca/tcpanic' },
    ],
    tags: ['Unity', 'Post-processing'],
  },
  {
    title: 'Pixel Sims',
    kind: 'hackathon',
    image: 'pixelsims',
    date: '2017-10',
    context: 'Pixels Camp',
    team: ['Guilherme Graça', 'Diogo de Bastos'],
    description: ['A hackathon simulator with pixel-art graphics and AI-controlled characters.'],
    links: [{ label: 'Play', url: 'https://ggraca.github.io/pixels-sims/' }],
    tags: ['JavaScript', 'PixiJS', 'AI'],
  },
  {
    title: 'Chelas VR',
    kind: 'hackathon',
    award: '1st place',
    date: '2017-02',
    context: 'Shift APPens',
    team: ['Guilherme Graça', 'Diogo de Bastos', 'Pedro Costa', 'Renato de Leão'],
    description: [
      'An endless VR game played on a real treadmill: push a stolen shopping cart through the city, dodging traffic and the police.',
    ],
    tags: ['Unity', 'VR', 'Electronics'],
  },
  {
    title: 'Boardlink',
    kind: 'hackathon',
    image: 'boardlink',
    date: '2016-09',
    context: 'Porto Summer of Code',
    team: ['Guilherme Graça', 'João Marques', 'Inês Simões'],
    description: [
      'A recursive, Trello-like app for organising information in a standard format that other software can read and add to.',
    ],
    tags: ['Ruby on Rails', 'React', 'JavaScript'],
  },
  {
    title: 'Curling Game',
    kind: 'university',
    image: 'curling',
    date: '2016-06',
    context: 'University',
    team: ['Guilherme Graça', 'Rui Casaleiro'],
    description: ['A curling game built in a three-day sprint for coursework, in C++ and OpenGL.'],
    links: [{ label: 'GitHub', url: 'https://github.com/ggraca/projeto-cg' }],
    tags: ['C++', 'OpenGL'],
  },
  {
    title: 'C Compiler',
    kind: 'university',
    date: '2016-05',
    context: 'University',
    team: ['Guilherme Graça', 'Pedro Belém'],
    description: [
      'A compiler for C, written in C: lexical, syntax and semantic analysis through to code generation.',
    ],
    links: [{ label: 'GitHub', url: 'https://github.com/pedrocb/Projeto-Compiladores' }],
    tags: ['C', 'Regular Expressions', 'Assembly'],
  },
  {
    title: 'BIDI',
    kind: 'hackathon',
    award: '1st place',
    date: '2016-04',
    context: 'Techathon',
    team: ['Guilherme Graça', 'André Baptista', 'Rui Casaleiro'],
    description: [
      'An invisible drum kit for wearables, prototyped with BITalino sensors. Our entry was rejected at first, so we insisted, got in and won.',
    ],
    tags: ['Electronics', 'Wearables'],
  },
  {
    title: 'Grab and Let Go',
    kind: 'jam',
    image: 'grabnletgo',
    date: '2016-01',
    context: 'Ludum Dare',
    team: ['Guilherme Graça'],
    description: ['A rhythm game played with a single key: catch the crates, then stack them.'],
    links: [
      { label: 'Play', url: 'https://ggraca.github.io/grab-n-let-go/' },
      { label: 'GitHub', url: 'https://github.com/ggraca/grab-n-let-go' },
    ],
    tags: ['Unity', 'Inkscape'],
  },
  {
    title: 'Crowd Conquer',
    kind: 'hackathon',
    award: 'Audience award',
    image: 'crowd-conquer',
    date: '2015-02',
    context: 'Shift APPens',
    team: ['Guilherme Graça', 'André Baptista', 'José Marcelino', 'Miguel Duarte'],
    description: [
      'Pokémon Go before it was cool: claim real-world territory by going there with your phone, then defend it with alliances.',
    ],
    tags: ['Android', 'Geolocation', 'Meteor', 'JavaScript'],
  },
  {
    title: 'Pkill',
    kind: 'jam',
    image: 'pkill',
    date: '2014-12',
    context: 'Ludum Dare',
    team: ['Guilherme Graça'],
    description: [
      'A typing shooter: type commands like "walk" or "teleport", and set up aliases to plan for the late game.',
    ],
    links: [
      { label: 'Play', url: 'https://ggraca.github.io/pkill/' },
      {
        label: 'Ludum Dare',
        url: 'https://ludumdare.com/compo/ludum-dare-31/?action=preview&uid=44716',
      },
      { label: 'GitHub', url: 'https://github.com/ggraca/pkill' },
    ],
    tags: ['JavaScript', 'PixiJS'],
  },
  {
    title: 'Splondee',
    kind: 'university',
    image: 'splondee',
    date: '2014-05',
    context: 'University',
    team: ['Guilherme Graça', 'Beatriz Diogo', 'Mário Balça'],
    description: [
      'A puzzle game about serving the best drink ever: connect the right pipes and mix the right ingredients across nine levels.',
    ],
    links: [
      { label: 'Play', url: 'https://ggraca.github.io/splondee/' },
      { label: 'GitHub', url: 'https://github.com/ggraca/splondee' },
    ],
    tags: ['JavaScript'],
  },
]
