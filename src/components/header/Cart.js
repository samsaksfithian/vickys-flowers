import React from 'react';
import PropTypes from 'prop-types';
import { useDrop } from 'react-dnd';
import { ITEM_TYPES } from '../CONSTANTS';
import './Cart.scss';

const Cart = ({ total_cost, quantity, addItem }) => {
  const [{ is_over }, drop_ref] = useDrop({
    accept: ITEM_TYPES.FLOWER,
    drop: item => addItem(item),
    collect: monitor => ({
      is_over: !!monitor.isOver(),
    }),
  });

  let fontSize = '16px';
  if (quantity > 99) {
    fontSize = '12px';
  } else if (quantity > 9) {
    fontSize = '14px';
  }

  return (
    <div
      className="cart-block"
      ref={drop_ref}
      style={is_over ? { border: '1px dashed hotpink' } : {}}
    >
      <span className="cart-text">{`TOTAL AMOUNT: $${total_cost}.00`}</span>
      <span className="cart-spacer">|</span>
      <span className="cart-icon">
        {/* TODO: figure out when to decrease icon size */}
        <img className="cart-icon-img" src="/assets/cart@3x.png" alt="Cart" />
        <span className="cart-icon-label" style={{ fontSize }}>
          {quantity}
        </span>
      </span>
    </div>
  );
};

Cart.propTypes = {
  total_cost: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  addItem: PropTypes.func.isRequired,
};

export default Cart;
