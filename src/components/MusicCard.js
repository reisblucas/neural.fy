import { faHeart, faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

class MusicCard extends Component {
  convertMillsToMin(ms) {
    const THOUSAND = 1000;
    const SIXTY = 60;

    const minutes = ((ms / THOUSAND) / SIXTY);
    const minutesHouse = Math.trunc(minutes);
    return minutesHouse;
  }

  convertMillsToSeconds(ms) {
    const THOUSAND = 1000;
    const SIXTY = 60;

    const seconds = ((ms / THOUSAND) % SIXTY);
    const secondsHouse = Math.round(seconds);

    const TEN = 10;
    if (secondsHouse < TEN) {
      const verifier = [0, secondsHouse];
      return verifier.join('');
    }
    return secondsHouse;
  }

  render() {
    const {
      albumTracks,
      handleCheck,
      checkedAndFavorite,
    } = this.props;

    return (
      <div className="listMusic">
        {
          albumTracks.map((artist) => {
            const {
              // artistId,
              artistName,
              // artworkUrl30,
              // artworkUrl60,
              // artworkUrl100,
              // collectionCensoredName,
              // collectionExplicitness,
              // collectionId,
              previewUrl,
              trackId,
              trackName,
              trackNumber,
              trackTimeMillis,
            } = artist;
            const minutes = this.convertMillsToMin(trackTimeMillis);
            const seconds = this.convertMillsToSeconds(trackTimeMillis);

            return (

              <div key={ trackId } className="musicRow">
                <div className="divTrackNumber">
                  <p className="trackNumber">{ trackNumber }</p>
                  <FontAwesomeIcon icon={ faPlay } className="trackPlayIcon" />
                </div>

                <div className="musicAndArtist">
                  <div className="divToEllipsis">
                    <p className="ellipsis">{ trackName }</p>
                    <p>{ artistName }</p>
                  </div>
                </div>

                <div className="previewMusic">
                  <audio data-testid="audio-component" src={ previewUrl } controls>
                    <track kind="captions" />
                    O seu navegador não suporta o elemento
                    {' '}
                    <code>audio</code>
                    .
                  </audio>
                </div>

                {
                  checkedAndFavorite.includes(trackId)
                    ? (
                      <label htmlFor={ trackId } className="previewFavorite">
                        <FontAwesomeIcon icon={ faHeart } className="heartColor" />
                        <input
                          type="checkbox"
                          name=""
                          id={ trackId }
                          data-testid={ `checkbox-music-${trackId}` }
                          onChange={ () => {
                            handleCheck(artist, trackId);
                          } }
                          // checked={
                          //   checked.includes(trackId) || favoriteSongs.includes(trackId)
                          // } // requisito 8 só passou dessa forma
                          checked={ checkedAndFavorite.includes(trackId) }
                          hidden
                        />
                      </label>
                    )
                    : (
                      <label htmlFor={ trackId } className="previewFavorite">
                        <FontAwesomeIcon icon={ faHeart } />
                        <input
                          type="checkbox"
                          name=""
                          id={ trackId }
                          data-testid={ `checkbox-music-${trackId}` }
                          onChange={ () => {
                            handleCheck(artist, trackId);
                          } }
                          // checked={
                          //   checked.includes(trackId) || favoriteSongs.includes(trackId)
                          // } // requisito 8 só passou dessa forma
                          checked={ checkedAndFavorite.includes(trackId) }
                          hidden
                        />
                      </label>
                    )
                }

                <div className="musicDuration">
                  <p>{ `${minutes}:${seconds}` }</p>
                </div>
              </div>
            );
          })
        }
      </div>
    );
  }
}

MusicCard.propTypes = {
  albumTracks: PropTypes.oneOfType([PropTypes.array]).isRequired,
  checkedAndFavorite: PropTypes.oneOfType([
    PropTypes.array,
  ]).isRequired,
  handleCheck: PropTypes.func.isRequired,
};

export default MusicCard;
