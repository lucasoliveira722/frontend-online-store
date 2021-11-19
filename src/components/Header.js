import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class Header extends Component {
  render() {
    const { renderCards } = this.props;

    return (
      <div>
        <div>
          <input
            data-testid="query-input"
          />
          <button
            type="button"
            data-testid="query-button"
            onClick={ () => renderCards('agro') }
          >
            Pesquisar
          </button>
        </div>
        <h2
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h2>

        <Link data-testid="shopping-cart-button" to="/cart">Carrinho</Link>
      </div>
    );
  }
}

Header.propTypes = {
  renderCards: PropTypes.func.isRequired,
};
