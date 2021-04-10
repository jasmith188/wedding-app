import React, { useEffect, useState } from 'react';
import './Header.css';

const Header = () => {
  const calculateTimeLeft = () => {
    let year = new Date().getFullYear();
    const difference = +new Date(`${year}-11-6`) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        "": Math.floor(difference / (1000 * 60 * 60 * 24)),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span>
        {timeLeft[interval]} {interval}{' '}
      </span>
    );
  });

  return (
    <header id="home">
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
            <a className="smoothscroll" href="#ourStory">
              Our Story
            </a>
          </li>
          {/* <li>
            <a className="smoothscroll" href="#resume">
              Resume
            </a>
          </li> */}
          <li>
            <a className="smoothscroll" href="#lodging">
              Lodging Accomodations
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#testimonials">
              Things to Do
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#contact">
              Wedding Party
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#contact">
              Q + A
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#contact">
              Registry
            </a>
          </li>
        </ul>
      </nav>

      <div className="row banner">
        <div className="banner-text">
         
        </div>
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
