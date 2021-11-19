import React, { Component } from 'react';
import Header from '../components/Header';
import Aside from '../components/Aside';
import Main from '../components/Main';
import { getProductsFromCategoryAndQuery } from '../services/api';

export default class Home extends Component {
  constructor() {
    super();

    this.state = {
      cardProduct: [],
      name: '',
    };

    this.renderCards = this.renderCards.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    // const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
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

    return (
      <div className="container">
        <Header
          name={ name }
          handleChange={ this.handleChange }
          renderCards={ this.renderCards }
        />
        <Aside />
        <Main
          card={ cardProduct }
        />
      </div>
    );
  }
}
