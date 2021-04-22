import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header-fixed">
      <nav id="nav-wrap">
        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
          Show navigation
        </a>
        <a className="mobile-btn" href="#home" title="Hide navigation">
          Hide navigation
        </a>

        <ul id="nav" className="nav">
          <li className="current">
            <a className="smoothscroll" href="#home">
              Home
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#rsvp">
              RSVP
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#ourStory">
              Our Story
            </a>
          </li>
          
          <li>
            <a className="smoothscroll" href="#lodging">
              Lodging Accomodations
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#thingsToDo">
              Things to Do
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#wedding">
              Wedding Party
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#questions">
              Q + A
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#registry">
              Registry
            </a>
          </li>
        </ul>
      </nav>

      <div className="row banner">
        <div className="banner-text"></div>
      </div>

      <p className="scrolldown">
        <a className="smoothscroll" href="#about">
          <i className="icon-down-circle"></i>
        </a>
      </p>
    </header>
  );
};

export default Header;
