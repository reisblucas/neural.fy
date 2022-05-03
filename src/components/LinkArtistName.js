import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { handleArtistNameClick } from '../helpers/artist-music-global';

class LinkArtistName extends Component {
  render() {
    const { linkClassName, paragraphClassName, paragraph: artistName } = this.props;

    return (
      <Link
        to="/search"
        onClick={ () => handleArtistNameClick(artistName) }
        className={ linkClassName }
      >
        <p
          className={ paragraphClassName }
        >
          {artistName}
        </p>
      </Link>
    );
  }
}

LinkArtistName.propTypes = {
  handleArtistNameClick: PropTypes.func,
  paragraph: PropTypes.string,
}.isRequired;

export default LinkArtistName;
