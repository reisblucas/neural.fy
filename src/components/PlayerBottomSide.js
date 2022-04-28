import {
  faBackwardStep, faForwardStep, faHeart,
  faPause, faPlay, faRepeat, faShuffle,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSongPlayedAct, setVolumePlayerAct } from '../actions';
import { convertMillsToMin, convertMillsToSeconds } from '../helpers/songTime';
import '../styles/playerBottomSide.css';

const DEFAULT_PLAYER_VOLUME = 0.1;

export const PlayerBottomSide = () => {
  const [crrTime, setCrrTime] = useState('0:00');

  const state = useSelector((globalState) => ({
    musicsToPlayer: globalState.musicsToPlayer,
    played: globalState.musicsToPlayer.played,
    volume: globalState.musicsToPlayer.volume,
  }));
  const { musicsToPlayer: { songs: songsGlobal }, played, volume } = state;
  console.log('estadao global', volume);

  const dispatch = useDispatch();
  const setPlayedSongs = (objInsidePlayed) => dispatch(setSongPlayedAct(objInsidePlayed));
  const setPlayerVolume = (volChanged) => dispatch(setVolumePlayerAct(volChanged));

  // references
  // https://www.youtube.com/watch?v=sqpg1qzJCGQ - building some parts of this player with Amy's help
  const audioPlayer = useRef(); // reference for our audio component
  const progressBar = useRef(); // reference for our progress bar

  const play = () => {
    audioPlayer.current.play();
    setPlayedSongs({ ...played, status: true });
  };

  const pause = () => {
    audioPlayer.current.pause();
    setPlayedSongs({ ...played, status: false });
  };

  const handlePlayButton = () => {
    if (played.name === '') { return null; } // same as do nothing...
    audioPlayer.current.volume = DEFAULT_PLAYER_VOLUME;
    return played.status ? pause() : play();
  };

  const volumeChange = () => {
    console.log(played.volume);
    // Need to create another ref to use dynamically input range?
    // setPlayerVolume(2);
  }

  useEffect(() => {
    if (played.status) {
      audioPlayer.current.volume = DEFAULT_PLAYER_VOLUME;
      audioPlayer.current.play();
    }

    // itunes api always return 30s in preview, so max seconds need to be 30s
    // const seconds = convertMillsToSeconds(played.trackTimeMillis);
    const seconds = 30;
    progressBar.current.max = seconds;
    console.log(progressBar);
  }, [played.name, played.status, played.trackTimeMillis]);

  const changeRange = () => {
    audioPlayer.current.crrTime = progressBar.current.value;
    progressBar.current
      .style.setProperty(
        0, `${(progressBar.current.value / +played.trackTimeMillis) * 100}%`,
      );

    console.log(progressBar.current.value);
    setCrrTime(progressBar.current.value);
  };

  return (
    <div className="player-container">
      <div className="music-player-info">
        <div className="artist-infos">
          <p className="music-name-player tdh tc">Music name</p>
          <p className="artist-name-player tdh tc">Artist</p>
        </div>
        <div className="favorite-player-container">
          {/* <label htmlFor="fav-button-player"> */}
          <label htmlFor="fbp">
            <input type="checkbox" id="fbp" name="" />
            <FontAwesomeIcon icon={ faHeart } className="heartIcon-player" />
          </label>
          {/* </label> */}
        </div>
      </div>

      <div className="central-player-buttons">
        <audio ref={ audioPlayer } src={ played.name } autoPlay>
          <track kind="captions" />
          Your browser does not support this player.
          <code>audio</code>
        </audio>

        <div className="tsp-w mb-5">
          <div className="tsp">
            <button
              type="button"
              className="control-player-buttons"
            >
              <FontAwesomeIcon
                icon={ faShuffle }
                className="tsp-i"
              />
            </button>

            <button
              type="button"
              className="control-player-buttons"
            >
              <FontAwesomeIcon
                icon={ faBackwardStep }
                className="tsp-i"
              />
            </button>

            <button
              type="button"
              className="control-player-buttons pb"
              onClick={ handlePlayButton }
            >
              {
                played.status
                // isPlaying
                  ? <FontAwesomeIcon className="pbcs" icon={ faPause } />
                  : <FontAwesomeIcon className="pbcs" icon={ faPlay } />
              }
            </button>

            <button
              type="button"
              className="control-player-buttons"
            >
              <FontAwesomeIcon
                icon={ faForwardStep }
                className="tsp-i"
              />
            </button>

            <button
              type="button"
              className="control-player-buttons"
            >
              <FontAwesomeIcon
                icon={ faRepeat }
                className="tsp-i"
              />
            </button>
          </div>
        </div>

        <div className="bsp">

          {/* duration before */}
          <div className="dfs mr-5">
            {
              crrTime === '0:00'
                ? '0:00'
                : `${convertMillsToMin(crrTime)}:${convertMillsToSeconds(crrTime)}`
            }
          </div>

          <input
            type="range"
            className="progress-bar"
            defaultValue="0"
            ref={ progressBar }
            onChange={ changeRange }
          />

          {/* duration total */}
          <div className="dfs ml-5">
            {
              played.trackDuration === undefined
                ? '0:00'
                : played.trackDuration
            }
          </div>
        </div>
      </div>

      <div className="right-player-buttons">
        buttons
        <input
          type="range"
          name="volume-player"
          id=""
          defaultValue="1"
          onChange={ volumeChange }
          max={ volume }
        />
      </div>
    </div>
  );
};

export default PlayerBottomSide;
