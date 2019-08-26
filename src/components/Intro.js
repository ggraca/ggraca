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
          I'm a Portuguese developer who loves creating websites and games.
        </p>

        <p>
          I currently live in London and work as a Full Stack Developer at <a href="https://www.vinterior.co/" target="_blank" rel="noopener noreferrer">Vinterior</a>,
          an online marketplace for vintage furniture.
        </p>

        <p>
          In the past I worked at <a href="https://www.whitesmith.co/" target="_blank" rel="noopener noreferrer">Whitesmith</a> and <a href="https://coatsink.com/" target="_blank" rel="noopener noreferrer">Coatsink</a> and I graduated from <a href="https://www.ncl.ac.uk/" target="_blank" rel="noopener noreferrer">Newcastle University</a> with a MSc in Computer Games Engineering.
        </p>

        <p>
          On my free time I consume movies, books and ale.
          I use <a href="https://www.archlinux.org/" target="_blank" rel="noopener noreferrer">Arch Linux</a> as my personal operating system (check my 'rice' <a href="https://github.com/ggraca/configs" target="_blank" rel="noopener noreferrer">here</a>).
          I also like to experiment with new technologies and gadgets and help organizing events for the local dev community.
        </p>

        <p>
          You can find me on <a href="https://github.com/ggraca" target="_blank" rel="noopener noreferrer">Github</a> and <a href="https://www.linkedin.com/in/ggraca/" target="_blank" rel="noopener noreferrer">LinkedIn</a>.
        </p>
      </div>
    </div>
  </header>

export default Intro
