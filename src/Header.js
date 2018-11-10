import React from 'react';
import Image from './profilepic.jpeg'

const Header = () =>
  <header>
    <div className="profile-card">
      <img src={Image} alt="" className="profile-picture" />
      <h2 className="title">Guilherme Graça</h2>
    </div>

    <div id="about">
      <p>
        I'm a portuguese developer who loves creating games and web apps.
      </p>

      <p>
        Currently living in <a href="https://www.google.co.uk/maps/place/Newcastle+upon+Tyne/" target="_blank" rel="noopener noreferrer">Newcastle Upon Tyne</a> while pursuing a career in the games industry. I'm very interested in creating epic visual scenes and making AI agents feel smarter.
      </p>

      <p>
        In the past I've been working at <a href="https://www.whitesmith.co/" target="_blank" rel="noopener noreferrer">Whitesmith</a> developing for the web using <a href="https://rubyonrails.org/" target="_blank" rel="noopener noreferrer">Ruby on Rails</a> and <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">React</a>. During this time I also had the oportunity to try diferent technologies like blockchain, VR/AR and 3D printing and also do a bit of system administration.
      </p>

      <p>
        On my free time I watch a lot of movies, play board/video games and learn about craft beer. I'm also into electronics/robotics and I like to help organize events for the local dev community.
      </p>

      <p>
        You can find me on <a href="https://github.com/ggraca" target="_blank" rel="noopener noreferrer">Github</a> and <a href="https://www.linkedin.com/in/ggraca/" target="_blank" rel="noopener noreferrer">LinkedIn</a>.
      </p>
    </div>
  </header>

export default Header
