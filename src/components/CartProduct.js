import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CartProduct extends Component {
  render() {
    const {
      title,
      price,
      thumbnail,
      addOrRemoveCart,
      id,
      productsCart,
    } = this.props;
    return (
      <div>
        <h3 data-testid="shopping-cart-product-name">{ title }</h3>
        <div data-testid="shopping-cart-product-quantity">
          { productsCart.find((obj) => obj.id === id).qtd }
        </div>
        <img src={ thumbnail } alt={ title } />
        <span>{ price }</span>
        <button
          name="soma"
          data-testid="product-increase-quantity"
          type="button"
          onClick={ (event) => addOrRemoveCart(id, price, event) }
        >
          +
        </button>
        <button
          name="subtrai"
          data-testid="product-decrease-quantity"
          type="button"
          onClick={ (event) => addOrRemoveCart(id, price, event) }
        >
          -
        </button>
      </div>
    );
  }
}

CartProduct.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  thumbnail: PropTypes.string.isRequired,
  addOrRemoveCart: PropTypes.func.isRequired,
  productsCart: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};
