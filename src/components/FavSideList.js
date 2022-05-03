import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { IoVolumeMediumOutline } from 'react-icons/io5';
import { GiPauseButton } from 'react-icons/gi';

import { saveFavoriteMusicsAct, saveUrlAct, setSongPlayedAct } from '../actions';
import { getFavoriteSongs } from '../services/favoriteSongsAPI';
import { handleMusicNameClick } from '../helpers/artist-music-global';

class FavSideList extends Component {
  componentDidMount() {
    this.fetchFavoriteSongs();
  }

  fetchFavoriteSongs = async () => {
    const { saveFavoriteMusics } = this.props;
    const favorites = await getFavoriteSongs();
    saveFavoriteMusics(favorites);
  }

  stopSong = () => {
    const audio = document.querySelector('audio');
    audio.pause();
  }

  pauseSongGlobal = () => {
    const { played, setPlayedSong } = this.props;
    setPlayedSong({ ...played, status: false });
    this.stopSong();
  }

  render() {
    const { favoritesToSidebar, played } = this.props;

    return (
      <div className="favList">
        {
          favoritesToSidebar && favoritesToSidebar.map((song) => {
            const { artistName, collectionId, trackId, trackName } = song;
            return (
              <div key={ trackId } className="sfs-p">
                <Link
                  to={ `/album/${collectionId}` }
                  className="sideLinkStyle"
                  onClick={ () => { handleMusicNameClick(artistName, collectionId); } }
                >
                  <p className="side-fav-musics ellipsis">{trackName}</p>
                </Link>
                {
                  (played.status && played?.trackId === trackId)
                    && (
                      <button
                        className="fs-p"
                        type="button"
                        onClick={ this.pauseSongGlobal }
                      >
                        <IoVolumeMediumOutline className="sb-vi" />
                        <GiPauseButton className="sb-pi" />
                      </button>
                    )
                }
              </div>
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
  fetchAlbumInRedux: PropTypes.func,
}.isRequired;

const mapStateToProps = (state) => ({
  favoritesToSidebar: state.responseMusics.favoritesToSidebar,
  played: state.musicsToPlayer.played,
});

const mapDispatchToProps = (dispatch) => ({
  saveFavoriteMusics: (favorites) => dispatch(saveFavoriteMusicsAct(favorites)),
  saveUrl: (url) => dispatch(saveUrlAct(url)),
  setPlayedSong: (obj) => dispatch(setSongPlayedAct(obj)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FavSideList);
