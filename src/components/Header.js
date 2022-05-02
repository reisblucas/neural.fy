import React, { Component } from 'react';
import '../styles/header.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getUser } from '../services/userAPI';
import TopsideHeader from './TopsideHeader';
import FavSideList from './FavSideList';
import LoadingHeader from './LoadingHeader';
import { handleMusicNameClick } from '../helpers/artist-music-global';

class Header extends Component {
  constructor() {
    super();

    this.state = {
      isLoading: true,
      name: '',
      image: 'https://i.pinimg.com/474x/86/0d/cd/860dcdf5cd536bfd86d8fc86efdbdd18.jpg',
    };

    this.catchUser = this.catchUser.bind(this);
    this.forceReloadVerifier = this.forceReloadVerifier.bind(this);
  }

  componentDidMount() {
    this.catchUser();
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

  forceReloadVerifier() {
    const { forceReload, handleReload } = this.props;
    const ms500 = 500;

    if (forceReload) {
      this.setState((prevState) => ({
        reload: !prevState.reload,
        isLoading: true,
      }), () => {
        this.fetchFavoriteSongs();
        setTimeout(() => this.setState({ isLoading: false }), ms500);
      });
      handleReload();
    }
  }

  render() {
    const { isLoading } = this.state;
    const { played } = this.props;

    this.forceReloadVerifier();

    return (
      <header className="header-hero" data-testid="header-component">
        <TopsideHeader { ...this.state } />

        <hr className="sideBarHorizontalRow" />

        <div className="sideFavSongsContainer">
          {
            isLoading
              ? (
                <LoadingHeader />
              )
              : (
                <FavSideList
                  { ...this.props }
                />
              )
          }
        </div>

        {
          played?.trackId
            && (
              <div className="pcsi">
                <Link
                  to={ `/album/${played?.collectionId}` }
                  onClick={ async () => {
                    handleMusicNameClick(played?.artistName, played?.collectionId);
                  } }
                >
                  <img
                    src={ played?.artworkUrl100
                      .replace('100x100bb.jpg', '500x500bb.jpg') }
                    alt="Current song album"
                    className="pcsi-im"
                  />
                </Link>
              </div>
            )
        }

      </header>
    );
  }
}

Header.propTypes = {
  url: PropTypes.string,
}.isRequired;

const mapStateToProps = (state) => ({
  played: state.musicsToPlayer.played,
});

// const mapDispatchToProps = {}

export default connect(mapStateToProps)(Header);
