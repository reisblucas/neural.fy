import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import FilterRow from './FilterRow';
import MusicMap from './MusicMap';

class MusicCard extends Component {
  render() {
    const {
      match: { path },
      responseMusics: { tracks, favorites },
    } = this.props;

    return (
      <div className="listMusic listMusicMobile">
        <FilterRow path={ path } />

        <hr className="horizontalRow" />

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
  path: PropTypes.string,
}.isRequired;

export default connect()(MusicCard);
