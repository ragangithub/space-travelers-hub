import React from 'react';
import { NavLink } from 'react-router-dom';

import logo from '../../assets/logo.png';
import '../../styles/navbar.css';

const Navbar = () => (
  <>
    <nav className="navBar">
      <div className="logo_title">
        <NavLink to="/" exact>
          <img src={logo} alt="logo" className="logo" />
        </NavLink>
        <a href="#home" className="title">
          Space Travelers&apos; Hub
        </a>
      </div>
      <div className="navItems">
        <ul className="navLinks">
          <NavLink to="/" className="menu_item">
            Rockets
          </NavLink>

          <NavLink to="/mission" className="menu_item">
            Missions
          </NavLink>

          <div className="border" />
          <NavLink to="/profiles" className="menu_item">
            My Profile
          </NavLink>
        </ul>
      </div>
    </nav>
  </>
);

export default Navbar;
