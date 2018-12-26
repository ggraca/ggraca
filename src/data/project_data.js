let project_data = [
  {
    title: "Game Tech Coursework",
    image: "/gametech-coursework.jpg",
    team: ["Guilherme Graça"],
    date: "December 2018",
    env: "University",
    description: "This coursework allowed me to experiment with some low level game tech, other than graphics.\nThese were some of the topics taught: Collision Phases, Collision Resolution with different shapes, Pathfinding, State Machines and Networking ",
    links: [
      {name: "Youtube", link: "https://www.youtube.com/watch?v=tb4ZXrDDDWU"}
    ],
    tags: ["Physics", "AI", "Networking", "C++"]
  },
  {
    title: "Sacrifitem",
    image: "/sacrifitem.png",
    team: ["Guilherme Graça", "Angelos Tsolakis", "Berkem Cinar", "Vassia Vasiladioti"],
    date: "December 2018",
    env: "Ludum Dare",
    description: "Inspired by some card games, Sacrifitem is a local-multiplayer item based fighting game.\nThe main mechanic revolves around choosing what items to sacrifice and what items to play.",
    links: [
      {name: "Website", link: "https://ggraca.github.io/sacrifitem/"},
      {name: "Itch.io", link: "https://ggraca.itch.io/sacrifitem"},
      {name: "Ludum Dare", link: "https://ldjam.com/events/ludum-dare/43/sacrifitem"},
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
      {name: "Youtube", link: "https://www.youtube.com/watch?v=plCn6zL45Wc"}
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
    tags: ["Unity3D", "Solidity", "NodeJS", "Voxel Art"]
  },
  {
    title: "TCPanic",
    image: "/tcpanic.png",
    team: ["Guilherme Graça", "Alexandre Jesus", "João Marques"],
    date: "January 2018",
    env: "Global Game Jam",
    description: "TCPanic is a platform game about sending tcp packages and acknowledging their return over some tron looking levels.",
    links: [
      {name: "Website", link: "https://ggraca.github.io/tcpanic/"},
      {name: "Itch.io", link: "https://ggraca.itch.io/tcpanic"},
      {name: "Global Game Jam", link: "https://globalgamejam.org/2018/games/tcpanic"}
    ],
    tags: ["Unity3D", "Post Processing Effects"]
  },
  {
    title: "Pixel Sims",
    image: "/pixelsims.png",
    team: ["Guilherme Graça", "Diogo Bastos"],
    date: "October 2017",
    env: "Pixels Camp",
    description: "An hackathon simulator with pixelated graphics",
    links: [
      {name: "Website", link: "https://ggraca.github.io/pixels-sims/"}
    ],
    tags: ["PixiJS", "AI", "Javascript"]
  },
  {
    title: "Chelas VR",
    team: ["Guilherme Graça", "Diogo Bastos", "Pedro Costa", "Renato Leão"],
    date: "February 2017",
    env: "Shift APPens",
    description: "We created and endless game in VR using a real (and old) treadmill.\nThe objective of the game was inspired by a moment in a student's festival in my hometown: push a stolen shopping cart around the city, avoid the traffic and don't let the police get you. All of this without getting low on beer.\nWe got a lot of people wanting to try it and achieved first place!",
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
      //{name: "Website", link: "https://boardlink.herokuapp.com"}
    ],
    tags: ["Ruby on Rails", "ReactJS", "Javascript"]
  },
  {
    title: "BIDI",
    team: ["Guilherme Graça", "André Baptista", "Rui Casaleiro"],
    date: "April 2016",
    env: "Techathon",
    description: "An invisible drum kit for wearables prototyped using bitalino and a buch of different sensors.\nAfter our application had been rejected we insisted and got in. Only to win the first place and a trip to Amsterdam thanks to an awesome live performance by André and a great pitch by Rui!",
    tags: ["Electronics", "Wearables"]
  },
  {
    title: "Grab and let Go",
    image: "/grabnletgo.png",
    team: ["Guilherme Graça"],
    date: "January 2016",
    env: "Ludum Dare",
    description: "A rhythm game about catching crates and then stacking them using only one key.",
    links: [
      {name: "Website", link: "https://ggraca.github.io/grab-n-let-go/"},
      {name: "Itch.io", link: "https://ggraca.itch.io/grab-n-let-go"},
      {name: "Ludum Dare", link: "http://ludumdare.com/compo/ludum-dare-34/?action=preview&uid=44716"}
    ],
    tags: ["Unity3D", "Inkscape"]
  },
  {
    title: "Pkill",
    image: "/pkill.jpg",
    team: ["Guilherme Graça"],
    date: "December 2014",
    env: "Ludum Dare",
    description: "Pkill is a type o shooter with awfull graphics but some interesting features.\nIt's possible to type some commands like \"walk\", \"teleport\" or \"swipe\" and even better: start planning the late game with some aliases.",
    links: [
      {name: "Website", link: "https://ggraca.github.io/pkill/"},
      {name: "Ludum Dare", link: "http://ludumdare.com/compo/ludum-dare-31/?action=preview&uid=44716"}
    ],
    tags: ["PixiJS", "Javascript"]
  },
  {
    title: "Splondee",
    image: "/splondee.png",
    team: ["Guilherme Graça", "Beatriz Diogo", "Mario Balça"],
    date: "May 2014",
    env: "University",
    description: "Splondee is the best drink ever! But, in order to serve it, you must find the correct pipes and mix all the right ingredients in each one of the nine levels.",
    links: [
      {name: "Website", link: "https://ggraca.github.io/splondee/"}
    ],
    tags: ["Javascript"]
  }
]

export default project_data
