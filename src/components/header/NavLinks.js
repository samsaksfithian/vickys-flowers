import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavLinks.scss';

const links = {
  home: '/',
  'about us': '/about',
  occasions: '/occasions',
  order: '/order',
};

// TODO: maybe change the whole contents of the nav-links div when mobile?
const NavLinks = () => (
  <div className="nav-links">
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
    {Object.keys(links).map(link => (
      <NavLink className="link-item" to={links[link]} key={link}>
        {link.toUpperCase()}
      </NavLink>
    ))}
  </div>
);

export default NavLinks;
