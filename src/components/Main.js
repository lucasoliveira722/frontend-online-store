import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

export default class Main extends Component {
  render() {
    const { card } = this.props;

    return (
      <main>
        {
          card.map((item) => (
            <Card
              key={ item.id }
              title={ item.title }
              thumbnail={ item.thumbnail }
              price={ item.price }
              id={ item.id }
            />
          ))
        }
      </main>
    );
  }
}

Main.propTypes = {
  card: PropTypes.instanceOf(Array).isRequired,
};
