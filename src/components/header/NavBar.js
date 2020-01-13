import React from 'react';
// import PropTypes from 'prop-types';
import { useDrop } from 'react-dnd';
import { ItemTypes } from '../App';
import './NavBar.scss';

const doSomething = () => {
  console.log('something was done');
};

const NavBar = () => {
  const [{ is_over, can_drop }, drop_ref] = useDrop({
    accept: ItemTypes.FLOWER,
    drop: () => doSomething(),
    collect: monitor => ({
      is_over: !!monitor.isOver(),
      can_drop: !!monitor.canDrop(),
    }),
  });

  return (
    <header
      className="nav-bar"
      ref={drop_ref}
      style={is_over && can_drop ? { backgroundColor: 'yellow', opacity: 0.5 } : {}}
    >
      I am a Nav Bar!
    </header>
  );
};

export default NavBar;
