import PropTypes from 'prop-types';
import { faPause, faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import { playAudio } from '../helpers/player';

export default class ButtonPlay extends Component {
  render() {
    const {
      path,
      favoritesPath,
      trackNumber,
      previewUrl,
      i,
      handlePlayIcon,
      handlePauseIcon,
      played: { name, status },
    } = this.props;

    return (
      <div className="divTrackNumber">
        {
          path === favoritesPath
            ? (
              <p className="trackNumber font-link">{ i + 1 }</p>
            )
            : (
              <p className="trackNumber font-link">{ trackNumber }</p>
            )
        }
        <label htmlFor={ previewUrl }>
          {
            (name === previewUrl) && (status)
              ? (
                <FontAwesomeIcon
                  name={ previewUrl }
                  icon={ faPause }
                  className="focusable trackPlayIcon trackPauseIcon"
                  onClick={ (e) => {
                    handlePauseIcon(e);
                    playAudio(e);
                  } }
                />
              )
              : (
                <FontAwesomeIcon
                  name={ previewUrl }
                  icon={ faPlay }
                  className="focusable trackPlayIcon"
                  onClick={ (e) => {
                    handlePlayIcon(e);
                    playAudio(e);
                  } }
                />
              )
          }

          <div className="previewMusic">
            <audio
              id={ previewUrl }
              data-testid="audio-component"
              src={ previewUrl }
              controls
              hidden
            >
              <track kind="captions" />
              O seu navegador não suporta o elemento
              {' '}
              <code>audio</code>
              .
            </audio>
          </div>
        </label>
      </div>
    );
  }
}

ButtonPlay.propTypes = {
  favoritesPath: PropTypes.string,
  i: PropTypes.number,
  path: PropTypes.string,
  previewUrl: PropTypes.string,
  trackNumber: PropTypes.string,
  playAudio: PropTypes.func,
}.isRequired;
