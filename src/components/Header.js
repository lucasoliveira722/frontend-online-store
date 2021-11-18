import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <div>
        <input />
        <h2
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h2>
      </div>
    );
  }
}
