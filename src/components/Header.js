import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <div>
        <input />
        <h2
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h2>
        {/* <button
          type="button"
          data-testid="shopping-cart-button"
        >
          Carrinho
        </button> */}
        <Link data-testid="shopping-cart-button" to="/cart">Carrinho</Link>
      </div>
    );
  }
}
