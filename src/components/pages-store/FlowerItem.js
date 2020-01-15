import React from 'react';
import PropTypes from 'prop-types';
import { useDrag } from 'react-dnd';
import { ITEM_TYPES, MAX_QUANTITY, MIN_QUANTITY } from '../CONSTANTS';
import './FlowerItem.scss';

/**
 * TODO:
 */
const fillOptionValues = () => {
  const options = [];
  for (let index = MIN_QUANTITY; index <= MAX_QUANTITY; index++) {
    options.push(
      <option value={index} key={index}>
        {index}
      </option>,
    );
  }
  return options;
};

const FlowerItem = ({ img_url, name, price, quantity, index, updateQuantity }) => {
  const [{ is_dragging }, drag_ref] = useDrag({
    item: {
      type: ITEM_TYPES.FLOWER,
      quantity,
      price,
    },
    collect: monitor => ({
      is_dragging: !!monitor.isDragging(),
    }),
  });

  return (
    <div className="flower-item">
      <img
        className="flower-item-image"
        src={img_url}
        alt={name}
        ref={drag_ref}
        style={{ opacity: is_dragging ? 0.5 : 1 }}
      />
      <p className="flower-item-name">{name}</p>
      <p className="flower-item-price">{`$${price}.00`}</p>
      <select
        className="flower-item-quantity"
        value={quantity}
        onChange={event => updateQuantity(event.target.value, index)}
      >
        {fillOptionValues()}
      </select>
    </div>
  );
};

FlowerItem.propTypes = {
  img_url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number,
  quantity: PropTypes.number,
  index: PropTypes.number.isRequired,
  updateQuantity: PropTypes.func.isRequired,
};

FlowerItem.defaultProps = {
  price: 10,
  quantity: 1,
};

export default FlowerItem;
