import React, { Component } from 'react';
import AlbumHeader from '../components/AlbumHeader';
import Header from '../components/Header';
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

    this.state = ({
      isLoading: true,
      albumTracks: [],
      checkedAndFavorite: [],
      album: {},
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

  async handleCheck(artist, id) {
    const { checkedAndFavorite } = this.state;
    if (checkedAndFavorite.includes(id)) {
      this.handleLoad();
      await removeSong(artist);

      await this.getFavoriteAndRemoveFromList();
    }
  }

  async getFavoriteAndRemoveFromList() {
    const favorites = await getFavoriteSongs();
    const idFavoriteSongs = favorites.map(({ trackId }) => trackId);
    this.setState({
      albumTracks: favorites,
      checkedAndFavorite: [...idFavoriteSongs],
      isLoading: false,
    });
  }

  filterChecked(arr, id2) {
    const filtered = arr.filter((musicId) => musicId !== id2);
    return filtered;
  }

  async fetchFavoriteSongs() {
    const favorites = await getFavoriteSongs();
    const idFavoriteSongs = favorites.map(({ trackId }) => trackId);
    return idFavoriteSongs;
  }

  async favoriteHeader() {
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
  }

  render() {
    const { isLoading } = this.state;

    return (
      <div data-testid="page-favorite" className="headerPattern">
        <Header { ...this.props } />
        {
          isLoading
            ? <Loading />
            : (
              <section className="album">
                <AlbumHeader { ...this.state } />

                <section className="albumContent gradContent">
                  <MusicCard
                    { ...this.props }
                    { ...this.state }
                    handleCheck={ this.handleCheck }
                  />
                </section>
              </section>
            )
        }
      </div>
    );
  }
}

export default Favorites;
