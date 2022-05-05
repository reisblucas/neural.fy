import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { enableRender } from '../helpers/artist-music-global';

class PageController extends Component {
  albumOrFavPathVerifier = () => {
    const { history: { location: { pathname } } } = this.props;

    const albumPath = window.location.href.includes('/album');
    const favoritesPath = window.location.href.includes('/favorites');
    const albumCondition = pathname !== albumPath;
    const favoritesCondition = pathname !== favoritesPath;
    return (albumCondition && favoritesCondition);
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
        <button
          type="button"
          className="control cpb"
          onClick={ this.previousPageButton }
        >
          <FontAwesomeIcon icon={ faAngleLeft } className="faCentralizer" />
        </button>
        <button
          type="button"
          className="control cpb"
          onClick={ this.nextPageButton }
        >
          <FontAwesomeIcon icon={ faAngleRight } className="faCentralizer" />
        </button>
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
