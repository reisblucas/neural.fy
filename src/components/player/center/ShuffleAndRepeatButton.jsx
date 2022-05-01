import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { BiRepeat, BiShuffle } from 'react-icons/bi';

function ShuffleAndRepeatButton({ type }) {
  const [isShfflClicked, setIsShfflClicked] = useState(false);
  const [isRptClicked, setIsRptClicked] = useState(false);

  const shuffle = (
    <button
      type="button"
      className="cpb"
      onClick={ () => setIsShfflClicked(!isShfflClicked) }
    >
      {
        isShfflClicked
          ? <BiShuffle className="tsp-sa tsp-s" />
          : <BiShuffle className="tsp-rs tsp-s" />
      }
    </button>
  );

  const repeat = (
    <button
      type="button"
      className="cpb"
      onClick={ () => setIsRptClicked(!isRptClicked) }
    >
      {
        isRptClicked
          ? <BiRepeat className="tsp-r tsp-sa" />
          : <BiRepeat className="tsp-rs tsp-r" />
      }
    </button>
  );

  return type === 'shuffle' ? shuffle : repeat;
}

ShuffleAndRepeatButton.propTypes = {
  type: PropTypes.string,
}.isRequired;

export default ShuffleAndRepeatButton;