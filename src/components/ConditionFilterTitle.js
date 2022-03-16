import PropTypes from 'prop-types';
import { faSortDown, faSortUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';

export default class ConditionFilterTitle extends Component {
  render() {
    const { filterTitle } = this.props;
    return (

      <div>
        {
          filterTitle === 'a-z'
          && (
            <FontAwesomeIcon
              icon={ faSortDown }
              className="faCentralizerFilter"
            />
          )
        }

        {
          filterTitle === 'z-a'
          && (
            <FontAwesomeIcon icon={ faSortUp } className="faCentralizerFilter" />
          )
        }
      </div>
    );
  }
}

ConditionFilterTitle.propTypes = {
  filterTitle: PropTypes.string,
}.isRequired;
