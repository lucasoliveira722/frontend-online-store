import React, { Component } from 'react';
import Header from '../components/Header';
import * as api from '../services/api';

export default class Home extends Component {
  render() {
    return (
      <div>
        <div>
          {console.log(api.getCategories())}
          {console.log(api.getProductsFromCategoryAndQuery())}
          <Header />
        </div>
      </div>
    );
  }
}
