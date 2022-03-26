import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { totalAlbumTime } from '../helpers/songTime';
import '../styles/albumHeaderDetails.css';
import { enableRenderAlbumAct, inputSearchAct } from '../actions';

class AlbumHeaderDetails extends Component {
  albumYear = (year) => year.split('-')[0];

  sideInfoTracks = (tracks) => tracks.length;

  albumTime = () => {
    this.setState((prevState) => ({
      albumTrackTime: prevState.albumTrackTime + 1,
    }));
  }

  handleArtistNameLink = (artist) => {
    const { enableRender, inputSearchGlobal } = this.props;
    inputSearchGlobal(artist);
    enableRender(true);
  }

  render() {
    const {
      responseMusics:
        { albumCollection:
          { artistName, artworkUrl100, releaseDate, userImage },
        tracks,
        favorites,
        },
      location: { pathname },
    } = this.props;

    const favoritesPath = '/favorites';

    return (
      <div className="artistDetails">
        {
          !userImage
            ? (<img src={ artworkUrl100 } alt="" />)
            : (<img src={ userImage } alt="Profile pic" />)
        }
        {
          pathname === favoritesPath
            ? (
              <Link className="linkStyle focusableLink" to="/profile">
                <h5 className="headerUserOrArtistName">{artistName}</h5>
              </Link>
            )
            : (
              <Link
                className="linkStyle focusableLink"
                to="/search"
                onClick={ () => this.handleArtistNameLink(artistName) }
              >
                <h5 className="headerUserOrArtistName">{artistName}</h5>
              </Link>
            )
        }
        <h5 className="headingListStyle">•</h5>
        <h5>{this.albumYear(releaseDate)}</h5>

        {
          pathname === favoritesPath
            ? (
              <div className="albumSideInfo">
                <h5 className="headingListStyle ">•</h5>
                <h5>
                  {this.sideInfoTracks(favorites)}
                  {' '}
                  songs,
                </h5>
                <h5
                  className="headingListStyle timerHD font-link"
                >
                  {totalAlbumTime(favorites)}

                </h5>
              </div>
            )
            : (
              <div className="albumSideInfo">
                <h5 className="headingListStyle ">•</h5>
                <h5>
                  {this.sideInfoTracks(tracks)}
                  {' '}
                  songs,
                </h5>
                <h5
                  className="headingListStyle timerHD font-link"
                >
                  {totalAlbumTime(tracks)}

                </h5>
              </div>
            )
        }

      </div>
    );
  }
}

AlbumHeaderDetails.propTypes = {
  album: PropTypes.oneOfType([
    PropTypes.array,
  ]),
}.isRequired;

const mapDispatchToProps = (dispatch) => ({
  enableRender: (bool) => dispatch(enableRenderAlbumAct(bool)),
  inputSearchGlobal: (inputValue) => dispatch(inputSearchAct(inputValue)),
});

export default connect(null, mapDispatchToProps)(AlbumHeaderDetails);
