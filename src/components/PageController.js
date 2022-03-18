import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

class PageController extends Component {
  previousPageButton = () => {
    const { history: { goBack } } = this.props;
    goBack();
  }

  nextPageButton = () => {
    const { history: { goForward } } = this.props;
    goForward();
  }

  render() {
    return (
      <div className="page-control">
        <div
          role="button"
          className="control"
          onClick={ this.previousPageButton }
          tabIndex="-1"
          onKeyUp={ () => {} }
          aria-label="controller-button-page-back"
        >
          <FontAwesomeIcon icon={ faAngleLeft } className="faCentralizer" />
        </div>
        <div
          role="button"
          className="control"
          onClick={ this.nextPageButton }
          tabIndex="-1"
          onKeyUp={ () => {} }
          aria-label="controller-button-page-forward"
        >
          <FontAwesomeIcon icon={ faAngleRight } className="faCentralizer" />
        </div>
      </div>
    );
  }
}

PageController.propTypes = {
  history: PropTypes.oneOfType([
    PropTypes.array,
  ]),
}.isRequired;

export default withRouter(PageController);
