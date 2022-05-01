import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { enableRender, resetSearch } from '../helpers/artist-music-global';

class PageController extends Component {
  albumOrFavPathVerifier = () => {
    const { history: { location: { pathname } } } = this.props;

    const albumPath = window.location.href.includes('/album');
    const favoritesPath = window.location.href.includes('/favorites');
    const albumCondition = pathname !== albumPath;
    const favoritesCondition = pathname !== favoritesPath;
    if (albumCondition && favoritesCondition) { return true; }
    return false;
  }

  previousPageButton = () => {
    const { history: { goBack } } = this.props;
    goBack();

    const condition = this.albumOrFavPathVerifier();
    if (condition) { enableRender(true); }
  }

  nextPageButton = () => {
    const { history: { goForward } } = this.props;
    goForward();

    const condition = this.albumOrFavPathVerifier();
    if (condition) { enableRender(true); }
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
