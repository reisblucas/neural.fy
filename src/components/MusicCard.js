import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { enableRenderAlbumAct } from '../actions';
import { placeSelectedClass } from '../helpers/player';
import { convertMillsToMin, convertMillsToSeconds } from '../helpers/songTime';
import responseMusics from '../reducers/responseMusics';
import ButtonPlay from './ButtonPlay';
import FilterRow from './FilterRow';
import MusicMap from './MusicMap';

class MusicCard extends Component {
  // state = {
  //   played: false,
  // }

  // handlePlayIcon = ({ currentTarget }) => {
  //   this.setState(({
  //     played: {
  //       status: true,
  //       name: currentTarget.attributes.name.value,
  //     },
  //   }));
  // }

  // handlePauseIcon = () => {
  //   this.setState({
  //     played: {
  //       status: false,
  //     },
  //   });
  // }

  // handleArtistNameLink = () => {
  //   const { enableRender } = this.props;
  //   enableRender(true);
  // }

  render() {
    const {
      albumTracks,
      // handleCheck,
      // handleReload,
      // checkedAndFavorite,
      match: { path },
      responseMusics: { tracks, favorites }, //
    } = this.props;

    console.log('tracks in musiccard',tracks);

    // const { played } = this.state;

    // const favoritesPath = '/favorites';

    return (
      <div className="listMusic listMusicMobile">
        <FilterRow path={ path } />

        <hr className="horizontalRow" />

        <MusicMap { ...this.props } />

        {
          path === '/album/:id'
            ? (
              <MusicMap tracks={ tracks } { ...this.props } />
            )
            : (
              <MusicMap tracks={ favorites } { ...this.props } />
            )
        }
      </div>
    );
  }
}

MusicCard.propTypes = {
  albumTracks: PropTypes.oneOfType([PropTypes.array]),
  checkedAndFavorite: PropTypes.oneOfType([PropTypes.array]),
  handleCheck: PropTypes.func,
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
  enableRender: (bool) => dispatch(enableRenderAlbumAct(bool)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MusicCard);
