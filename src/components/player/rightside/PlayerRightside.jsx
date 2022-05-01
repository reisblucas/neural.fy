import React, { useEffect, useRef, useState } from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { IoVolumeLowOutline, IoVolumeMediumOutline,
  IoVolumeOffOutline } from 'react-icons/io5';
import { VscGithub, VscLayers } from 'react-icons/vsc';
import { getInStorage, saveInStorage } from '../../../services/localStorage';
import '../../../styles/playerBottomSide.css';

function PlayerRightside() {
  // the sound volume will be in the localStorage to remember the user preferences
  const [crrVolume, setCrrVolume] = useState(1);
  const volumeBar = useRef(); // vol bar reference

  const setVolumeStyle = () => volumeBar.current.style
    .setProperty('--seek-vol-before-width', `${(volumeBar.current.value)}%`);

  useEffect(() => {
    // buscar o volume do localstorage
    const volume = getInStorage('volume');

    if (volume < 100) { volumeBar.current.value = volume * 100; }

    volumeBar.current.max = 100;
    setVolumeStyle();
    setCrrVolume(volume);
  }, [crrVolume]);

  const setVolumeSong = () => {
    const audio = document.querySelector('audio');
    audio.volume = crrVolume;
  };

  const volumeChange = () => {
    setVolumeStyle();
    setVolumeSong();

    const volumeToSave = (volumeBar.current.value / 100);
    setCrrVolume(volumeToSave);
    saveInStorage('volume', volumeToSave);
  };

  const volumeVerifier = () => {
    const ZERO = 0;
    const FIFTHY_PERCENT = 0.5;

    switch (true) {
    case (crrVolume === ZERO):
      return (
        <>
          <IoVolumeOffOutline />
          <div className="vol-mute">x</div>
        </>
      );

    case (crrVolume > ZERO && crrVolume <= FIFTHY_PERCENT):
      return <IoVolumeLowOutline />;

    case (crrVolume > FIFTHY_PERCENT):
      return <IoVolumeMediumOutline />;

    default:
      return <IoVolumeMediumOutline />;
    }
  };

  return (
    <div className="right-player-buttons">
      <a
        href="https://github.com/byneur4l"
        target="_blank"
        rel="noopener noreferrer"
        className="cpb gh-in pbr"
      >
        <VscGithub />
      </a>

      <a
        href="https://www.linkedin.com/in/reisblucas/"
        target="_blank"
        rel="noopener noreferrer"
        className="cpb gh-in pbr"
      >
        <FaLinkedin />
      </a>

      <button
        className="cpb gh-in pbr"
        type="button"
      >
        <VscLayers />
      </button>

      <button
        className="cpb vb pbr"
        type="button"
      >
        {volumeVerifier()}
      </button>

      <input
        type="range"
        name="volume-player"
        defaultValue="1"
        className="progress-bar volume-bar"
        ref={ volumeBar }
        onClick={ volumeChange }
        onChange={ volumeChange }
      />
    </div>
  );
}

export default PlayerRightside;
