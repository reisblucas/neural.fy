import PropTypes from 'prop-types';
import React from 'react';
import { BiRepeat } from 'react-icons/bi';

function Repeat(props) {
  const { isRptClicked, setIsRptClicked } = props;

  return (
    <button
      type="button"
      className="cpb dot-father"
      onClick={ () => {
        setIsRptClicked((prev) => {
          const audio = document.querySelector('audio');
          if (!prev) {
            audio.loop = true;
            return audio.loop;
          }
          audio.loop = false;
          return audio.loop;
        });
      } }
    >
      {
        isRptClicked
          ? (
            <>
              <BiRepeat className="tsp-r tsp-sa" />
              <div className="green-dot" />
            </>
          )
          : <BiRepeat className="tsp-rs tsp-r" />
      }
    </button>
  );
}

Repeat.propTypes = {
  isRptClicked: PropTypes.bool,
  setIsRptClicked: PropTypes.func,
}.isRequired;

export default Repeat;
