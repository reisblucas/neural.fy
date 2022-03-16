import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';

export default class PageController extends Component {
  render() {
    return (
      <div className="page-control">
        <div className="control">
          <FontAwesomeIcon icon={ faAngleLeft } />
        </div>
        <div className="control">
          <FontAwesomeIcon icon={ faAngleRight } />
        </div>
      </div>
    );
  }
}
