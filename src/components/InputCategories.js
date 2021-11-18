import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class InputCategories extends Component {
  render() {
    const { categoryName } = this.props;
    return (
      <div>
        <label
          htmlFor={ categoryName }
          data-testid="category"
        >
          <input
            type="radio"
            name="categoryName"
            value={ categoryName }
            id={ categoryName }
            // data-testid="category"
          />
          { categoryName }
        </label>
      </div>
    );
  }
}

InputCategories.propTypes = {
  categoryName: PropTypes.string.isRequired,
};
