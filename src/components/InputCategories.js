import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class InputCategories extends Component {
  render() {
    const { categoryName, handleClick, categoryId } = this.props;
    return (
      <div>
        <label
          htmlFor={ categoryName }
          data-testid="category"
        >
          <input
            type="radio"
            name="categoryName"
            value={ categoryId }
            id={ categoryName }
            onClick={ (event) => handleClick(event) }
          />
          { categoryName }
        </label>
      </div>
    );
  }
}

InputCategories.propTypes = {
  categoryId: PropTypes.string.isRequired,
  categoryName: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};
