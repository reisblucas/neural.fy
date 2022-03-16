import PropTypes from 'prop-types';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { sortFavoriteMusicsAct, sortMusicAct } from '../actions';
import ConditionFilterTitle from './ConditionFilterTitle';
import ConditionFilterTime from './ConditionFilterTime';

const pathAlbumId = '/album/:id';
const pathFavorites = '/favorites';

class FilterRow extends Component {
  state = {
    favoritesClone: [],
    tracksClone: [],
    filterTitle: '',
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
    const pathConditionToReset = path === pathAlbumId;
    pathConditionToReset ? sortMusic(tracksClone) : sortFavoriteMusic(favoritesClone);
  }

  sortMusicAlphOrderAndReverse = () => {
    const { responseMusics: { tracks, favorites }, sortMusic,
      match: { path }, sortFavoriteMusic } = this.props;
    const { filterTime } = this.state;

    if (filterTime !== '') { this.setState({ filterTime: '' }); }

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

  sortMusicTimerAscendAndDescend = () => {
    const { responseMusics: { tracks, favorites }, match: { path },
      sortMusic, sortFavoriteMusic } = this.props;
    const { filterTitle } = this.state;

    if (filterTitle !== '') { this.setState({ filterTitle: '' }); }

    if (path === pathAlbumId) {
      const sortTracksAlpha = [...tracks]
        .sort((a, b) => (a.trackTimeMillis) - (b.trackTimeMillis));

      if (tracks[0] === sortTracksAlpha[0]) {
        const sortTracksDesc = [...tracks]
          .sort((a, b) => (b.trackTimeMillis) - (a.trackTimeMillis));
        console.log('sortedDescendent', sortTracksDesc);
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
        console.log('sortedDescendent', sortTracksDesc);
        this.setState({ filterTime: 'z-a' });
        return sortFavoriteMusic(sortTracksDesc);
      }
      sortFavoriteMusic(sortTracksAlpha);
      this.setState({ filterTime: 'a-z' });
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
            && (
              <div className="miniAlbumImage" />
            )
        }

        {
          path === pathFavorites
            ? (
              <div className="musicAndArtist">
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
                  <p className="albumFilters">ALBUM</p>
                </div>
              )
        }

        {
          path === pathFavorites
            ? (
              <div className="filterRigth">
                <div className="previewFavorite" />
                <div className="timeFilter">
                  <p
                    className="albumFilters"
                    onClick={ this.sortMusicTimerAscendAndDescend }
                    tabIndex="-1"
                    aria-hidden="true"
                  >
                    <FontAwesomeIcon icon={ faClock } />
                    <ConditionFilterTime filterTime={ filterTime } />
                  </p>
                </div>
              </div>
            )
            : (
              <div className="filterRigthAlbum filterRightAlbumMobile">
                <div className="previewFavorite" />
                <div className="musicDurationAlbum">
                  <p
                    className="albumFilters"
                    onClick={ this.sortMusicTimerAscendAndDescend }
                    tabIndex="-1"
                    aria-hidden="true"
                  >
                    <FontAwesomeIcon icon={ faClock } />
                    <ConditionFilterTime filterTime={ filterTime } />
                  </p>
                </div>
              </div>
            )
        }

      </div>
    );
  }
}

FilterRow.propTypes = {
  path: PropTypes.strings,
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
