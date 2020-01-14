import React from 'react';
// import PropTypes from 'prop-types';
// import { useDrop } from 'react-dnd';
import { Cart, NavLinks } from '..';
// import { ITEM_TYPES } from '../CONSTANTS';
import './NavBar.scss';

// const doSomething = () => {
//   console.log('something was done');
// };

const NavBar = () => {
  return (
    <header className="nav-bar">
      <NavLinks />
      <Cart />
    </header>
  );
};

export default NavBar;

/*
const [{ is_over, can_drop }, drop_ref] = useDrop({
    accept: ITEM_TYPES.FLOWER,
    drop: () => doSomething(),
    collect: monitor => ({
      is_over: !!monitor.isOver(),
      can_drop: !!monitor.canDrop(),
    }),
  });

<header
      className="nav-bar"
      ref={drop_ref}
      style={is_over && can_drop ? { backgroundColor: 'yellow', opacity: 0.5 } : {}}
    >
      <p>I am a Nav Bar!</p>
      <Cart />
    </header>
*/
