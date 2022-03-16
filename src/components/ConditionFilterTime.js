import PropTypes from 'prop-types';
import { faSortDown, faSortUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';

export default class ConditionFilterTime extends Component {
  render() {
    const { filterTime } = this.props;

    return (
      <>
        {
          filterTime === 'a-z'
          && (
            <FontAwesomeIcon
              icon={ faSortDown }
              className="faCentralizerFilter"
            />
          )
        }

        {
          filterTime === 'z-a'
          && (
            <FontAwesomeIcon icon={ faSortUp } className="faCentralizerFilter" />
          )
        }
      </>
    );
  }
}

ConditionFilterTime.propTypes = {
  filterTime: PropTypes.string,
}.isRequired;
