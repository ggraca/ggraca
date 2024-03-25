import React from 'react';
import '../stylesheets/Intro.css';

const IntroLink = ({ name, url }) => <a href={url} target="_blank" rel="noopener noreferrer">{name}</a>
const WhitesmithLink = () => <IntroLink name="Whitesmith" url="https://www.whitesmith.co/" />
const CoatsinkLink = () => <IntroLink name="Coatsink" url="https://coatsink.com/" />
const VinteriorLink = () => <IntroLink name="Vinterior" url="https://www.vinterior.co/" />
const RipplrLink = () => <IntroLink name="Ripplr" url="https://www.youtube.com/watch?v=N15qLyp5IA0&t=22s" />
const StepfulLink = () => <IntroLink name="Stepful (YC S21)" url="https://www.stepful.com/" />
const NewcastleLink = () => <IntroLink name="Newcastle University" url="https://www.ncl.ac.uk/" />
const BeltsLink = () => <IntroLink name="Belts" url="https://github.com/ggraca/belts" />
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
        <p>I am building a 3D game engine in ruby called <BeltsLink />.</p>
        <p>In the past, I worked at promising startups like <StepfulLink />, <VinteriorLink /> and <WhitesmithLink />; launched <RipplrLink /> during covid; and was in the game industry for a bit with <CoatsinkLink /> after graduating from <NewcastleLink /> with a MSc in Computer Games Engineering.</p>
        <p>I use <ArchLink /> and keep my configs public <ArchConfigsLink />.</p>
        <p>You can find me on <GithubLink /> and <LinkedinLink />.</p>
      </div>
    </div>
  </header >

export default Intro
