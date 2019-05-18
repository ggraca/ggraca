import React from 'react';
import '../stylesheets/Intro.css';

const Intro = () =>
  <header>
    <div className="container-small">
      <div className="profile-card">
        <img src="/profilepic.jpeg" alt="" className="profile-picture" />
        <h2 className="title">Guilherme Graça</h2>
      </div>

      <div className="about">
        <p>
          I'm a Portuguese developer who loves creating games and web apps.
        </p>

        <p>
          I'm currently living in the United Kingdom and working at <a href="https://coatsink.com/" target="_blank" rel="noopener noreferrer">Coatsink</a>,
          a virtual reality independent game studio,
          while finishing my MSc from <a href="https://www.ncl.ac.uk/" target="_blank" rel="noopener noreferrer">Newcaslte University</a>.
        </p>

        <p>
          In the past I worked at <a href="https://www.whitesmith.co/" target="_blank" rel="noopener noreferrer">Whitesmith</a> as a web developer using mostly <a href="https://rubyonrails.org/" target="_blank" rel="noopener noreferrer">Ruby on Rails</a> and <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">React</a>.
          During this time I also had the chance to try different technologies like blockchain, VR/AR and 3D printing.
        </p>

        <p>
          I use <a href="https://www.archlinux.org/" target="_blank" rel="noopener noreferrer">Arch Linux</a> as my personal operating system (check my 'rice' <a href="https://github.com/ggraca/configs" target="_blank" rel="noopener noreferrer">here</a>) and have experience with system administration, continuous integration and deployment.
        </p>

        <p>
          On my free time I consume movies, books and craft beer. I also like to experiment with electronic stuff and help organizing events for the local dev community.
        </p>

        <p>
          You can find me on <a href="https://github.com/ggraca" target="_blank" rel="noopener noreferrer">Github</a> and <a href="https://www.linkedin.com/in/ggraca/" target="_blank" rel="noopener noreferrer">LinkedIn</a>.
        </p>
      </div>
    </div>
  </header>

export default Intro
