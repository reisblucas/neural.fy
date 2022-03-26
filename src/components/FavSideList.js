import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { inputSearchAct, saveFavoriteMusicsAct, saveUrlAct } from '../actions';
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
    } = this.props;

    return (
      <div className="favList">
        {
          favoritesToSidebar.map((song) => {
            const { artistName, collectionId, trackId, trackName } = song;
            return (
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
});

const mapDispatchToProps = (dispatch) => ({
  fetchAlbumThunk: (artistName) => dispatch(fetchAlbum(artistName)),
  fetchMusicsThunk: (albumId) => dispatch(fetchMusics(albumId)),
  inputSearchGlobal: (inputValue) => dispatch(inputSearchAct(inputValue)),
  saveFavoriteMusics: (favorites) => dispatch(saveFavoriteMusicsAct(favorites)),
  saveUrl: (url) => dispatch(saveUrlAct(url)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FavSideList);
