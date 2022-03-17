import PropTypes from 'prop-types';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import ConditionFilterTime from './ConditionFilterTime';

export default class ConditionClockRender extends Component {
  render() {
    const { filterTime, path, pathFavorites, sortMusicByTime } = this.props;

    return (
      <div>
        {
          path === pathFavorites
            ? (
              <div className="filterRight">
                <div className="previewFavorite" />
                <div className="timeFilter">
                  <p
                    className="albumFilters fitLinkContent"
                    onClick={ sortMusicByTime }
                    tabIndex="-1"
                    aria-hidden="true"
                  >
                    <FontAwesomeIcon icon={ faClock } />
                    <ConditionFilterTime filterTime={ filterTime } />
                  </p>
                </div>
              </div>
            )
            : (
              <div className="filterRightAlbum">
                <div className="previewFavorite" />
                <div className="musicDurationAlbum">
                  <p
                    className="albumFilters fitLinkContent"
                    onClick={ sortMusicByTime }
                    tabIndex="-1"
                    aria-hidden="true"
                  >
                    <FontAwesomeIcon icon={ faClock } />
                    <ConditionFilterTime filterTime={ filterTime } />
                  </p>
                </div>
              </div>
            )
        }
      </div>
    );
  }
}

ConditionClockRender.propTypes = {
  filterTime: PropTypes.func,
  path: PropTypes.string,
  pathFavorites: PropTypes.string,
  sortMusicByTime: PropTypes.func,
}.isRequired;
