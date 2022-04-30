import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import SpotifyLogoHeader from '../images/spotifyLogoHeader.png';
import { getUser } from '../services/userAPI';
import { inputSearchAct, saveAlbumNameAct } from '../actions';
import fetchAlbumInRedux from '../thunk/fetchAlbumInRedux';
import magGlass from '../images/navLinks/magGlass.png';
import userImg from '../images/navLinks/user.png';

class TopsideHeader extends Component {
  favoriteHeader = async () => {
    const { userToFavorites } = this.props;
    const currentYear = new Date().getFullYear();
    const user = await getUser();

    const albumFake = {
      artistName: user.name,
      userImage: user.image,
      favoriteTitle: 'PLAYLIST',
      collectionName: 'Liked Songs',
      artworkUrl100: 'https://t.scdn.co/images/3099b3803ad9496896c43f22fe9be8c4.png',
      releaseDate: currentYear.toString(),
    };

    await userToFavorites(albumFake);
  } // fazer isso no login

  resetSearch = () => {
    const { inputSearchGlobal, searchAlbumGlobal } = this.props;
    inputSearchGlobal('');
    searchAlbumGlobal([]);
  }

  render() {
    return (
      <div className="headerTopside">
        <div className="header-content">
          <Link to="/search" className="header-link-style">
            <div className="header-title">
              <img src={ SpotifyLogoHeader } alt="Spotify Logo" />
              <h4 className="header-collab">X</h4>
              <h2>neur4l</h2>
            </div>
          </Link>
        </div>

        <div className="navLinks-container">
          <div className="alignNavSideBar">
            <NavLink
              className="navLinks"
              to="/search"
              data-testid="link-to-search"
              // onClick={ () => this.resetSearch() }
            >
              <img src={ magGlass } alt="" width="25" className="iconSet" />
              <span className="nav-side-text">Search</span>
            </NavLink>
          </div>

          <div className="alignNavSideBar">
            <NavLink
              className="navLinks"
              to="/favorites"
              data-testid="link-to-favorites"
              onClick={ this.favoriteHeader }
            >
              <img src="https://t.scdn.co/images/3099b3803ad9496896c43f22fe9be8c4.png" alt="" width="25" className="iconSet" />
              <span className="nav-side-text">Favorites</span>
            </NavLink>
          </div>

          <div className="alignNavSideBar">
            <NavLink
              className="navLinks"
              to="/profile"
              data-testid="link-to-profile"
            >
              <img
                src={ userImg }
                alt=""
                width="25"
                className="iconSet"
                style={ { backgroundColor: '#006451' } }
              />
              <span className="nav-side-text">Profile</span>
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
}

TopsideHeader.propTypes = {
  image: PropTypes.string,
  isLoading: PropTypes.bool,
  name: PropTypes.string,
}.isRequired;

const mapDispatchToProps = (dispatch) => ({
  userToFavorites: (albumFake) => dispatch(saveAlbumNameAct(albumFake)),
  inputSearchGlobal: (inputValue) => dispatch(inputSearchAct(inputValue)),
  searchAlbumGlobal: (inputValue) => dispatch(fetchAlbumInRedux(inputValue)),
});

export default connect(null, mapDispatchToProps)(TopsideHeader);
