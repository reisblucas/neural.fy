import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class LinkArtistName extends Component {
  render() {
    const { paragraph, handleArtistNameClick } = this.props;

    return (
      <Link
        to="/search"
        onClick={ handleArtistNameClick }
        className="friend-artist-name"
      >
        <p
          className="friend-artist-name ellipsis"
        >
          {paragraph}

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
