import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Cart from './pages/Cart';
import Details from './pages/Details';
import Home from './pages/Home';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      productsCart: [],
      totalSum: 0,
    };

    this.sendToCart = this.sendToCart.bind(this);
  }

  sendToCart(id, price, thumbnail, title) {
    const newProduct = {
      id,
      price,
      thumbnail,
      title,
    };

    this.setState((state) => ({
      productsCart: [...state.productsCart, newProduct],
      totalSum: state.totalSum + price,
    }));
  }

  render() {
    const { productsCart, totalSum } = this.state;

    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/cart"
            render={ (props) => (
              <Cart
                productsCart={ productsCart }
                totalSum={ totalSum }
                { ...props }
              />
            ) }
          />
          <Route
            exact
            path="/"
            render={ (props) => (
              <Home
                sendToCart={ this.sendToCart }
                { ...props }
              />
            ) }
          />
          <Route
            path="/product/:id"
            render={ (props) => (
              <Details
                sendToCart={ this.sendToCart }
                { ...props }
              />
            ) }
          />
        </Switch>
      </BrowserRouter>
    );
  }
}
