import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CartProduct from '../components/CartProduct';

export default class Cart extends Component {
  render() {
    const { productsCart, totalSum } = this.props;

    return (
      <div>
        <h1 data-testid="shopping-cart-empty-message">
          Seu carrinho está vazio
        </h1>
        <h3>{ totalSum }</h3>
        <h4
          data-testid="shopping-cart-product-quantity"
        >
          { `Quantidade de produtos: ${productsCart.length}` }
        </h4>
        { productsCart.map((product) => (
          <CartProduct
            key={ product.id }
            title={ product.title }
            thumbnail={ product.thumbnail }
            price={ product.price }
          />
        )) }
      </div>
    );
  }
}

Cart.propTypes = {
  productsCart: PropTypes.instanceOf(Array).isRequired,
  totalSum: PropTypes.number.isRequired,
};
