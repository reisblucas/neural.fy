import PropTypes from 'prop-types';
import React from 'react';
import { IoIosSkipBackward, IoIosSkipForward } from 'react-icons/io';
import bckOrForwardSong from '../../../helpers/backward-forward-player/bckOrForwardSong';

function BackAndForwardButton({
  type, songsGlobal, played, setPlayedSongs,
}) {
  const dataToBackOrForward = { songsGlobal, played, setPlayedSongs };

  const backward = (
    <button
      type="button"
      className="cpb"
      onClick={ () => bckOrForwardSong(true, dataToBackOrForward) }
    >
      <IoIosSkipBackward className="tsp-i" />
    </button>
  );

  const forward = (
    <button
      type="button"
      className="cpb"
      onClick={ () => bckOrForwardSong(false, dataToBackOrForward) }
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

export default BackAndForwardButton;
