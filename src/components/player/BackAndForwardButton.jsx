import PropTypes from 'prop-types';
import React from 'react';
import { IoIosSkipBackward, IoIosSkipForward } from 'react-icons/io';

function BackAndForwardButton({ type }) {
  const backward = (
    <button
      type="button"
      className="control-player-buttons"
    >
      <IoIosSkipBackward className="tsp-i" />
    </button>
  );

  const forward = (
    <button
      type="button"
      className="control-player-buttons"
    >
      <IoIosSkipForward className="tsp-i" />
    </button>
  );

  return type === 'backward' ? backward : forward;
}

BackAndForwardButton.propTypes = {
  type: PropTypes.string,
}.isRequried;

export default BackAndForwardButton;
