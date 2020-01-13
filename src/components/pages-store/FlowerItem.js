import React from 'react';
// import PropTypes from 'prop-types';
import { useDrag } from 'react-dnd';
import { ITEM_TYPES } from '../CONSTANTS';
import './FlowerItem.scss';

const FlowerItem = () => {
  const [{ is_dragging }, drag_ref] = useDrag({
    item: { type: ITEM_TYPES.FLOWER },
    collect: monitor => ({
      is_dragging: !!monitor.isDragging(),
      item_info: monitor.getItem(),
    }),
  });

  // const { is_dragging, item_info } = monitor_return;
  // console.log(item_info);

  return (
    <div
      className="flower-item"
      ref={drag_ref}
      style={{ opacity: is_dragging ? 0.5 : 1 }}
    >
      Item
    </div>
  );
};

export default FlowerItem;
