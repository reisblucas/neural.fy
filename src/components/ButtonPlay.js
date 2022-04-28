import PropTypes from 'prop-types';
import { faPause, faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { playAudio } from '../helpers/player';

class ButtonPlay extends Component {
  render() {
    const {
      path,
      favoritesPath,
      // trackNumber,
      previewUrl,
      i,
      handlePlayIcon,
      handlePauseIcon,
      played: { name },
      musicsToPlayer: { played: { status: songGlobStatus } },
    } = this.props;

    return (
      <div className="divTrackNumber">
        {
          path === favoritesPath
            ? (
              <p className="trackNumber font-link">{ i + 1 }</p>
            )
            : (
              <p className="trackNumber font-link">{ i + 1 }</p>
            )
        }
        <label htmlFor={ previewUrl }>
          {
            (name === previewUrl) && (songGlobStatus)
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

          {/* <div className="previewMusic">
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
          </div> */}
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

const mapStateToProps = (state) => ({ musicsToPlayer: state.musicsToPlayer });

export default connect(mapStateToProps)(ButtonPlay);
