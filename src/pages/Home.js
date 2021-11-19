import React, { Component } from 'react';
import Header from '../components/Header';
import * as api from '../services/api';
import Aside from '../components/Aside';
import Main from '../components/Main';
import { getProductsFromCategoryAndQuery } from '../services/api';

export default class Home extends Component {
  constructor() {
    super();

    this.state = {
      cardProduct: [],
    }

    this.renderCards = this.renderCards.bind(this);
  }

  // componentDidMount() {
  //   this.renderCards();
  // }

  async renderCards(query) {
    const getProducts = await getProductsFromCategoryAndQuery(query);

    this.setState({
      cardProduct: getProducts,
    });
  }

  render() {
    const { cardProduct } = this.state;
    return (
      <div>
        <div>
          {console.log(api.getCategories())}
          {console.log(api.getProductsFromCategoryAndQuery())}
          <Header
            renderCards={ this.renderCards }
          />
          <Aside />
          <Main
            card={ cardProduct }
          />
        </div>
      </div>
    );
  }
}
