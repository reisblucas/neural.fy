import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import fetchAlbum from '../thunk/fetchAlbumInRedux';

class FavSideList extends Component {
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

  shouldComponentUpdate(nextProps) {
    console.log(nextProps);
  }

  render() {
    const { favoriteSongs, fetchAlbumThunk } = this.props;

    return (
      <div className="favList">
        {
          favoriteSongs.map((song) => {
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

// FavSideList.propTypes = {
//   favoriteSongs: PropTypes.oneOfType([
//     PropTypes.array,
//   ]),
// }.isRequired;

const mapDispatchToProps = (dispatch) => ({
  fetchAlbumThunk: (artistName) => dispatch(fetchAlbum(artistName)),
});

export default connect(null, mapDispatchToProps)(FavSideList);
