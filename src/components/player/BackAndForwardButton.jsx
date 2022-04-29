import PropTypes from 'prop-types';
import React from 'react';
import { IoIosSkipBackward, IoIosSkipForward } from 'react-icons/io';

function BackAndForwardButton({ type, songsGlobal, played, setPlayedSongs }) {
  const handlePreviousSong = (isBackwardButton) => {
    const FIRST = 0;
    const LAST = songsGlobal.length - 1;
    const firstSong = songsGlobal[FIRST];
    const lastSong = songsGlobal[LAST];

    const songPosition = songsGlobal.findIndex((song) => song.trackId === played.trackId);
    console.log(songPosition);
    console.log(firstSong);

    if (songsGlobal.length > 1) {
      const firstSongCondition = firstSong.trackId === played.trackId;
      if (isBackwardButton && firstSongCondition) {
      // return
        console.log('to na primeira musica');
        setPlayedSongs({ ...lastSong });
      }

      const lastSongCondition = lastSong.trackId === played.trackId;
      if (!isBackwardButton && lastSongCondition) {
        console.log('to na ultima musica');
        setPlayedSongs({ ...firstSong });
      }
    }
  };

  const backward = (
    <button
      type="button"
      className="control-player-buttons"
      onClick={ () => handlePreviousSong(true) }
    >
      <IoIosSkipBackward className="tsp-i" />
    </button>
  );

  const forward = (
    <button
      type="button"
      className="control-player-buttons"
      onClick={ () => handlePreviousSong(false) }
    >
      <IoIosSkipForward className="tsp-i" />
    </button>
  );

  return type === 'backward' ? backward : forward;
}

BackAndForwardButton.propTypes = {
  played: PropTypes.oneOfType([
    PropTypes.object,
  ]),
  setPlayedSongs: PropTypes.func,
  songsGlobal: PropTypes.oneOfType([
    PropTypes.array,
  ]),
  type: PropTypes.string,
}.isRequired;

// BackAndForwardButton.propTypes = {
//   songsGlobal: PropTypes.oneOfType([
//     PropTypes.array,
//   ]),
//   type: PropTypes.string,
// }.isRequried;

export default BackAndForwardButton;
