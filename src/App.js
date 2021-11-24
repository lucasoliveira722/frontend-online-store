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
    this.addOrRemoveCart = this.addOrRemoveCart.bind(this);
  }

  addOrRemoveCart(id, price, event) {
    const { productsCart } = this.state;
    const {
      target: { name },
    } = event;

    const newArray = productsCart.map((product) => {
      if (product.id === id && name === 'soma') {
        product.qtd += 1;
      } else if (product.id === id && name === 'subtrai') {
        product.qtd -= 1;
      }
      return product;
    });

    if (name === 'soma') {
      this.setState((state) => ({
        totalSum: state.totalSum + price,
        // qtdProducts: state.qtdProducts + 1,
        // productsCart: state.productsCart[i].qtd + 1,
        productsCart: newArray,
      }));
    } else if (name === 'subtrai') {
      this.setState((state) => ({
        totalSum: (state.totalSum < 0) ? 0 : state.totalSum - price,
        // qtdProducts: (state.qtdProducts < 0) ? 0 : state.qtdProducts - 1,
        // productsCart: productsCart[i].qtd - 1,
        productsCart: newArray,
      }));
    }
  }

  sendToCart(id, price, thumbnail, title) {
    const newProduct = {
      id,
      price,
      thumbnail,
      title,
      qtd: 1,
    };

    this.setState((state) => ({
      productsCart: [...state.productsCart, newProduct],
      totalSum: state.totalSum + price,
      // qtdProducts: state.qtdProducts + 1,
    }));
  }

  render() {
    const { productsCart, totalSum, qtdProducts } = this.state;

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
                qtdProducts={ qtdProducts }
                addOrRemoveCart={ this.addOrRemoveCart }
                { ...props }
              />
            ) }
          />
          <Route
            exact
            path="/"
            render={ (props) => <Home sendToCart={ this.sendToCart } { ...props } /> }
          />
          <Route
            path="/product/:id"
            render={ (props) => (
              <Details sendToCart={ this.sendToCart } { ...props } />
            ) }
          />
        </Switch>
      </BrowserRouter>
    );
  }
}
