import React from 'react';
import '../stylesheets/Intro.css';

const IntroLink = ({name, url}) => <a href={url} target="_blank" rel="noopener noreferrer">{name}</a>
const RipplrLink = () => <IntroLink name="Ripplr" url="https://www.youtube.com/watch?v=N15qLyp5IA0&t=22s" />
const VinteriorLink = () => <IntroLink name="Vinterior" url="https://www.vinterior.co/" />
const WhitesmithLink = () => <IntroLink name="Whitesmith" url="https://www.whitesmith.co/" />
const CoatsinkLink = () => <IntroLink name="Coatsink" url="https://coatsink.com/" />
const NewcastleLink = () => <IntroLink name="Newcastle University" url="https://www.ncl.ac.uk/" />
const ArchLink = () => <IntroLink name="Arch Linux" url="https://www.archlinux.org/" />
const ArchConfigsLink = () => <IntroLink name="here" url="https://github.com/ggraca/configs" />
const GithubLink = () => <IntroLink name="Github" url="https://github.com/ggraca/" />
const LinkedinLink = () => <IntroLink name="LinkedIn" url="https://www.linkedin.com/in/ggraca/" />

const Intro = () =>
  <header>
    <div className="container-small">
      <div className="profile-card">
        <img src="/profilepic.jpeg" alt="" className="profile-picture" />
        <h2 className="title">Guilherme Graça</h2>
      </div>

      <div className="about">
        <p>Hello! I'm a Portuguese software engineer with over 10 years coding experience.</p>
        <p>I currently live in London while working at <VinteriorLink />, a vintage furniture marketplace startup.</p>
        <p>In the past, I worked at <WhitesmithLink /> and <CoatsinkLink />; launched a business during covid, <RipplrLink />; and graduated from <NewcastleLink /> with a MSc in Computer Games Engineering.</p>
        <p>
          During my free time, I love travelling, watching movies and trying craft beer.
          I use <ArchLink /> as my personal operating system (you can check my configs <ArchConfigsLink />).
          I also like to experiment with new technologies and gadgets and help organizing events for the local dev community.
        </p>

        <p>You can find me on <GithubLink /> and <LinkedinLink />.</p>
      </div>
    </div>
  </header>

export default Intro
