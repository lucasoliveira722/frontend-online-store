import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getProductDetailsFromId } from '../services/api';

export default class Details extends Component {
  constructor() {
    super();

    this.state = {
      productDetails: [],
    };

    this.fetchDetails = this.fetchDetails.bind(this);
  }

  componentDidMount() {
    const { location: { state } } = this.props;
    // const { state } = location;
    this.fetchDetails(state);
    // console.log(state);
  }

  async fetchDetails(id) { // ALTERAR O NOME DO OBJETO
    const objectDetails = await getProductDetailsFromId(id);
    this.setState({
      productDetails: objectDetails,
    });
  }

  render() {
    // console.log(this.state.productDetails);
    const { productDetails } = this.state;
    const { sendToCart } = this.props;
    return (
      <div>
        <h1 data-testid="product-detail-name">{ productDetails.title }</h1>
        <img src={ productDetails.thumbnail } alt={ productDetails.title } />
        <span>{ productDetails.price }</span>
        <div>
          <Link
            data-testid="shopping-cart-button"
            to="/cart"
          >
            Carrinho
          </Link>
          <Link
            to="/"
          >
            Home
          </Link>
        </div>
        <input
          data-testid="product-detail-add-to-cart"
          type="button"
          value="Adicionar ao carrinho"
          onClick={ () => sendToCart(productDetails.id,
            productDetails.price,
            productDetails.thumbnail,
            productDetails.title) }
        />
      </div>
    );
  }
}

Details.propTypes = {
  location: PropTypes.instanceOf(Object).isRequired,
  sendToCart: PropTypes.func.isRequired,
};
