import React from 'react';
import './Header.css';

const Header = () =>
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
          Currently living in <a href="https://www.google.co.uk/maps/place/Newcastle+upon+Tyne/" target="_blank" rel="noopener noreferrer">Newcastle Upon Tyne</a> while pursuing a career in the games industry. I'm very interested in creating epic visual scenes and making AI agents feel smarter.
        </p>

        <p>
          In the past I worked  at <a href="https://www.whitesmith.co/" target="_blank" rel="noopener noreferrer">Whitesmith</a> as a web developer using mostly <a href="https://rubyonrails.org/" target="_blank" rel="noopener noreferrer">Ruby on Rails</a> and <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">React</a>. During this time I also had the opportunity to try different technologies like blockchain, VR/AR and 3D printing and also do a bit of system administration.
        </p>

        <p>
          On my free time I enjoy watching movies, play board/video games and learn about craft beer. I'm also into electronics and I like to help organize events for the local dev community.
        </p>

        <p>
          You can find me on <a href="https://github.com/ggraca" target="_blank" rel="noopener noreferrer">Github</a> and <a href="https://www.linkedin.com/in/ggraca/" target="_blank" rel="noopener noreferrer">LinkedIn</a>.
        </p>
      </div>
    </div>
  </header>

export default Header
