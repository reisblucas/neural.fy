import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class LinkFriendActivity extends Component {
  render() {
    const { collectionId, artistName, paragraph, handleMusicNameClick } = this.props;

    return (
      <Link
        to={ `/album/${collectionId}` }
        className="friend-music-name"
        onClick={ () => handleMusicNameClick(artistName, collectionId) }
      >
        <p
          className="friend-music-name ellipsis"
        >
          {paragraph}

        </p>
      </Link>
    );
  }
}

LinkFriendActivity.propTypes = {
  artistName: PropTypes.string,
  collectionId: PropTypes.number,
  handleMusicNameClick: PropTypes.func,
  paragraph: PropTypes.string,
}.isRequired;

export default LinkFriendActivity;
