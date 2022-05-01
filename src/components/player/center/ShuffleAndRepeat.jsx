import PropTypes from 'prop-types';
import React from 'react';
import { BiRepeat, BiShuffle } from 'react-icons/bi';

function ShuffleAndRepeatButton({ type }) {
  const shuffle = (
    <button
      type="button"
      className="cpb"
    >
      <BiShuffle className="tsp-rs tsp-s" />
    </button>
  );

  const repeat = (
    <button
      type="button"
      className="cpb"
    >
      <BiRepeat className="tsp-rs tsp-r" />
    </button>
  );

  return type === 'shuffle' ? shuffle : repeat;
}

ShuffleAndRepeatButton.propTypes = {
  type: PropTypes.string,
}.isRequired;

export default ShuffleAndRepeatButton;
