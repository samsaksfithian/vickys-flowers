import React from 'react';
// import PropTypes from 'prop-types';
import { FlowerItem } from '..';
import './StorePage.scss';

const StorePage = () => (
  <div className="store-page">
    <h1 className="category-title">Top Products</h1>
    <p className="description">
      To add desired products to the card, simply drag a product image to the cart icon
      found at the top right of the page.
    </p>
    <FlowerItem />
    <FlowerItem />
  </div>
);

export default StorePage;
