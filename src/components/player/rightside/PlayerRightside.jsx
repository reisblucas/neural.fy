import React, { useEffect, useRef, useState } from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { IoVolumeHighOutline, IoVolumeLowOutline,
  IoVolumeMediumOutline, IoVolumeOffOutline } from 'react-icons/io5';
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
    const TWENTY_PERCENT = 0.2;
    const FIFTHY_PERCENT = 0.5;

    switch (true) {
    case (crrVolume === ZERO):
      return <IoVolumeOffOutline />;

    case (crrVolume > ZERO && crrVolume <= TWENTY_PERCENT):
      return <IoVolumeLowOutline />;

    case (crrVolume > TWENTY_PERCENT && crrVolume <= FIFTHY_PERCENT):
      return <IoVolumeMediumOutline />;

    case (crrVolume > FIFTHY_PERCENT):
      return <IoVolumeHighOutline />;

    default:
      return <IoVolumeHighOutline />;
    }
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
