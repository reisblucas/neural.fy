import React, { useEffect, useRef, useState } from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { IoVolumeLowOutline, IoVolumeMediumOutline,
  IoVolumeOffOutline } from 'react-icons/io5';
import { VscGithub, VscLayers } from 'react-icons/vsc';
import { getInStorage, saveInStorage } from '../../../services/localStorage';
import '../../../styles/playerBottomSide.css';

const ZERO_DOT_ONE = 0.1;

function PlayerRightside() {
  // the sound volume will be in the localStorage to remember the user preferences
  const [crrVolume, setCrrVolume] = useState(1);
  const [volBeforeMute, setVolBeforeMute] = useState(ZERO_DOT_ONE);
  const volumeBar = useRef(); // vol bar reference

  const setVolumeStyle = () => volumeBar.current.style
    .setProperty('--seek-vol-before-width', `${(volumeBar.current.value)}%`);

  useEffect(() => {
    // buscar o volume do localstorage
    const volume = getInStorage('volume');

    if (volume < 1) { volumeBar.current.value = volume * 100; }

    volumeBar.current.max = 100;
    setVolumeStyle();
    setCrrVolume(volume);
  }, [crrVolume]);

  const setVolumeSong = (volState) => {
    const audio = document.querySelector('audio');
    audio.volume = volState;
  };

  const volumeChange = () => {
    setVolumeStyle();
    setVolumeSong(crrVolume);

    const volumeToSave = (volumeBar.current.value / 100);
    setCrrVolume(volumeToSave);
    saveInStorage('volume', volumeToSave);
  };

  const mute = () => {
    setVolumeStyle();
    setVolBeforeMute(crrVolume);
    setVolumeSong(0);

    setCrrVolume(0);
    saveInStorage('volume', 0);
  };

  const unmute = () => {
    setVolumeStyle();
    setVolumeSong(volBeforeMute);

    setCrrVolume(volBeforeMute);
    saveInStorage('volume', volBeforeMute);
  };

  const muteAndUnmute = () => (crrVolume === 0 ? unmute() : mute());

  const volumeVerifier = () => {
    const ZERO = 0;
    const ZERO_DOT_FIVE = 0.5;

    switch (true) {
    case (crrVolume === ZERO):
      return (
        <>
          <IoVolumeOffOutline />
          <div className="vol-mute">x</div>
        </>
      );

    case (crrVolume > ZERO && crrVolume <= ZERO_DOT_FIVE):
      return <IoVolumeLowOutline />;

    case (crrVolume > ZERO_DOT_FIVE):
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
        onClick={ muteAndUnmute }
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
