import React from 'react';
import './Header.css';
import { BrowserRouter as Link } from 'react-router-dom';

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
            <Link to="/">Home</Link>
          </li>
          <li className="smoothscroll">
            <Link to="/rsvp">RSVP</Link>
          </li>
          <li className="smoothscroll">
            <Link to="/ourstory">Our Story</Link>
          </li>

          <li className="smoothscroll">
            <Link to="/lodging">Lodging</Link>
          </li>
          <li className="smoothscroll">
            <Link to="/thingstodo">Things To Do</Link>
          </li>
          <li className="smoothscroll">
            <Link to="/weddingparty">Wedding Party</Link>
          </li>
          <li className="smoothscroll">
            <Link to="/questions">Q + A</Link>
          </li>
          <li className="smoothscroll">
            <Link to="/registry">Registry</Link>
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
