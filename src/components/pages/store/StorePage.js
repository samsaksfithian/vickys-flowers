import React from 'react';
import PropTypes from 'prop-types';
import { FLOWER_ITEMS } from '../../CONSTANTS';
import { FlowerItem } from '../..';
import './StorePage.scss';

const StorePage = ({ quantities, updateQuantity }) => (
  <div className="store-page">
    <h1 className="category-title">Top Products</h1>
    <p className="description">
      To add desired products to the card, simply drag a product image to the cart icon
      found at the top right of the page.
    </p>
    <section className="store-items">
      {FLOWER_ITEMS.map((item, index) => (
        <FlowerItem
          key={item.name}
          img_url={item.img_url}
          name={item.name}
          price={item.price}
          quantity={quantities[index]}
          index={index}
          updateQuantity={updateQuantity}
        />
      ))}
    </section>
  </div>
);

StorePage.propTypes = {
  quantities: PropTypes.arrayOf(PropTypes.number).isRequired,
  updateQuantity: PropTypes.func.isRequired,
};

export default StorePage;
