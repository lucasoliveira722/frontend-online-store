import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CartProduct from '../components/CartProduct';

export default class Cart extends Component {
  render() {
    const {
      productsCart,
      totalSum,
      addOrRemoveCart,
    } = this.props;

    return (
      <div>
        <h1 data-testid="shopping-cart-empty-message">
          Seu carrinho está vazio
        </h1>
        <h3>{ totalSum.toFixed(2) }</h3>
        { productsCart.map((product) => (
          <CartProduct
            key={ product.id }
            id={ product.id }
            title={ product.title }
            thumbnail={ product.thumbnail }
            price={ product.price }
            addOrRemoveCart={ addOrRemoveCart }
            productsCart={ productsCart }
          />
        )) }
      </div>
    );
  }
}

Cart.propTypes = {
  productsCart: PropTypes.instanceOf(Array).isRequired,
  totalSum: PropTypes.number.isRequired,
  addOrRemoveCart: PropTypes.func.isRequired,
};
