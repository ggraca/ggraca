const project_data = [
  {
    title: "Stepful (YC S21)",
    image: "/stepful.png",
    team: ["Stepful", null],
    date: "August 2022",
    env: "Stepful",
    description: "Stepful is revolutionizing access to healthcare education in the US. I joined as the second engineer and owned many features regarding data, back office, acquisition and graduation flows, etc.",
    links: [
      { name: "Website", link: "https://www.stepful.com" },
      { name: "YC Profile", link: "https://www.ycombinator.com/companies/stepful" },
    ],
    tags: ["Ruby on Rails", "ReactJS", "GraphQL", "Big Query", "Data"],
    featured: false
  },
  {
    title: "Belts",
    image: "/belts.png",
    team: ["Guilherme Graça"],
    date: "January 2022",
    env: "Free Time",
    description: "Belts is an open-source game engine for the ruby programming language, heavily inspired by Ruby on Rails and Unity's DOTS",
    links: [
      { name: "Rubygems", link: "https://rubygems.org/gems/belts" },
      { name: "GitHub", link: "https://github.com/ggraca/belts" },
      // {name: "Youtube", link: "WIP"},
    ],
    tags: ["Ruby", "OpenGL", "Open Source", "Game Engine"],
    featured: false
  },
  {
    title: "Ripplr",
    image: "/ripplr.jpg",
    team: ["Guilherme Graça", "Mário Balça"],
    date: "October 2020",
    env: "Ripplr",
    description: "Ripplr is a social platform for sharing content available online. I quit my job to create this and try to turn it into a sucessfull business.",
    links: [
      { name: "Youtube", link: "https://www.youtube.com/watch?v=N15qLyp5IA0&t=22s" },
      { name: "GitHub", link: "https://github.com/ripplr-io/ripplr-api" },
    ],
    tags: ["Ruby on Rails", "VueJS", "ViteJS", "K8s", "Business"],
    featured: false
  },
  {
    title: "Vinterior",
    image: "/vinterior.jpg",
    team: ["Vinterior", null],
    date: "September 2019",
    env: "Vinterior",
    description: "Vinterior is a marketplace of vintage furniture. We worked on 8 week cycles, inspired by Shape Up. During this time, I helped designing and shipping big changes to our SEO and Frontend infrastructures, alongside other smaller features and improvements.",
    links: [
      { name: "Website", link: "https://vinterior.co" }
    ],
    tags: ["Ruby on Rails", "Webpack", "SEO", "Web Vitals"],
    featured: false
  },
  {
    title: "MSc Dissertation",
    image: "/dissertation.png",
    team: ["Guilherme Graça"],
    date: "May 2019",
    env: "Coatsink",
    description: "During my placement at Coatsink, I researched and implemented AI systems in a Data-Oriented Design environment. This was done for an unannounced VR title, using Unity's new framework — DOTS.",
    tags: ["Unity3D", "DOTS", "Utility AI", "AI", "Data-Oriented Design"],
    featured: false
  },
  {
    title: "Collect and Destroy",
    image: "/teamproject.png",
    team: ["Guilherme Graça", "Berkem Çinar", "Craig Whittaker", "Derianna Thomas", "Ed Williams", "Martin Engelsgjerd", "Nezar Nassif", "Sam Bendell", "Vassia Vasiladioti"],
    date: "March 2019",
    env: "University",
    description: "This was the final team project for my MSc. My contribution was building the core engine architecture, network communication, developing some tools (like .obj file loading) and ensuring best practices by code reviewing and setting up continuous integration.",
    links: [
      { name: "Youtube", link: "https://youtu.be/2D5b__zaiHE" },
      { name: "GitHub", link: "https://github.com/ggraca/csc8506-teamproject" }
    ],
    tags: ["Game Engine", "Networking", "Bullet Physics", "C++"],
    featured: false
  },
  {
    title: "Minecart Rampage",
    image: "/game-prototyping.png",
    team: ["Guilherme Graça"],
    date: "February 2019",
    env: "University",
    description: "Before starting the team project, each member of the group created a small prototype in a comercial engine. The requirement was having a lot of objects in the scene.",
    links: [
      { name: "Youtube", link: "https://youtu.be/ezQWPo04Wm0" },
      { name: "GitHub", link: "https://github.com/ggraca/csc8505" }
    ],
    tags: ["Unity3D"]
  },
  {
    title: "Game Tech Coursework",
    image: "/gametech-coursework.jpg",
    team: ["Guilherme Graça"],
    date: "December 2018",
    env: "University",
    description: "This coursework allowed me to experiment with some low level game tech, other than graphics.\nThese were some of the topics taught: Collision Phases, Collision Resolution with different shapes, Pathfinding, State Machines and Networking ",
    links: [
      { name: "Youtube", link: "https://www.youtube.com/watch?v=tb4ZXrDDDWU" },
      { name: "GitHub", link: "https://github.com/ggraca/CSC8503" }
    ],
    tags: ["Physics", "AI", "Networking", "C++"]
  },
  {
    title: "Sacrifitem",
    image: "/sacrifitem.png",
    team: ["Guilherme Graça", "Angelos Tsolakis", "Berkem Çinar", "Vassia Vasiladioti"],
    date: "December 2018",
    env: "Ludum Dare",
    description: "Inspired by some card games, Sacrifitem is a local-multiplayer item based fighting game.\nThe main mechanic revolves around choosing what items to sacrifice and what items to play.",
    links: [
      { name: "Website", link: "https://ggraca.github.io/sacrifitem/" },
      { name: "Itch.io", link: "https://ggraca.itch.io/sacrifitem" },
      { name: "Ludum Dare", link: "https://ldjam.com/events/ludum-dare/43/sacrifitem" },
      { name: "GitHub", link: "https://github.com/ggraca/sacrifitem" }
    ],
    tags: ["Unity3D"]
  },
  {
    title: "Graphics Coursework",
    image: "/graphics-coursework.jpg",
    team: ["Guilherme Graça"],
    date: "November 2018",
    env: "University",
    description: "This module introduced me the graphics pipeline, the uses and limitations of a graphics card and shader programming.",
    links: [
      { name: "Youtube", link: "https://www.youtube.com/watch?v=plCn6zL45Wc" },
      { name: "GitHub", link: "https://github.com/ggraca/CSC8502" }
    ],
    tags: ["OpenGL", "Shaders", "C++"]
  },
  {
    title: "Blockville",
    image: "/blockville.png",
    team: ["Guilherme Graça", "Miguel Duarte", "Inês Simões"],
    date: "May 2018",
    env: "Shift APPens",
    description: "Initially intended to be a farmville clone in the blockchain, this project then evolved into a real estate and resource management game.\nIt was created for Shift APPens 2018 and uses Ethereum smart contracts, Voxel Art and a 3D user interface.",
    links: [
      { name: "GitHub", link: "https://github.com/ggraca/blockville" }
    ],
    tags: ["Unity3D", "Solidity", "NodeJS", "Voxel Art"]
  },
  {
    title: "Yardlynk",
    image: "/yardlynk.png",
    team: ["Whitesmith", null],
    date: "February 2018",
    env: "Whitesmith",
    description: "Yardlynk is a platform that connects suppliers and customers in the construction business.\nI joined the project in an early stages, helping in the discovery phase and then developing the mvp that was launched a few months later. After that we kept improving the platform based on clients' feedback.",
    links: [
      { name: "Website", link: "https://yardlynk.com/" }
    ],
    tags: ["Ruby on Rails"]
  },
  {
    title: "TCPanic",
    image: "/tcpanic.png",
    team: ["Guilherme Graça", "Alexandre Jesus", "João Marques"],
    date: "January 2018",
    env: "Global Game Jam",
    description: "TCPanic is a platform game about sending tcp packages and acknowledging their return over some tron looking levels.",
    links: [
      { name: "Website", link: "https://ggraca.github.io/tcpanic/" },
      { name: "Itch.io", link: "https://ggraca.itch.io/tcpanic" },
      { name: "Global Game Jam", link: "https://globalgamejam.org/2018/games/tcpanic" },
      { name: "GitHub", link: "https://github.com/ggraca/tcpanic" }
    ],
    tags: ["Unity3D", "Post Processing Effects"]
  },
  {
    title: "Supazaar",
    image: "/supazaar.png",
    team: ["Whitesmith", null],
    date: "December 2017",
    env: "Whitesmith",
    description: "Supazaar is a rental platform for props and items for events.\nI mainly did maintenance and added some new features to an already existing product.",
    links: [
      { name: "Website", link: "https://www.supazaar.co.uk/" }
    ],
    tags: ["Ruby on Rails"]
  },
  {
    title: "Pixel Sims",
    image: "/pixelsims.png",
    team: ["Guilherme Graça", "Diogo de Bastos"],
    date: "October 2017",
    env: "Pixels Camp",
    description: "An hackathon simulator with pixelated graphics",
    links: [
      { name: "Website", link: "https://ggraca.github.io/pixels-sims/" }
    ],
    tags: ["PixiJS", "AI", "Javascript"]
  },
  {
    title: "Chelas VR",
    team: ["Guilherme Graça", "Diogo de Bastos", "Pedro Costa", "Renato de Leão"],
    date: "February 2017",
    env: "Shift APPens",
    description: "We created an endless game in VR using a real (and old) treadmill.\nThe objective of the game was inspired by a moment in a student's festival in my hometown: push a stolen shopping cart around the city, avoid the traffic and don't let the police get you. All of this without getting low on beer.\nWe got a lot of people wanting to try it and achieved first place!",
    tags: ["Unity3D", "Electronics", "VR/AR"]
  },
  {
    title: "Boardlink",
    image: "/boardlink.png",
    team: ["Guilherme Graça", "João Marques", "Inês Simões"],
    date: "September 2016",
    env: "Porto Summer of Code",
    description: "This project was a nice and simple recursive trello-like app.\nNow, Boardlink aims to be a platform for storing and organizing information in a standardized way and to allow third party software to automatically add data, view it or correlate it.",
    links: [
      // {name: "Website", link: "https://boardlink.herokuapp.com"}
    ],
    tags: ["Ruby on Rails", "ReactJS", "Javascript"]
  },
  {
    title: "Soundy",
    image: "/soundy.png",
    team: ["Whitesmith", null],
    date: "July 2016",
    env: "Whitesmith",
    description: "Soundy is like giphy but for sounds.\nIt was created during a hackathon after I joined the team and we kept improving it whenever we had some free time",
    links: [
      { name: "Website", link: "https://soundy.top/sounds" }
    ],
    tags: ["Ruby on Rails", "ReactJS", "Redux", "Javascript"]
  },
  {
    title: "Unnamed Curling Game",
    image: "/curling.png",
    team: ["Guilherme Graça", "Rui Casaleiro"],
    date: "June 2016",
    env: "University",
    description: "Created in a 3 days sprint for a coursework using an outdated OpenGL version (2 I think...).",
    links: [
      { name: "GitHub", link: "https://github.com/ggraca/projeto-cg" }
    ],
    tags: ["OpenGL", "C++"]
  },
  {
    title: "C Compiler",
    image: "/missing.png",
    team: ["Guilherme Graça", "Pedro Belém"],
    date: "May 2016",
    env: "University",
    description: "A four part compiler program in C for C: Lexical Analysis, Syntax Analysis, Semantic Analysis and Code Generation.",
    links: [
      { name: "GitHub", link: "https://github.com/pedrocb/Projeto-Compiladores" }
    ],
    tags: ["C", "Regular Expressions", "Assembly"]
  },
  {
    title: "BIDI",
    team: ["Guilherme Graça", "André Baptista", "Rui Casaleiro"],
    date: "April 2016",
    env: "Techathon",
    description: "An invisible drum kit for wearables prototyped using bitalino and a bunch of different sensors.\nAfter our application had been rejected we insisted and got in, only to win the first place and a trip to Amsterdam and thanks to an awesome live performance by André and a great pitch by Rui!",
    tags: ["Electronics", "Wearables"]
  },
  {
    title: "Shift APPens 2016",
    image: "/shiftappens.jpg",
    team: ["Guilherme Graça", "Tiago Botelho"],
    date: "February 2016",
    env: "Informatics Student Association",
    description: "Shift APPens is a local hackathon growing more and more every year. After attending as a participant for two editions i decided to organize and give my contribute to the next one.",
    links: [
      { name: "Website", link: "https://2016.shiftappens.com/" },
      { name: "Latest Website", link: "https://shiftappens.com/" },
    ],
    tags: ["Event Organizing", "Product Identity"]
  },
  {
    title: "Grab and let Go",
    image: "/grabnletgo.png",
    team: ["Guilherme Graça"],
    date: "January 2016",
    env: "Ludum Dare",
    description: "A rhythm game about catching crates and then stacking them using only one key.",
    links: [
      { name: "Website", link: "https://ggraca.github.io/grab-n-let-go/" },
      { name: "Itch.io", link: "https://ggraca.itch.io/grab-n-let-go" },
      { name: "Ludum Dare", link: "http://ludumdare.com/compo/ludum-dare-34/?action=preview&uid=44716" },
      { name: "GitHub", link: "https://github.com/ggraca/grab-n-let-go" }
    ],
    tags: ["Unity3D", "Inkscape"]
  },
  {
    title: "Crowd Conquer",
    image: "/crowd-conquer.png",
    team: ["Guilherme Graça", "André Baptista", "José Marcelino", "Miguel Duarte"],
    date: "February 2015",
    env: "Shift APPens",
    description: "Crowd Conquer was Pokemon Go before it was cool. In this game the players had to conquer chunks of the real world by physically going there with their phones. In addition they had to defend their territories and could form alliances to make it easier.",
    links: [
    ],
    tags: ["Geolocation", "Android", "MeteorJS", "Javascript"]
  },
  {
    title: "Pkill",
    image: "/pkill.jpg",
    team: ["Guilherme Graça"],
    date: "December 2014",
    env: "Ludum Dare",
    description: "Pkill is a type o shooter with awfull graphics but some interesting features.\nIt's possible to type some commands like \"walk\", \"teleport\" or \"swipe\" and even better: start planning the late game with some aliases.",
    links: [
      { name: "Website", link: "https://ggraca.github.io/pkill/" },
      { name: "Ludum Dare", link: "http://ludumdare.com/compo/ludum-dare-31/?action=preview&uid=44716" },
      { name: "GitHub", link: "https://github.com/ggraca/pkill" }
    ],
    tags: ["PixiJS", "Javascript"]
  },
  {
    title: "Splondee",
    image: "/splondee.png",
    team: ["Guilherme Graça", "Beatriz Diogo", "Mário Balça"],
    date: "May 2014",
    env: "University",
    description: "Splondee is the best drink ever! But, in order to serve it, you must find the correct pipes and mix all the right ingredients in each one of the nine levels.",
    links: [
      { name: "Website", link: "https://ggraca.github.io/splondee/" },
      { name: "GitHub", link: "https://github.com/ggraca/splondee" }
    ],
    tags: ["Javascript"]
  }
]

export default project_data
