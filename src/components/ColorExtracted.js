import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { ColorExtractor } from 'react-color-extractor';

export default class ColorExtracted extends Component {
  render() {
    const { getColors, artistName, artworkUrl100 } = this.props;

    return (
      <ColorExtractor rgb getColors={ getColors }>
        <img
          src={ artworkUrl100.replace('100x100bb.jpg', '600x600bb.jpg') }
          alt={ `Album cover of ${artistName}` }
          className="imageBackground"
        />
      </ColorExtractor>
    );
  }
}

ColorExtracted.propTypes = {
  artistName: PropTypes.string,
  artworkUrl100: PropTypes.string,
  getColors: PropTypes.oneOfType([
    PropTypes.array,
  ]),
}.isRequired;
