import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AlbumHeaderDetails from './AlbumHeaderDetails';

export default class AlbumHeader extends Component {
  render() {
    const { album: { collectionName, artworkUrl100 } } = this.props;

    return (
      <section
        className="patternPages albumHeader gradHeader"
        data-testid="page-album"
      >
        <h1 className="titlePage" hidden>Album page</h1>
        <div className="contentAlbum">
          <div className="albumTitle">
            <div className="albumImage">
              <img src={ artworkUrl100 } alt="" />
            </div>
            <div className="albumDetails">
              <h6 className="albumTitleFixed">ALBUM</h6>
              <h1
                className="albumName albumTitleFixed"
                data-testid="album-name"
                hidden
              >
                {`Collection Name ${collectionName}`}
              </h1>

              <h2
                className="albumName albumTitleFixed"
              >
                {collectionName}
              </h2>
              <AlbumHeaderDetails { ...this.props } />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

AlbumHeader.propTypes = {
  album: PropTypes.oneOfType([
    PropTypes.array,
  ]),
}.isRequired;
