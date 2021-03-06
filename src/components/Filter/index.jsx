import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import styles from './Filter.module.css';

class Filter extends Component {
  filterId = uuidv4();
  render() {
    const { filter, onChange } = this.props;

    return (
      <div className={styles.Filter}>
        <label htmlFor={this.filterId}>
          Find contacts by name{' '}
        </label>
        <input
          type="text"
          value={filter}
          id={this.filterId}
          onChange={onChange}
          placeholder="Type name contact"
        />
      </div>
    );
  }
}

Filter.defaultProps = {
  filter: '',
};

Filter.propTypes = {
  filter: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
export default Filter;