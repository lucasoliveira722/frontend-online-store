import React, { Component } from 'react';
import { getCategories, getProductsFromCategoryAndQuery } from './services/api';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Tela inicial</h1>
        {console.log(getCategories())}
        {console.log(getProductsFromCategoryAndQuery())}
      </div>
    );
  }
}
