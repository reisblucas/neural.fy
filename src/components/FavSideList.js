import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { saveFavoriteMusicsAct } from '../actions';
import { getFavoriteSongs } from '../services/favoriteSongsAPI';
import fetchAlbum from '../thunk/fetchAlbumInRedux';

class FavSideList extends Component {
  componentDidMount() {
    this.saveUrl();
    this.fetchFavoriteSongs();
  }

  fetchFavoriteSongs = async () => {
    const { saveFavoriteMusics } = this.props;
    const favorites = await getFavoriteSongs();
    saveFavoriteMusics(favorites);
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
    const { favoritesToSidebar, fetchAlbumThunk } = this.props;

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
                onClick={ () => {
                  this.saveUrl();
                  fetchAlbumThunk(artistName);
                } }
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
  fetchAlbum: PropTypes.func,
}.isRequired;

// const mapStateToProps = (state) => console.log(state);

const mapStateToProps = (state) => ({
  favoritesToSidebar: state.responseMusics.favoritesToSidebar,
});

const mapDispatchToProps = (dispatch) => ({
  fetchAlbumThunk: (artistName) => dispatch(fetchAlbum(artistName)),
  saveFavoriteMusics: (favorites) => dispatch(saveFavoriteMusicsAct(favorites)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FavSideList);
