import PropTypes from 'prop-types';
import React, { useEffect, useRef, useState } from 'react';
import { BsVolumeMute } from 'react-icons/bs';
import { FaLinkedin } from 'react-icons/fa';
import { VscGithub, VscLayers } from 'react-icons/vsc';
import '../../../styles/playerBottomSide.css';

function PlayerRightside() {
  // the sound volume will be in the localStorage to remember the user preferences
  const [crrVolume, setCrrVolume] = useState(1);

  const audio = document.querySelector('audio');
  console.log(audio?.volume);

  useEffect(() => {
    // buscar o volume do localstorage
    
  }, []);

  const volumeChange = () => {
    audio.style
      .setProperty('--seek-before-width', `${(audio.volume * 100)}%`);

    setCrrVolume(audio.volume);
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
        defaultValue="1"
        className="progress-bar"
        onChange={ volumeChange }
      />
    </div>
  );
}

export default PlayerRightside;
