import React, { Component } from 'react';
import Card from './Card';

export default class Main extends Component {
  render() {
    const { card } = this.props;
    return (
      <main>
        {
          card.map((item) => (
            <Card
              title={ item.name }
              thumbnail={ item.thumbnail }
              price={ item.price }
            />
          ))
        }
      </main>
    );
  }
}
