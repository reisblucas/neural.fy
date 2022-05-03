import React, { useEffect, useRef, useState } from 'react';
import { IoVolumeMediumOutline, IoVolumeOffOutline } from 'react-icons/io5';
import { getInStorage, saveInStorage } from '../../../services/localStorage';
import '../../../styles/playerBottomSide.css';
import DocButton from '../../buttons/DocButton';
import GithubButton from '../../buttons/GithubButton';
import LinkedinButton from '../../buttons/LinkedinButton';
import FooterText from '../../footer/FooterText';

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
    const ZERO_DOT_THREE = 0.3;
    const ZERO_DOT_SEVEN = 0.7;

    const SOUNDWAVE = ')';

    switch (true) {
    case (crrVolume === ZERO):
      return (
        <>
          <IoVolumeOffOutline />
          <div className="vol mute">x</div>
        </>
      );

    case (crrVolume > ZERO && crrVolume <= ZERO_DOT_THREE):
      return (
        <>
          <IoVolumeOffOutline />
          <div className="vol low-sound">{SOUNDWAVE}</div>
        </>
      );

    case (crrVolume > ZERO_DOT_THREE && crrVolume <= ZERO_DOT_SEVEN):
      return (
        <>
          <IoVolumeOffOutline />
          <div className="vol med-sound">{SOUNDWAVE}</div>
        </>
      );

    case (crrVolume > ZERO_DOT_SEVEN):
      return (
        <>
          <IoVolumeOffOutline />
          <div className="vol low-sound">{SOUNDWAVE}</div>
          <div className="vol high-sound">{SOUNDWAVE}</div>
        </>
      );

    default:
      return <IoVolumeMediumOutline />;
    }
  };

  return (
    <div className="right-player-buttons">
      <GithubButton />
      <LinkedinButton />
      <DocButton />

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

      <FooterText classNameFoot="copyright-player" />
    </div>
  );
}

export default PlayerRightside;
