import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Header from '../components/Header';
import Aside from '../components/Aside';
import Main from '../components/Main';
import {
  getProductsFromCategoryAndQuery,
  getProductsFromCategory,
} from '../services/api';

export default class Home extends Component {
  constructor() {
    super();

    this.state = {
      cardProduct: [],
      name: '',
    };

    this.renderCards = this.renderCards.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  async handleClick({ target }) {
    const { value } = target;
    console.log(value);
    const getCategory = await getProductsFromCategory(value);

    this.setState({
      cardProduct: getCategory.results,
    });
  }

  async renderCards(query) {
    console.log(query);
    const getProducts = await getProductsFromCategoryAndQuery(query);

    this.setState({
      cardProduct: getProducts.results,
    });
  }

  render() {
    const {
      cardProduct,
      name,
    } = this.state;

    const { sendToCart } = this.props;

    return (
      <div className="container">
        <Header
          name={ name }
          handleChange={ this.handleChange }
          renderCards={ this.renderCards }
        />
        <Aside
          handleClick={ this.handleClick }
        />
        <Main
          card={ cardProduct }
          sendToCart={ sendToCart }
        />
      </div>
    );
  }
}

Home.propTypes = {
  sendToCart: PropTypes.func.isRequired,
};
