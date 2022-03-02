import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class FavSideList extends Component {
  componentDidMount() {
    this.saveUrl();
  }

  saveUrl = () => {
    const { match: { url } } = this.props;
    this.setState({ url }, () => this.pathVerifier());
  }

  pathVerifier = () => {
    const { match: { url: urlSideLink } } = this.props;
    const { url: urlCurrentPage } = this.state;

    if (urlCurrentPage !== urlSideLink) {
      window.location.reload();
    }
  }

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
