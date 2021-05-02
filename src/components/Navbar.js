import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
// import Dropdown from './Dropdown';

const Navbar = () => {
  const [click, setClick] = useState(false);
  //   const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  //   const onMouseEnter = () => {
  //     if (window.innerWidth < 960) {
  //       setDropdown(false);
  //     } else {
  //       setDropdown(true);
  //     }
  //   };

  //   const onMouseLeave = () => {
  //     if (window.innerWidth < 960) {
  //       setDropdown(false);
  //     } else {
  //       setDropdown(false);
  //     }
  //   };

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          K &J
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
          <li
            className="nav-item"
            // onMouseEnter={onMouseEnter}
            // onMouseLeave={onMouseLeave}
          >
            <Link
              to="/ourstory"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              {/* <i className="fas fa-caret-down" /> */}
              our story
            </Link>
            {/* {dropdown && <Dropdown />} */}
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
