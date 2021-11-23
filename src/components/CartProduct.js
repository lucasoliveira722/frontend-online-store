import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CartProduct extends Component {
  render() {
    const {
      title,
      price,
      thumbnail,
    } = this.props;
    return (
      <div>
        <h3 data-testid="shopping-cart-product-name">{ title }</h3>
        <img src={ thumbnail } alt={ title } />
        <span>{ price }</span>
      </div>
    );
  }
}

CartProduct.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  thumbnail: PropTypes.string.isRequired,
};
