import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class Header extends Component {
  render() {
    const {
      renderCards,
      handleChange,
      name,
    } = this.props;

    return (
      <div className="header">
        <div className="inputClass">
          <input
            type="text"
            name="name"
            // value={ name }
            data-testid="query-input"
            onChange={ (event) => handleChange(event) }
          />
          <button
            type="button"
            data-testid="query-button"
            onClick={ () => renderCards(name) }
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
  handleChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};
