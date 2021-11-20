import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Cart from './pages/Cart';
import Details from './pages/Details';
import Home from './pages/Home';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/cart" component={ Cart } />
          <Route exact path="/" component={ Home } />
          <Route path="/product/:id" component={ Details } />
        </Switch>
      </BrowserRouter>
    );
  }
}
