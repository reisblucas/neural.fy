import PropTypes from 'prop-types';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sortMusicAct } from '../actions';

class FilterRow extends Component {
  sortMusicAlphOrderAndReverse = () => {
    const { searchAlbum: { results } } = this.props;
    console.log(this.props);

    const sortResults = [...results].sort((a, b) => (a))
  }

  render() {
    const { path } = this.props;
    const favoritesPath = '/favorites';

    return (
      <div className="musicRow filterRow">
        <div className="divTrackNumber">
          <p className="withoutHover albumFilters trackNumberCenter">#</p>
        </div>

        {
          path === favoritesPath
            && (
              <div className="miniAlbumImage" />
            )
        }

        {
          path === favoritesPath
            ? (
              <div className="musicAndArtist">
                <p
                  className="albumFilters"
                  onClick={ this.sortMusicAlphOrderAndReverse }
                >
                  TITLE
                </p>
              </div>
            )
            : (
              <div className="musicAndArtistAlbum">
                <p
                  className="albumFilters"
                  onClick={ this.sortMusicAlphOrderAndReverse }
                >
                  TITLE

                </p>
              </div>
            )
        }

        {
          path === favoritesPath
              && (
                <div className="albumFilter">
                  <p className="albumFilters">ALBUM</p>
                </div>
              )
        }

        {
          path === favoritesPath
            ? (
              <div className="filterRigth">
                <div className="previewFavorite" />
                <div className="timeFilter">
                  <p className="albumFilters">
                    <FontAwesomeIcon icon={ faClock } />
                  </p>
                </div>
              </div>
            )
            : (
              <div className="filterRigthAlbum filterRightAlbumMobile">
                <div className="previewFavorite" />
                <div className="musicDurationAlbum">
                  <p className="albumFilters">
                    <FontAwesomeIcon icon={ faClock } />
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
  };
};

const mapDispatchToProps = (dispatch) => ({
  sortMusic: (sorted) => dispatch(sortMusicAct(sorted)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterRow);
