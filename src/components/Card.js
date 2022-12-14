import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class Card extends Component {
  render() {
    const {
      title,
      price,
      thumbnail,
      id,
      sendToCart,
    } = this.props;

    return (
      <div data-testid="product" className="cardContainer">
        <h3>{ title }</h3>
        <img src={ thumbnail } alt={ title } />
        <span>{ price }</span>
        <Link
          data-testid="product-detail-link"
          to={
            { pathname: `/product/${id}`, state: id }
          }
        >
          Detalhes
        </Link>
        <input
          type="button"
          data-testid="product-add-to-cart"
          value="Adicionar ao carrinho"
          onClick={ () => sendToCart(id, price, thumbnail, title) }
        />
      </div>
    );
  }
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  thumbnail: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  sendToCart: PropTypes.func.isRequired,
};
