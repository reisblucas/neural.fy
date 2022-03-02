import PropTypes from 'prop-types';
import { faHeart, faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import LoadingHeader from './LoadingHeader';
import SpotifyLogoHeader from '../images/spotifyLogoHeader.png';

export default class SidebarHeaderTopside extends Component {
  render() {
    const { name, image, isLoading } = this.props;

    return (
      <div className="headerTopside">
        <div className="header-content">
          <Link to="/search" className="header-link-style">
            <div className="header-title">
              <img src={ SpotifyLogoHeader } alt="Spotify Logo" />
              <h2 className="header-collab">X</h2>
              <h2>neur4l</h2>
            </div>
          </Link>
          {
            isLoading
              ? (
                <div className="loadingHeader">
                  <LoadingHeader />
                </div>
              )
              : (
                <div className="showUserBar">
                  <div className="div-profile-icon">
                    <img
                      src={ image }
                      alt="profile icon"
                      className="image-icon"
                    />
                  </div>
                  <h5 data-testid="header-user-name">{ name }</h5>
                </div>
              )
          }
        </div>

        <div className="navLinks-container">
          <div className="alignNavSideBar">
            <NavLink
              className="navLinks"
              to="/search"
              data-testid="link-to-search"
            >
              <FontAwesomeIcon icon={ faMagnifyingGlass } className="iconSet" />
              Search
            </NavLink>
          </div>

          <div className="alignNavSideBar">
            <NavLink
              className="navLinks"
              to="/favorites"
              data-testid="link-to-favorites"
            >
              <FontAwesomeIcon icon={ faHeart } className="iconSet" />
              Favorites
            </NavLink>
          </div>

          <div className="alignNavSideBar">
            <NavLink
              className="navLinks"
              to="/profile"
              data-testid="link-to-profile"
            >
              <FontAwesomeIcon icon={ faUser } className="iconSet" />
              Profile
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
}

SidebarHeaderTopside.propTypes = {
  image: PropTypes.string,
  isLoading: PropTypes.bool,
  name: PropTypes.string,
}.isRequired;
