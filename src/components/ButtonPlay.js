import PropTypes from 'prop-types';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { GiPauseButton } from 'react-icons/gi';
import { playAudio } from '../helpers/play-pause-inside-album-or-fav/player';

class ButtonPlay extends Component {
  render() {
    const {
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
          name === previewUrl && songGlobStatus
            ? (
              <GiPauseButton
                className="trackNumber trackPauseIcon fs-15"
              />
            )
            : <p className="trackNumber font-link">{ i + 1 }</p>
        }

        <label htmlFor={ previewUrl }>
          {
            (name === previewUrl) && (songGlobStatus)
              ? (
                <GiPauseButton
                  name={ previewUrl }
                  className="focusable trackPlayIcon trackPauseIcon fs-15"
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
