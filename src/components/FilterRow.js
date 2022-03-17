import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { sortFavoriteMusicsAct, sortMusicAct } from '../actions';
import ConditionFilterTitle from './ConditionFilterTitle';
import ConditionClockRender from './ConditionClockRender';

const pathAlbumId = '/album/:id';
const pathFavorites = '/favorites';

class FilterRow extends Component {
  state = {
    favoritesClone: [],
    tracksClone: [],
    filterTitle: '',
    filterAlbum: '',
    filterTime: '',
  }

  componentDidMount() {
    this.saveTracksToReset();
  }

  saveTracksToReset = () => {
    const { responseMusics: { favorites, tracks } } = this.props;
    this.setState({ favoritesClone: [...favorites], tracksClone: [...tracks] });
  }

  resetFilter = () => {
    const { match: { path }, sortMusic, sortFavoriteMusic } = this.props;
    const { favoritesClone, tracksClone } = this.state;

    this.setState({ filterTitle: '', filterTime: '', filterAlbum: '' });

    const pathConditionToReset = path === pathAlbumId;
    if (pathConditionToReset) sortMusic(tracksClone);
    else { sortFavoriteMusic(favoritesClone); }
  }

  sortMusicAlphOrderAndReverse = () => {
    const { responseMusics: { tracks, favorites }, sortMusic,
      match: { path }, sortFavoriteMusic } = this.props;
    const { filterTime, filterAlbum } = this.state;

    if (filterTime !== '' || filterAlbum !== '') {
      this.setState({ filterTime: '', filterAlbum: '' });
    }

    if (path === pathAlbumId) {
      const sortTracksAlpha = [...tracks]
        .sort((a, b) => (a.trackName).localeCompare(b.trackName));

      if (tracks[0] === sortTracksAlpha[0]) {
        const sortTracksDesc = [...tracks]
          .sort((a, b) => (b.trackName).localeCompare(a.trackName));

        this.setState({ filterTitle: 'z-a' });
        return sortMusic(sortTracksDesc);
      }
      sortMusic(sortTracksAlpha);
      this.setState({ filterTitle: 'a-z' });
    }

    if (path === pathFavorites) {
      const sortTracksAlpha = [...favorites]
        .sort((a, b) => (a.trackName).localeCompare(b.trackName));

      if (favorites[0] === sortTracksAlpha[0]) {
        const sortTracksDesc = [...favorites]
          .sort((a, b) => (b.trackName).localeCompare(a.trackName));

        this.setState({ filterTitle: 'z-a' });
        return sortFavoriteMusic(sortTracksDesc);
      }
      sortFavoriteMusic(sortTracksAlpha);
      this.setState({ filterTitle: 'a-z' });
    }
  }

  sortMusicByTime = () => {
    const { responseMusics: { tracks, favorites }, match: { path },
      sortMusic, sortFavoriteMusic } = this.props;
    const { filterTitle, filterAlbum } = this.state;

    if (filterTitle !== '' || filterAlbum !== '') {
      this.setState({ filterTitle: '', filterAlbum: '' });
    }

    if (path === pathAlbumId) {
      const sortTracksAlpha = [...tracks]
        .sort((a, b) => (a.trackTimeMillis) - (b.trackTimeMillis));

      if (tracks[0] === sortTracksAlpha[0]) {
        const sortTracksDesc = [...tracks]
          .sort((a, b) => (b.trackTimeMillis) - (a.trackTimeMillis));

        this.setState({ filterTime: 'z-a' });
        return sortMusic(sortTracksDesc);
      }
      sortMusic(sortTracksAlpha);
      this.setState({ filterTime: 'a-z' });
    }

    if (path === pathFavorites) {
      const sortTracksAlpha = [...favorites]
        .sort((a, b) => (a.trackTimeMillis) - (b.trackTimeMillis));

      if (favorites[0] === sortTracksAlpha[0]) {
        const sortTracksDesc = [...favorites]
          .sort((a, b) => (b.trackTimeMillis) - (a.trackTimeMillis));

        this.setState({ filterTime: 'z-a' });
        return sortFavoriteMusic(sortTracksDesc);
      }
      sortFavoriteMusic(sortTracksAlpha);
      this.setState({ filterTime: 'a-z' });
    }
  }

  sortMusicByAlbum = () => {
    const { responseMusics: { favorites }, match: { path },
      sortFavoriteMusic } = this.props;
    const { filterTitle, filterTime } = this.state;

    if (filterTitle !== '' || filterTime !== '') {
      this.setState({ filterTitle: '', filterTime: '' });
    }

    if (path === pathFavorites) {
      const sortTracksAlpha = [...favorites]
        .sort((a, b) => (a.collectionName).localeCompare(b.collectionName));

      if (favorites[0] === sortTracksAlpha[0]) {
        const sortTracksDesc = [...favorites]
          .sort((a, b) => (b.collectionName).localeCompare(a.collectionName));

        this.setState({ filterAlbum: 'z-a' });
        return sortFavoriteMusic(sortTracksDesc);
      }

      sortFavoriteMusic(sortTracksAlpha);
      this.setState({ filterAlbum: 'a-z' });
    }
  }

  render() {
    const { path } = this.props;
    const { filterTitle, filterTime } = this.state;

    return (
      <div className="musicRow filterRow">
        <div className="divTrackNumber">
          <p
            className="withoutHover albumFilters trackNumberCenter"
            onClick={ this.resetFilter }
            tabIndex="-1"
            aria-hidden="true"
          >
            #
          </p>
        </div>

        {
          path === pathFavorites
            ? (
              <div className="musicAndArtist titleFilter">
                <p
                  className="albumFilters"
                  onClick={ this.sortMusicAlphOrderAndReverse }
                  tabIndex="-1"
                  aria-hidden="true"
                >
                  TITLE
                  <ConditionFilterTitle filterTitle={ filterTitle } />
                </p>

              </div>
            )
            : (
              <div className="musicAndArtistAlbum">
                <p
                  className="albumFilters"
                  onClick={ this.sortMusicAlphOrderAndReverse }
                  tabIndex="-1"
                  aria-hidden="true"
                >
                  TITLE
                  <ConditionFilterTitle filterTitle={ filterTitle } />
                </p>

              </div>
            )
        }

        {
          path === pathFavorites
              && (
                <div className="albumFilter">
                  <p
                    className="albumFilters"
                    onClick={ this.sortMusicByAlbum }
                    tabIndex="-1"
                    aria-hidden
                  >
                    ALBUM

                  </p>
                </div>
              )
        }

        <ConditionClockRender
          filterTime={ filterTime }
          path={ path }
          sortMusicByTime={ this.sortMusicByTime }
        />

      </div>
    );
  }
}

FilterRow.propTypes = {
  path: PropTypes.string,
}.isRequired;

const mapStateToProps = (state) => {
  console.log(state);
  return {
    searchAlbum: state.searchAlbum,
    responseMusics: state.responseMusics,
  };
};

const mapDispatchToProps = (dispatch) => ({
  sortMusic: (sorted) => dispatch(sortMusicAct(sorted)),
  sortFavoriteMusic: (sorted) => dispatch(sortFavoriteMusicsAct(sorted)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(FilterRow));
