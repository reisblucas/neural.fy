import PropTypes from 'prop-types';
import React from 'react';
import { BiShuffle } from 'react-icons/bi';

function Shuffle(props) {
  const { isShfflClicked, setIsShfflClicked, shuffleSongs } = props;

  return (
    <button
      type="button"
      className="cpb dot-father"
      onClick={ () => {
        setIsShfflClicked(!isShfflClicked);
        shuffleSongs();
      } }
    >
      {
        isShfflClicked
          ? (
            <>
              <BiShuffle className="tsp-sa tsp-s" />
              <div className="green-dot" />
            </>
          )
          : <BiShuffle className="tsp-rs tsp-s" />
      }
    </button>
  );
}

Shuffle.propTypes = {
  isShfflClicked: PropTypes.bool,
  shuffleFuncs: PropTypes.shape({
    setIsShfflClicked: PropTypes.func,
    shuffleSongs: PropTypes.func,
  }),
}.isRequired;

export default Shuffle;
