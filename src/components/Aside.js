import React, { Component } from 'react';
import { getCategories } from '../services/api';
import InputCategories from './InputCategories';

export default class Aside extends Component {
  constructor() {
    super();

    this.state = {
      arrayCategory: [],
    };

    this.receiveCategories = this.receiveCategories.bind(this);
  }

  componentDidMount() {
    this.receiveCategories();
  }

  async receiveCategories() {
    const receive = await getCategories();

    this.setState({
      arrayCategory: receive,
    });
  }

  render() {
    const { arrayCategory } = this.state;
    return (
      <aside>
        {
          arrayCategory.map((category) => (
            <InputCategories
              key={ category.id }
              categoryName={ category.name }
            />
          ))
        }
      </aside>
    );
  }
}
