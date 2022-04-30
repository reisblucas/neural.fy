import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { IoVolumeMediumOutline } from 'react-icons/io5';
import { GiPauseButton } from 'react-icons/gi';

import {
  inputSearchAct,
  saveFavoriteMusicsAct, saveUrlAct, setSongPlayedAct } from '../actions';
import { getFavoriteSongs } from '../services/favoriteSongsAPI';
import fetchAlbum from '../thunk/fetchAlbumInRedux';
import fetchMusics from '../thunk/fetchMusicsInRedux';

class FavSideList extends Component {
  componentDidMount() {
    this.fetchFavoriteSongs();
  }

  fetchFavoriteSongs = async () => {
    const { saveFavoriteMusics } = this.props;
    const favorites = await getFavoriteSongs();
    saveFavoriteMusics(favorites);
  }

  render() {
    const {
      favoritesToSidebar,
      fetchAlbumThunk,
      fetchMusicsThunk,
      inputSearchGlobal,
      played,
      setPlayedSong,
      refs,
    } = this.props;

    console.log('played status after click', refs);

    return (
      <div className="favList">
        {
          favoritesToSidebar.map((song) => {
            const { artistName, collectionId, trackId, trackName } = song;
            return (
              <>
                <Link
                  to={ `/album/${collectionId}` }
                  key={ trackId }
                  className="sideLinkStyle"
                  onClick={ async () => {
                    fetchAlbumThunk(artistName);
                    fetchMusicsThunk(collectionId);
                    await inputSearchGlobal(artistName);
                  } }
                >
                  <p className="side-fav-musics ellipsis">{trackName}</p>
                </Link>
                <div className="fs-p">
                  {
                    (played.status && played?.trackId === trackId)
                    && (
                      <button
                        className="fs-p"
                        type="button"
                        onClick={ () => setPlayedSong({
                          ...played, status: false,
                        }) }
                      >
                        <IoVolumeMediumOutline className="sb-vi" />
                        <GiPauseButton className="sb-pi" />
                      </button>
                    )
                  }
                </div>
              </>
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
  fetchAlbum: PropTypes.func,
}.isRequired;

const mapStateToProps = (state) => ({
  favoritesToSidebar: state.responseMusics.favoritesToSidebar,
  played: state.musicsToPlayer.played,
  refs: state.musicsToPlayer.refs,
});

const mapDispatchToProps = (dispatch) => ({
  fetchAlbumThunk: (artistName) => dispatch(fetchAlbum(artistName)),
  fetchMusicsThunk: (albumId) => dispatch(fetchMusics(albumId)),
  inputSearchGlobal: (inputValue) => dispatch(inputSearchAct(inputValue)),
  saveFavoriteMusics: (favorites) => dispatch(saveFavoriteMusicsAct(favorites)),
  saveUrl: (url) => dispatch(saveUrlAct(url)),
  setPlayedSong: (obj) => dispatch(setSongPlayedAct(obj)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FavSideList);
