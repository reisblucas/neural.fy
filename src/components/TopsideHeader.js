import PropTypes from 'prop-types';
import { faHeart, faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import SpotifyLogoHeader from '../images/spotifyLogoHeader.png';
import { getUser } from '../services/userAPI';
import { saveAlbumNameAct } from '../actions';

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
            >
              <FontAwesomeIcon icon={ faMagnifyingGlass } className="iconSet" />
              <span>Search</span>
            </NavLink>
          </div>

          <div className="alignNavSideBar">
            <NavLink
              className="navLinks"
              to="/favorites"
              data-testid="link-to-favorites"
              onClick={ this.favoriteHeader }
            >
              <FontAwesomeIcon icon={ faHeart } className="iconSet" />
              <span>Favorites</span>
            </NavLink>
          </div>

          <div className="alignNavSideBar">
            <NavLink
              className="navLinks"
              to="/profile"
              data-testid="link-to-profile"
            >
              <FontAwesomeIcon icon={ faUser } className="iconSet" />
              <span>Profile</span>
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
});

export default connect(null, mapDispatchToProps)(TopsideHeader);
