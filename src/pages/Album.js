import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Loading from '../components/Loading';
import MusicCard from '../components/MusicCard';
import getMusics from '../services/musicsAPI';
import { addSong, getFavoriteSongs, removeSong } from '../services/favoriteSongsAPI';
import '../styles/album.css';
import AlbumHeader from '../components/AlbumHeader';
import {
  inputSearchAct,
  responseMusicsAct,
  saveAlbumNameAct,
  saveFavoriteMusicsAct,
} from '../actions';
import fetchAlbumInRedux from '../thunk/fetchAlbumInRedux';

class Album extends Component {
  constructor() {
    super();

    this.handleCheck = this.handleCheck.bind(this);
    this.handleLoad = this.handleLoad.bind(this);
    this.fetchMusic = this.fetchMusic.bind(this);
    this.fetchFavoriteSongs = this.fetchFavoriteSongs.bind(this);
    this.handleReload = this.handleReload.bind(this);

    this.state = {
      isLoading: true,
      album: {},
      albumTracks: [],
      checked: [],
      favoriteSongs: [],
      checkedAndFavorite: [],
      albumTrackTime: [],
      forceReload: false,
      isHeaderLoading: false,
      url: '',
      colors: [],
    };
  }

  async componentDidMount() {
    const { checked } = this.state;
    const {
      saveResponseMusics,
      saveAlbumName,
      inputSearchGlobal,
      searchAlbumGlobal,
    } = this.props;

    const music = await this.fetchMusic();
    const idFavoriteSongs = await this.fetchFavoriteSongs();

    inputSearchGlobal(music[0].artistName);
    searchAlbumGlobal(music[0].artistName);
    saveAlbumName(music[0]);
    saveResponseMusics(music.slice(1));

    this.setState({
      album: music[0], // sempre o primeiro item do array é o album com as infos
      albumTracks: music.slice(1), // a partir daqui é apenas música
      isLoading: false,
      favoriteSongs: idFavoriteSongs,
      checkedAndFavorite: [...idFavoriteSongs, ...checked],
    });
  }

  handleLoad() {
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
    const { saveFavoriteMusics } = this.props;
    if (checkedAndFavorite.includes(id)) {
      // bool
      const filter = this.filterChecked(checkedAndFavorite, id); // dentro do setState novo

      await removeSong(artist);

      this.setState({
        checkedAndFavorite: filter,
      });

      const favorites = await getFavoriteSongs();
      saveFavoriteMusics(favorites);
    } else {
      await addSong(artist);

      this.setState((prevState) => ({
        checkedAndFavorite: [...prevState.checkedAndFavorite, id],
      }));

      const favorites = await getFavoriteSongs();
      saveFavoriteMusics(favorites);
    }
  }

  gradientColorHandler = (arr) => {
    this.setState({ colors: arr });
  }

  async fetchMusic() {
    const { match: { params: { id } } } = this.props;
    return getMusics(id);
  }

  async fetchFavoriteSongs() {
    const favorites = await getFavoriteSongs();
    const idFavoriteSongs = favorites.map(({ trackId }) => trackId);
    return idFavoriteSongs;
  }

  filterChecked(arr, id2) {
    const filtered = arr.filter((musicId) => musicId !== id2);
    return filtered;
  }

  render() {
    const { album: { artistName }, isLoading, colors } = this.state;

    return (
      <div className="headerPattern">
        {
          isLoading
            ? <Loading />
            : (
              <section data-testid="page-album" className="album">
                <AlbumHeader
                  { ...this.state }
                  { ...this.props }
                  gradientColorHandler={ this.gradientColorHandler }
                />

                <section className="albumContent gradContent">
                  <p data-testid="artist-name" hidden>{ `Artist Name ${artistName}`}</p>

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
                    { ...this.state }
                    { ...this.props }
                    handleCheck={ this.handleCheck }
                    handleLoad={ this.handleLoad }
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

Album.propTypes = {
  saveFavoriteMusics: PropTypes.func,
  saveResponseMusics: PropTypes.func,
}.isRequired;

const mapStateToProps = (state) => ({
  responseMusics: state.responseMusics,
  url: state.url,
});

const mapDispatchToProps = (dispatch) => ({
  saveResponseMusics: (response) => dispatch(responseMusicsAct(response)),
  saveFavoriteMusics: (favorites) => dispatch(saveFavoriteMusicsAct(favorites)),
  saveAlbumName: (albumName) => dispatch(saveAlbumNameAct(albumName)),
  inputSearchGlobal: (inputValue) => dispatch(inputSearchAct(inputValue)),
  searchAlbumGlobal: (inputValue) => dispatch(fetchAlbumInRedux(inputValue)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Album));
