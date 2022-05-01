import React, { useRef, useState } from 'react';
import { BsVolumeMute } from 'react-icons/bs';
import { FaLinkedin } from 'react-icons/fa';
import { VscGithub, VscLayers } from 'react-icons/vsc';

function PlayerRightside() {
  // the sound volume will be in the localStorage to remember the user preferences
  const [crrVolume, setCrrVolume] = useState(1);
  const volumeBar = useRef(); // reference for volumeBar

  const volumeChange = () => {
    // console.log(volume);
    // Need to create another ref to use dynamically input range?
    // volumeBar.current.volume =
    // setPlayerVolume(2);
  };

  return (
    <div className="right-player-buttons">
      <a
        href="https://github.com/byneur4l"
        target="_blank"
        rel="noopener noreferrer"
        className="cpb gh-in"
      >
        <VscGithub />
      </a>

      <a
        href="https://www.linkedin.com/in/reisblucas/"
        target="_blank"
        rel="noopener noreferrer"
        className="cpb gh-in"
      >
        <FaLinkedin />
      </a>

      <button
        className="cpb gh-in"
        type="button"
      >
        <VscLayers />
      </button>

      <button
        className="cpb vb"
        type="button"
      >
        <BsVolumeMute />
      </button>

      <input
        type="range"
        name="volume-player"
        id=""
        defaultValue="1"
        onChange={ volumeChange }
        max={ crrVolume }
        ref={ volumeBar }
      />
    </div>
  );
}

export default PlayerRightside;
