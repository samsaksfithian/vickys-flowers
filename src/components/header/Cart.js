import React from 'react';
import PropTypes from 'prop-types';
import { useDrop } from 'react-dnd';
import { ITEM_TYPES } from '../CONSTANTS';
import './Cart.scss';

const Cart = ({ total_cost, quantity, addItem }) => {
  const [{ is_over, is_dragging }, drop_ref] = useDrop({
    accept: ITEM_TYPES.FLOWER,
    drop: item => addItem(item),
    collect: monitor => ({
      is_over: !!monitor.isOver(),
      is_dragging: !!monitor.canDrop(),
    }),
  });

  let fontSize = '16px';
  if (quantity > 99) {
    fontSize = '12px';
  } else if (quantity > 9) {
    fontSize = '14px';
  }

  let highlight_style = {};
  if (is_dragging) {
    highlight_style = {
      boxShadow: '0px 0px 4px 6px #6da50a',
    };
  }
  if (is_over) {
    highlight_style = {
      boxShadow: '0px 0px 7px 10px #36ebb9',
    };
  }

  return (
    <div className="cart-block">
      <span className="cart-text">{`TOTAL AMOUNT: $${total_cost}.00`}</span>
      <span className="cart-spacer">|</span>
      <span className="cart-icon" style={highlight_style} ref={drop_ref}>
        <img
          className="cart-icon-img"
          src="/assets/cart@2x.png"
          srcSet="/assets/cart@3x.png 3x,
                  /assets/cart@2x.png 2x,
                  /assets/cart@1x.png 1x"
          alt="Cart"
        />
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
