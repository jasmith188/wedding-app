import React, { useEffect, useState } from 'react';
import './Header.css';

const Header = () => {
  const calculateTimeLeft = () => {
    let year = new Date().getFullYear();
    const difference = +new Date(`${year}-11-6`) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        '': Math.floor(difference / (1000 * 60 * 60 * 24)),
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
            <a className="smoothscroll specific" href="#about">
              Our Story
            </a>
          </li>
          {/* <li>
            <a className="smoothscroll" href="#resume">
              Resume
            </a>
          </li> */}
          <li>
            <a className="smoothscroll" href="#portfolio">
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
          <h1 className="responsive-headline">
            {/* <TypeWriter className='header__typewriter' typing={0.5}>{name ? `Hello, I'm ${name}` : null}</TypeWriter> */}
            <h1 className="header__nameTitle">Katie and Jimmy's Wedding</h1>
            {/* {timerComponents.length ? (
              timerComponents
            ) : (
              <span>Time's up!</span>
            )}{' '}
            DAYS TO GO! */}
          </h1>
          <h3>
            NOVEMBER 6, 2021 • WEAVERVILLE, NC
            {/* {description} */}
          </h3>
          <hr />
          {/* <ul className="social">
            <a href="tel:715-219-3199">Katie's Cell</a>
            <br />
            <a href="tel:704-909-8461">Jimmy's Cell</a>
          </ul> */}
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
