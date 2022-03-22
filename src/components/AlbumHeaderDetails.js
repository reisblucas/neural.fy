import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { totalAlbumTime } from '../helpers/songTime';
import '../styles/albumHeaderDetails.css';
import { enableRenderAlbumAct } from '../actions';
import { getUser } from '../services/userAPI';

class AlbumHeaderDetails extends Component {
  state = {
    userImage: '',
  }

  albumYear = (year) => year.split('-')[0];

  sideInfoTracks = (tracks) => tracks.length;

  albumTime = () => {
    this.setState((prevState) => ({
      albumTrackTime: prevState.albumTrackTime + 1,
    }));
  }

  handleArtistNameLink = () => {
    const { enableRender } = this.props;
    enableRender(true);
  }

  fetchUserImage = async () => {
    const { image } = await getUser();
    console.log(image);
    this.setState({ userImage });
    return image;
  }

  render() {
    const { userImage } = this.state;

    const {
      responseMusics:
        { albumCollection:
          { artistName, artworkUrl100, releaseDate },
        tracks,
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
                onClick={ this.handleArtistNameLink }
              >
                <h5 className="headerUserOrArtistName">{artistName}</h5>
              </Link>
            )
        }
        <h5 className="headingListStyle">•</h5>
        <h5>{this.albumYear(releaseDate)}</h5>
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
});

export default connect(null, mapDispatchToProps)(AlbumHeaderDetails);
