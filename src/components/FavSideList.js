import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class FavSideList extends Component {
  render() {
    const { favoriteSongs } = this.props;

    return (
      <div className="favList">
        {
          favoriteSongs.map((song) => {
            const { collectionId, trackId, trackName } = song;
            return (
              <Link
                to={ `/album/${collectionId}` }
                key={ trackId }
                className="sideLinkStyle"
                onClick={ () => this.saveUrl() }
              >
                <p className="ellipsis">{trackName}</p>
              </Link>
            );
          })
        }
      </div>
    );
  }
}

FavSideList.propTypes = {
  favoriteSongs: PropTypes.oneOfType([
    PropTypes.array,
  ]),
}.isRequired;
