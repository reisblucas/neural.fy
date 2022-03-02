import React, { Component } from 'react';
import '../styles/header.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getUser } from '../services/userAPI';
import { getFavoriteSongs } from '../services/favoriteSongsAPI';
import SidebarHeaderTopside from './SidebarHeaderTopside';

class Header extends Component {
  constructor() {
    super();

    this.state = {
      isLoading: true,
      name: '',
      image: 'https://i.pinimg.com/474x/86/0d/cd/860dcdf5cd536bfd86d8fc86efdbdd18.jpg',
      favoriteSongs: [],
    };

    this.catchUser = this.catchUser.bind(this);
    this.pathVerifier = this.pathVerifier.bind(this);
    this.saveUrl = this.saveUrl.bind(this);
  }

  componentDidMount() {
    this.catchUser();
    this.fetchFavoriteSongs();
    this.saveUrl();
  }

  fetchFavoriteSongs = async () => {
    const favSongs = await getFavoriteSongs();
    this.setState({
      favoriteSongs: favSongs,
    });
  }

  async catchUser() {
    this.setState({ isLoading: true });
    const user = await getUser();

    this.setState(() => {
      if (user.image.length > 0) {
        return ({
          isLoading: false,
          name: user.name,
          image: user.image,
        });
      }
      return {
        isLoading: false,
        name: user.name,
      };
    });
  }

  saveUrl() {
    const { match: { url } } = this.props;
    this.setState({ url }, () => this.pathVerifier());
  }

  pathVerifier() {
    const { match: { url: urlSideLink } } = this.props;
    const { url: urlCurrentPage } = this.state;

    if (urlCurrentPage !== urlSideLink) {
      window.location.reload();
    }
  }

  render() {
    const { favoriteSongs } = this.state;

    return (
      <header className="header-hero" data-testid="header-component">
        <SidebarHeaderTopside { ...this.state } />

        <hr className="sideBarHorizontalRow" />

        <div className="sideFavSongsContainer">
          <div className="favList">
            {
              favoriteSongs.map((song) => {
                const { collectionId, trackId, trackName } = song;
                return (
                  <Link
                    to={ `/album/${collectionId}` }
                    key={ trackId }
                    className="sideLinkStyle"
                    onClick={ () => this.saveUrl() }
                  >
                    <p className="ellipsis">{trackName}</p>
                  </Link>
                );
              })
            }
          </div>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  url: PropTypes.string,
}.isRequired;

export default Header;
