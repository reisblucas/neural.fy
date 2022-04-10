import PropTypes from 'prop-types';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { placeSelectedClass } from '../helpers/player';
import { convertMillsToMin, convertMillsToSeconds } from '../helpers/songTime';
import ButtonPlay from './ButtonPlay';
import { enableRenderAlbumAct } from '../actions';

class MusicMap extends Component {
  state = {
    played: false,
  }

  handlePlayIcon = ({ currentTarget }) => {
    console.log('teste');
    this.setState(({
      played: {
        status: true,
        name: currentTarget.attributes.name.value,
      },
    }));
  }

  handlePauseIcon = () => {
    this.setState({
      played: {
        status: false,
      },
    });
  }

  handleArtistNameLink = () => {
    const { enableRender } = this.props;
    enableRender(true);
  }

  render() {
    const {
      // albumTracks,
      handleCheck,
      handleReload,
      checkedAndFavorite,
      match: { path },
      // responseMusics: { tracks },
      // tracks,
      tracks,
    } = this.props;

    const { played } = this.state;

    const favoritesPath = '/favorites';

    return (
      <div>
        {
          tracks && tracks.map((artist, i) => {
            const {
              artistName,
              artworkUrl60,
              collectionName,
              collectionId,
              previewUrl,
              trackId,
              trackName,
              trackNumber,
              trackTimeMillis,
            } = artist;
            const minutes = convertMillsToMin(trackTimeMillis);
            const seconds = convertMillsToSeconds(trackTimeMillis);

            return (
              <div
                className="focusMusicRow"
                role="button"
                key={ trackId }
                tabIndex="-1"
                onClick={ (e) => placeSelectedClass(e) }
                onKeyPress={ () => {} }
                aria-hidden="true"
              >
                <div className="musicRow notFocusable">
                  <ButtonPlay
                    path={ path }
                    favoritesPath={ favoritesPath }
                    trackNumber={ trackNumber }
                    previewUrl={ previewUrl }
                    i={ i }
                    handlePlayIcon={ this.handlePlayIcon }
                    handlePauseIcon={ this.handlePauseIcon }
                    played={ played }
                  />

                  {
                    path === favoritesPath
                    && (
                      <div className="miniAlbumImage">
                        <img
                          src={ artworkUrl60 }
                          alt="mini album pic"
                          className="miniAlbumImage"
                        />
                      </div>
                    )
                  }

                  {
                    path === favoritesPath
                      ? (
                        <div className="musicAndArtist">
                          <div className="divToEllipsis">
                            <p className="musicName ellipsis">{ trackName }</p>
                            <Link
                              className="linkStyle focusableLink ellipsis"
                              key={ collectionId }
                              to={ `/album/${collectionId}` }
                              onClick={ this.handleArtistNameLink }
                            >
                              <p
                                className="artistName ellipsis fitLinkContent"
                              >
                                { artistName }

                              </p>
                              {' '}
                            </Link>
                          </div>
                        </div>
                      )
                      : (
                        <div className="musicAndArtistAlbum">
                          {/* Ellipsis fix in Album */}
                          <div className="">
                            <p className="musicName ellipsis">{ trackName }</p>
                            <Link
                              className="linkStyle focusableLink"
                              key={ collectionId }
                              to="/search"
                              onClick={ this.handleArtistNameLink }
                            >
                              <p
                                className="artistName ellipsis"
                              >
                                { artistName }

                              </p>
                            </Link>
                          </div>
                        </div>
                      )
                  }

                  {
                    path === favoritesPath
                    && (
                      <div className="albumFilter">
                        <div className="divToEllipsis">
                          <Link
                            className="linkStyle focusableLink ellipsis"
                            key={ collectionId }
                            to={ `/album/${collectionId}` }
                          >
                            <p className="artistName ellipsis">{collectionName}</p>
                          </Link>
                        </div>
                      </div>
                    )
                  }

                  <div className="filterRight">
                    {
                      checkedAndFavorite.includes(trackId)
                        ? (
                          <label htmlFor={ trackId } className="previewFavorite">
                            <FontAwesomeIcon
                              icon={ faHeart }
                              className="focusable heartColor"
                            />
                            <input
                              type="checkbox"
                              name=""
                              id={ trackId }
                              data-testid={ `checkbox-music-${trackId}` }
                              onChange={ () => {
                                handleCheck(artist, trackId);
                                handleReload();
                              } }
                              checked={ checkedAndFavorite.includes(trackId) }
                              hidden
                            />
                          </label>
                        )
                        : (
                          <label htmlFor={ trackId } className="previewFavorite">
                            <FontAwesomeIcon icon={ faHeart } className="heartIcon" />
                            <input
                              type="checkbox"
                              name=""
                              id={ trackId }
                              data-testid={ `checkbox-music-${trackId}` }
                              onChange={ () => {
                                handleCheck(artist, trackId);
                                handleReload();
                              } }
                              checked={ checkedAndFavorite.includes(trackId) }
                              hidden
                            />
                          </label>
                        )
                    }
                    <div className="musicDuration">
                      <p className="artistName font-link">{ `${minutes}:${seconds}` }</p>
                    </div>
                  </div>

                </div>
              </div>
            );
          })
        }
      </div>
    );
  }
}

MusicMap.propTypes = {
  albumTracks: PropTypes.oneOfType([PropTypes.array]),
  checkedAndFavorite: PropTypes.oneOfType([PropTypes.array]),
  handleCheck: PropTypes.func,
  path: PropTypes.string,
  enableRender: PropTypes.func,
  handleReload: PropTypes.func,
}.isRequired;

const mapStateToProps = (state) => ({
  searchAlbum: state.searchAlbum,
  responseMusics: state.responseMusics,
});

const mapDispatchToProps = (dispatch) => ({
  enableRender: (bool) => dispatch(enableRenderAlbumAct(bool)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(MusicMap));
