import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../images/KandJ_KJ-black-red.png';
// import Dropdown from './Dropdown';

const Navbar = () => {
  const [click, setClick] = useState(false);
  //   const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className="navbar">
        <Link to="/" onClick={closeMobileMenu}>
          LOGO HERE
          {/* <i class="fab fa-firstdraft" /> */}
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link to="/rsvp" className="nav-links" onClick={closeMobileMenu}>
              rsvp
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/ourstory"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              our story
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/lodging" className="nav-links" onClick={closeMobileMenu}>
              lodging
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/thingstodo"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              things to do
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/weddingparty"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              wedding party
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/questions"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              q + a
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
