import React, { Component } from 'react';
import * as api from './services/api';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Tela inicial</h1>
        {console.log(api.getCategories())}
        {console.log(api.getProductsFromCategoryAndQuery())}
      </div>
    );
  }
}
