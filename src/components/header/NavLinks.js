import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './NavLinks.scss';

const links = {
  home: '/',
  'about us': '/about-us',
  occasions: '/occasions',
  order: '/order',
};

const NavLinks = () => {
  const [open, toggleOpen] = useState(false);
  return (
    <nav className="nav-links">
      <NavLink className="logo-link" to={links.home}>
        <img
          className="logo"
          src="/assets/vicky-logo@2x.png"
          srcSet="/assets/vicky-logo@3x.png 3x,
                /assets/vicky-logo@2x.png 2x,
                /assets/vicky-logo@1x.png 1x"
          alt="Vicky's Flowers Logo"
        />
      </NavLink>
      <button className="burger-nav-icon" type="button" onClick={() => toggleOpen(!open)}>
        &#8801;
      </button>
      <div className={`links-container ${open ? 'open' : ''}`}>
        {Object.keys(links).map(link => (
          <NavLink exact className="link-item" to={links[link]} key={link}>
            {link.toUpperCase()}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default NavLinks;
