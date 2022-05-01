import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { handleMusicNameClick } from '../helpers/artist-music-global';

class LinkMusicName extends Component {
  render() {
    const { linkClassName, paragraphClassName, collectionId, artistName,
      paragraph: trackName } = this.props;

    return (
      <Link
        to={ `/album/${collectionId}` }
        className={ linkClassName }
        onClick={ () => handleMusicNameClick(artistName, collectionId) }
      >
        <p
          className={ paragraphClassName }
        >
          {trackName}

        </p>
      </Link>
    );
  }
}

LinkMusicName.propTypes = {
  artistName: PropTypes.string,
  collectionId: PropTypes.number,
  handleMusicNameClick: PropTypes.func,
  paragraph: PropTypes.string,
}.isRequired;

export default LinkMusicName;
