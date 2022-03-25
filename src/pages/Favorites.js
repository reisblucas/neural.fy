import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { responseMusicsAct, saveAlbumNameAct, saveFavoriteMusicsAct } from '../actions';
import AlbumHeader from '../components/AlbumHeader';
import Loading from '../components/Loading';
import MusicCard from '../components/MusicCard';
import { getFavoriteSongs, removeSong } from '../services/favoriteSongsAPI';
import { getUser } from '../services/userAPI';

class Favorites extends Component {
  constructor() {
    super();

    this.handleLoad = this.handleLoad.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
    this.handleLoad = this.handleLoad.bind(this);
    this.filterChecked = this.filterChecked.bind(this);
    this.favoriteHeader = this.favoriteHeader.bind(this);
    this.handleReload = this.handleReload.bind(this);

    this.state = ({
      isLoading: true,
      albumTracks: [],
      checkedAndFavorite: [],
      album: {},
      forceReload: false,
      colors: [],
    });
  }

  async componentDidMount() {
    await this.favoriteHeader();
    await this.getFavoriteAndRemoveFromList();
  }

  handleLoad = () => {
    this.setState((prevState) => ({
      isLoading: !prevState.isLoading,
    }));
  }

  handleReload() {
    this.setState((prevState) => ({
      forceReload: !prevState.forceReload,
    }));
  }

  async handleCheck(artist, id) {
    const { checkedAndFavorite } = this.state;
    if (checkedAndFavorite.includes(id)) {
      // this.handleLoad();
      await removeSong(artist);

      await this.getFavoriteAndRemoveFromList();
    }
  }

  async getFavoriteAndRemoveFromList() {
    const { saveFavoriteMusics } = this.props;

    const favorites = await getFavoriteSongs();
    const idFavoriteSongs = favorites.map(({ trackId }) => trackId);

    saveFavoriteMusics(favorites);
    this.setState({
      albumTracks: favorites,
      checkedAndFavorite: [...idFavoriteSongs],
      isLoading: false,
    });
  }

  gradientColorHandler = (arr) => {
    this.setState({ colors: arr });
  }

  filterChecked(arr, id2) {
    const filtered = arr.filter((musicId) => musicId !== id2);
    return filtered;
  }

  async favoriteHeader() {
    const { saveAlbumName } = this.props;
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

    this.setState({
      album: albumFake,
    });

    saveAlbumName(albumFake);
  }

  render() {
    const { isLoading, colors } = this.state;

    return (
      <div data-testid="page-favorite" className="headerPattern">
        {
          isLoading
            ? <Loading />
            : (
              <section className="album">
                <AlbumHeader
                  { ...this.state }
                  { ...this.props }
                  gradientColorHandler={ this.gradientColorHandler }
                />

                <section className="albumContent gradContent sizeContent">

                  <div
                    className="bottom-grad"
                    style={ {
                      backgroundImage: colors.length !== 0
                        && `linear-gradient(
                          rgb(${colors[0][0]}, ${colors[0][1]}, ${colors[0][2]}, 0.4) 0,
                          #121212)`,
                    } }
                  />
                  <MusicCard
                    { ...this.props }
                    { ...this.state }
                    handleCheck={ this.handleCheck }
                    handleReload={ this.handleReload }
                  />
                </section>
              </section>
            )
        }
      </div>
    );
  }
}

Favorites.propTypes = {
  saveFavoriteMusics: PropTypes.func,
}.isRequired;

const mapStateToProps = (state) => ({
  responseMusics: state.responseMusics,
});

const mapDispatchToProps = (dispatch) => ({
  saveResponseMusics: (response) => dispatch(responseMusicsAct(response)),
  saveFavoriteMusics: (favorites) => dispatch(saveFavoriteMusicsAct(favorites)),
  saveAlbumName: (albumName) => dispatch(saveAlbumNameAct(albumName)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
