import PropTypes from 'prop-types';
import { faHeart, faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import SpotifyLogoHeader from '../images/spotifyLogoHeader.png';

export default class TopsideHeader extends Component {
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
