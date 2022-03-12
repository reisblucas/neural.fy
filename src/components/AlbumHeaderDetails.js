import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { totalAlbumTime } from '../helpers/songTime';
import '../styles/albumHeaderDetails.css';

export default class AlbumHeaderDetails extends Component {
  albumYear = (year) => year.split('-')[0];

  sideInfoTracks = (tracks) => tracks.length;

  albumTime = () => {
    this.setState((prevState) => ({
      albumTrackTime: prevState.albumTrackTime + 1,
    }));
  }

  render() {
    const {
      album: { artistName, artworkUrl100, releaseDate, userImage },
      albumTracks,
      location: { pathname },
    } = this.props;
    console.log(this.props);
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
              <h5>{artistName}</h5>
            )
        }
        <h5 className="headingListStyle">•</h5>
        <h5>{this.albumYear(releaseDate)}</h5>
        <div className="albumSideInfo">
          <h5 className="headingListStyle ">•</h5>
          <h5>
            {this.sideInfoTracks(albumTracks)}
            {' '}
            songs,
          </h5>
          <h5
            className="headingListStyle timerHD font-link"
          >
            {totalAlbumTime(albumTracks)}

          </h5>
        </div>
      </div>
    );
  }
}

AlbumHeaderDetails.propTypes = {
  album: PropTypes.oneOfType([
    PropTypes.array,
  ]),
}.isRequired;
