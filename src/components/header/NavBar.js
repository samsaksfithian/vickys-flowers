import React from 'react';
import PropTypes from 'prop-types';
import { Cart, NavLinks } from '..';
import './NavBar.scss';

const NavBar = ({ total_cost, quantity, addItem }) => (
  <header className="nav-bar">
    <NavLinks />
    <Cart total_cost={total_cost} quantity={quantity} addItem={addItem} />
  </header>
);

NavBar.propTypes = {
  total_cost: PropTypes.number,
  quantity: PropTypes.number,
  addItem: PropTypes.func.isRequired,
};

NavBar.defaultProps = {
  total_cost: 0,
  quantity: 0,
};

export default NavBar;
