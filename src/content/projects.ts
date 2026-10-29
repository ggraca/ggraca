export const OWNER = 'Guilherme Graça'

export type Link = { label: string; url: string }

export type Project = {
  title: string
  /** File name in src/assets/projects/ without .webp. Leave out to show a placeholder. */
  image?: string
  /** Year and month, "YYYY-MM". */
  date: `${number}-${number}`
  /** Where it was made: a company, university, game jam or "Free Time". */
  context: string
  /** People involved. A company name stands for its team. */
  team: string[]
  /** One string per paragraph. */
  description: string[]
  links?: Link[]
  tags: string[]
}

/** Newest first. */
export const projects: Project[] = [
  {
    title: 'Stepful (YC S21)',
    image: 'stepful',
    date: '2022-08',
    context: 'Stepful',
    team: ['Stepful'],
    description: [
      'Stepful is revolutionizing access to healthcare education in the US. I joined as the second engineer and owned many features regarding data, back office, acquisition and graduation flows, etc.',
    ],
    links: [
      { label: 'Website', url: 'https://www.stepful.com' },
      { label: 'YC Profile', url: 'https://www.ycombinator.com/companies/stepful' },
    ],
    tags: ['Ruby on Rails', 'ReactJS', 'GraphQL', 'Big Query', 'Data'],
  },
  {
    title: 'Belts',
    image: 'belts',
    date: '2022-01',
    context: 'Free Time',
    team: ['Guilherme Graça'],
    description: [
      "Belts is an open-source game engine for the ruby programming language, heavily inspired by Ruby on Rails and Unity's DOTS",
    ],
    links: [
      { label: 'Rubygems', url: 'https://rubygems.org/gems/belts' },
      { label: 'GitHub', url: 'https://github.com/ggraca/belts' },
    ],
    tags: ['Ruby', 'OpenGL', 'Open Source', 'Game Engine'],
  },
  {
    title: 'Ripplr',
    image: 'ripplr',
    date: '2020-10',
    context: 'Ripplr',
    team: ['Guilherme Graça', 'Mário Balça'],
    description: [
      'Ripplr is a social platform for sharing content available online. I quit my job to create this and try to turn it into a sucessfull business.',
    ],
    links: [
      { label: 'Youtube', url: 'https://www.youtube.com/watch?v=N15qLyp5IA0&t=22s' },
      { label: 'GitHub', url: 'https://github.com/ripplr-io/ripplr-api' },
    ],
    tags: ['Ruby on Rails', 'VueJS', 'ViteJS', 'K8s', 'Business'],
  },
  {
    title: 'Vinterior',
    image: 'vinterior',
    date: '2019-09',
    context: 'Vinterior',
    team: ['Vinterior'],
    description: [
      'Vinterior is a marketplace of vintage furniture. We worked on 8 week cycles, inspired by Shape Up. During this time, I helped designing and shipping big changes to our SEO and Frontend infrastructures, alongside other smaller features and improvements.',
    ],
    links: [{ label: 'Website', url: 'https://vinterior.co' }],
    tags: ['Ruby on Rails', 'Webpack', 'SEO', 'Web Vitals'],
  },
  {
    title: 'MSc Dissertation',
    image: 'dissertation',
    date: '2019-05',
    context: 'Coatsink',
    team: ['Guilherme Graça'],
    description: [
      "During my placement at Coatsink, I researched and implemented AI systems in a Data-Oriented Design environment. This was done for an unannounced VR title, using Unity's new framework — DOTS.",
    ],
    tags: ['Unity3D', 'DOTS', 'Utility AI', 'AI', 'Data-Oriented Design'],
  },
  {
    title: 'Collect and Destroy',
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
      'This was the final team project for my MSc. My contribution was building the core engine architecture, network communication, developing some tools (like .obj file loading) and ensuring best practices by code reviewing and setting up continuous integration.',
    ],
    links: [
      { label: 'Youtube', url: 'https://youtu.be/2D5b__zaiHE' },
      { label: 'GitHub', url: 'https://github.com/ggraca/csc8506-teamproject' },
    ],
    tags: ['Game Engine', 'Networking', 'Bullet Physics', 'C++'],
  },
  {
    title: 'Minecart Rampage',
    image: 'game-prototyping',
    date: '2019-02',
    context: 'University',
    team: ['Guilherme Graça'],
    description: [
      'Before starting the team project, each member of the group created a small prototype in a comercial engine. The requirement was having a lot of objects in the scene.',
    ],
    links: [
      { label: 'Youtube', url: 'https://youtu.be/ezQWPo04Wm0' },
      { label: 'GitHub', url: 'https://github.com/ggraca/csc8505' },
    ],
    tags: ['Unity3D'],
  },
  {
    title: 'Game Tech Coursework',
    image: 'gametech-coursework',
    date: '2018-12',
    context: 'University',
    team: ['Guilherme Graça'],
    description: [
      'This coursework allowed me to experiment with some low level game tech, other than graphics.',
      'These were some of the topics taught: Collision Phases, Collision Resolution with different shapes, Pathfinding, State Machines and Networking',
    ],
    links: [
      { label: 'Youtube', url: 'https://www.youtube.com/watch?v=tb4ZXrDDDWU' },
      { label: 'GitHub', url: 'https://github.com/ggraca/CSC8503' },
    ],
    tags: ['Physics', 'AI', 'Networking', 'C++'],
  },
  {
    title: 'Sacrifitem',
    image: 'sacrifitem',
    date: '2018-12',
    context: 'Ludum Dare',
    team: ['Guilherme Graça', 'Angelos Tsolakis', 'Berkem Çinar', 'Vassia Vasiladioti'],
    description: [
      'Inspired by some card games, Sacrifitem is a local-multiplayer item based fighting game.',
      'The main mechanic revolves around choosing what items to sacrifice and what items to play.',
    ],
    links: [
      { label: 'Website', url: 'https://ggraca.github.io/sacrifitem/' },
      { label: 'Itch.io', url: 'https://ggraca.itch.io/sacrifitem' },
      { label: 'Ludum Dare', url: 'https://ldjam.com/events/ludum-dare/43/sacrifitem' },
      { label: 'GitHub', url: 'https://github.com/ggraca/sacrifitem' },
    ],
    tags: ['Unity3D'],
  },
  {
    title: 'Graphics Coursework',
    image: 'graphics-coursework',
    date: '2018-11',
    context: 'University',
    team: ['Guilherme Graça'],
    description: [
      'This module introduced me the graphics pipeline, the uses and limitations of a graphics card and shader programming.',
    ],
    links: [
      { label: 'Youtube', url: 'https://www.youtube.com/watch?v=plCn6zL45Wc' },
      { label: 'GitHub', url: 'https://github.com/ggraca/CSC8502' },
    ],
    tags: ['OpenGL', 'Shaders', 'C++'],
  },
  {
    title: 'Blockville',
    image: 'blockville',
    date: '2018-05',
    context: 'Shift APPens',
    team: ['Guilherme Graça', 'Miguel Duarte', 'Inês Simões'],
    description: [
      'Initially intended to be a farmville clone in the blockchain, this project then evolved into a real estate and resource management game.',
      'It was created for Shift APPens 2018 and uses Ethereum smart contracts, Voxel Art and a 3D user interface.',
    ],
    links: [{ label: 'GitHub', url: 'https://github.com/ggraca/blockville' }],
    tags: ['Unity3D', 'Solidity', 'NodeJS', 'Voxel Art'],
  },
  {
    title: 'Yardlynk',
    image: 'yardlynk',
    date: '2018-02',
    context: 'Whitesmith',
    team: ['Whitesmith'],
    description: [
      'Yardlynk is a platform that connects suppliers and customers in the construction business.',
      "I joined the project in an early stages, helping in the discovery phase and then developing the mvp that was launched a few months later. After that we kept improving the platform based on clients' feedback.",
    ],
    links: [{ label: 'Website', url: 'https://yardlynk.com/' }],
    tags: ['Ruby on Rails'],
  },
  {
    title: 'TCPanic',
    image: 'tcpanic',
    date: '2018-01',
    context: 'Global Game Jam',
    team: ['Guilherme Graça', 'Alexandre Jesus', 'João Marques'],
    description: [
      'TCPanic is a platform game about sending tcp packages and acknowledging their return over some tron looking levels.',
    ],
    links: [
      { label: 'Website', url: 'https://ggraca.github.io/tcpanic/' },
      { label: 'Itch.io', url: 'https://ggraca.itch.io/tcpanic' },
      { label: 'Global Game Jam', url: 'https://globalgamejam.org/2018/games/tcpanic' },
      { label: 'GitHub', url: 'https://github.com/ggraca/tcpanic' },
    ],
    tags: ['Unity3D', 'Post Processing Effects'],
  },
  {
    title: 'Supazaar',
    image: 'supazaar',
    date: '2017-12',
    context: 'Whitesmith',
    team: ['Whitesmith'],
    description: [
      'Supazaar is a rental platform for props and items for events.',
      'I mainly did maintenance and added some new features to an already existing product.',
    ],
    links: [{ label: 'Website', url: 'https://www.supazaar.co.uk/' }],
    tags: ['Ruby on Rails'],
  },
  {
    title: 'Pixel Sims',
    image: 'pixelsims',
    date: '2017-10',
    context: 'Pixels Camp',
    team: ['Guilherme Graça', 'Diogo de Bastos'],
    description: ['An hackathon simulator with pixelated graphics'],
    links: [{ label: 'Website', url: 'https://ggraca.github.io/pixels-sims/' }],
    tags: ['PixiJS', 'AI', 'Javascript'],
  },
  {
    title: 'Chelas VR',
    date: '2017-02',
    context: 'Shift APPens',
    team: ['Guilherme Graça', 'Diogo de Bastos', 'Pedro Costa', 'Renato de Leão'],
    description: [
      'We created an endless game in VR using a real (and old) treadmill.',
      "The objective of the game was inspired by a moment in a student's festival in my hometown: push a stolen shopping cart around the city, avoid the traffic and don't let the police get you. All of this without getting low on beer.",
      'We got a lot of people wanting to try it and achieved first place!',
    ],
    tags: ['Unity3D', 'Electronics', 'VR/AR'],
  },
  {
    title: 'Boardlink',
    image: 'boardlink',
    date: '2016-09',
    context: 'Porto Summer of Code',
    team: ['Guilherme Graça', 'João Marques', 'Inês Simões'],
    description: [
      'This project was a nice and simple recursive trello-like app.',
      'Now, Boardlink aims to be a platform for storing and organizing information in a standardized way and to allow third party software to automatically add data, view it or correlate it.',
    ],
    tags: ['Ruby on Rails', 'ReactJS', 'Javascript'],
  },
  {
    title: 'Soundy',
    image: 'soundy',
    date: '2016-07',
    context: 'Whitesmith',
    team: ['Whitesmith'],
    description: [
      'Soundy is like giphy but for sounds.',
      'It was created during a hackathon after I joined the team and we kept improving it whenever we had some free time',
    ],
    links: [{ label: 'Website', url: 'https://soundy.top/sounds' }],
    tags: ['Ruby on Rails', 'ReactJS', 'Redux', 'Javascript'],
  },
  {
    title: 'Unnamed Curling Game',
    image: 'curling',
    date: '2016-06',
    context: 'University',
    team: ['Guilherme Graça', 'Rui Casaleiro'],
    description: [
      'Created in a 3 days sprint for a coursework using an outdated OpenGL version (2 I think...).',
    ],
    links: [{ label: 'GitHub', url: 'https://github.com/ggraca/projeto-cg' }],
    tags: ['OpenGL', 'C++'],
  },
  {
    title: 'C Compiler',
    date: '2016-05',
    context: 'University',
    team: ['Guilherme Graça', 'Pedro Belém'],
    description: [
      'A four part compiler program in C for C: Lexical Analysis, Syntax Analysis, Semantic Analysis and Code Generation.',
    ],
    links: [{ label: 'GitHub', url: 'https://github.com/pedrocb/Projeto-Compiladores' }],
    tags: ['C', 'Regular Expressions', 'Assembly'],
  },
  {
    title: 'BIDI',
    date: '2016-04',
    context: 'Techathon',
    team: ['Guilherme Graça', 'André Baptista', 'Rui Casaleiro'],
    description: [
      'An invisible drum kit for wearables prototyped using bitalino and a bunch of different sensors.',
      'After our application had been rejected we insisted and got in, only to win the first place and a trip to Amsterdam and thanks to an awesome live performance by André and a great pitch by Rui!',
    ],
    tags: ['Electronics', 'Wearables'],
  },
  {
    title: 'Shift APPens 2016',
    image: 'shiftappens',
    date: '2016-02',
    context: 'Informatics Student Association',
    team: ['Guilherme Graça', 'Tiago Botelho'],
    description: [
      'Shift APPens is a local hackathon growing more and more every year. After attending as a participant for two editions i decided to organize and give my contribute to the next one.',
    ],
    links: [
      { label: 'Website', url: 'https://2016.shiftappens.com/' },
      { label: 'Latest Website', url: 'https://shiftappens.com/' },
    ],
    tags: ['Event Organizing', 'Product Identity'],
  },
  {
    title: 'Grab and let Go',
    image: 'grabnletgo',
    date: '2016-01',
    context: 'Ludum Dare',
    team: ['Guilherme Graça'],
    description: ['A rhythm game about catching crates and then stacking them using only one key.'],
    links: [
      { label: 'Website', url: 'https://ggraca.github.io/grab-n-let-go/' },
      { label: 'Itch.io', url: 'https://ggraca.itch.io/grab-n-let-go' },
      {
        label: 'Ludum Dare',
        url: 'https://ludumdare.com/compo/ludum-dare-34/?action=preview&uid=44716',
      },
      { label: 'GitHub', url: 'https://github.com/ggraca/grab-n-let-go' },
    ],
    tags: ['Unity3D', 'Inkscape'],
  },
  {
    title: 'Crowd Conquer',
    image: 'crowd-conquer',
    date: '2015-02',
    context: 'Shift APPens',
    team: ['Guilherme Graça', 'André Baptista', 'José Marcelino', 'Miguel Duarte'],
    description: [
      'Crowd Conquer was Pokemon Go before it was cool. In this game the players had to conquer chunks of the real world by physically going there with their phones. In addition they had to defend their territories and could form alliances to make it easier.',
    ],
    tags: ['Geolocation', 'Android', 'MeteorJS', 'Javascript'],
  },
  {
    title: 'Pkill',
    image: 'pkill',
    date: '2014-12',
    context: 'Ludum Dare',
    team: ['Guilherme Graça'],
    description: [
      'Pkill is a type o shooter with awfull graphics but some interesting features.',
      'It\'s possible to type some commands like "walk", "teleport" or "swipe" and even better: start planning the late game with some aliases.',
    ],
    links: [
      { label: 'Website', url: 'https://ggraca.github.io/pkill/' },
      {
        label: 'Ludum Dare',
        url: 'https://ludumdare.com/compo/ludum-dare-31/?action=preview&uid=44716',
      },
      { label: 'GitHub', url: 'https://github.com/ggraca/pkill' },
    ],
    tags: ['PixiJS', 'Javascript'],
  },
  {
    title: 'Splondee',
    image: 'splondee',
    date: '2014-05',
    context: 'University',
    team: ['Guilherme Graça', 'Beatriz Diogo', 'Mário Balça'],
    description: [
      'Splondee is the best drink ever! But, in order to serve it, you must find the correct pipes and mix all the right ingredients in each one of the nine levels.',
    ],
    links: [
      { label: 'Website', url: 'https://ggraca.github.io/splondee/' },
      { label: 'GitHub', url: 'https://github.com/ggraca/splondee' },
    ],
    tags: ['Javascript'],
  },
]
