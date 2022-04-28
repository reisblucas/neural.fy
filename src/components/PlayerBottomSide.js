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
const DEFAULT_PREVIEW_DURATION = 30;

export const PlayerBottomSide = () => {
  const state = useSelector((globalState) => ({
    musicsToPlayer: globalState.musicsToPlayer,
    played: globalState.musicsToPlayer.played,
    volume: globalState.musicsToPlayer.volume,
  }));

  // Songs global to go to the next and previous song
  const { musicsToPlayer: { songs: songsGlobal }, played, volume } = state;

  const dispatch = useDispatch();
  const setPlayedSongs = (objInsidePlayed) => dispatch(setSongPlayedAct(objInsidePlayed));
  const setPlayerVolume = (volChanged) => dispatch(setVolumePlayerAct(volChanged));

  const [crrTime, setCrrTime] = useState('0:00');
  const [crrVolume, setCrrVolume] = useState(volume);

  // references
  // https://www.youtube.com/watch?v=sqpg1qzJCGQ - building some parts of this player with Amy's help
  const audioPlayer = useRef(); // reference for audio component
  const progressBar = useRef(); // reference for progress bar
  const animationRef = useRef();
  const volumeBar = useRef(); // reference for volumeBar

  // const changePlayerCurrentTime = () => {
  //   // performatic bug?
  //   // console.log(Math.floor((progressBar.current.value / DEFAULT_PREVIEW_DURATION) * 100));
  //   progressBar.current
  //     .style.setProperty(
  //       '--seek-before-width',
  //       `${(progressBar.current.value / DEFAULT_PREVIEW_DURATION) * 100}%`,
  //     );
  //   setCrrTime(progressBar.current.value);
  // };

  // const whilePlaying = () => {
  //   progressBar.current.value = audioPlayer.current.currentTime;
  //   changePlayerCurrentTime();
  //   animationRef.current = requestAnimationFrame(whilePlaying);
  // };

  useEffect(() => {
    if (played.status) {
      audioPlayer.current.volume = DEFAULT_PLAYER_VOLUME;
      audioPlayer.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying);
    }

    console.log('out', played.status);
    // console.log(+crrTime === DEFAULT_PREVIEW_DURATION);
    if (+crrTime === DEFAULT_PREVIEW_DURATION && played.status) {
      console.log('inside', played.status);
      setPlayedSongs({ ...played, status: false });
      setCrrTime(0);
      // AND GO TO THE NEXT MUSIC
    }

    // const seconds = convertMillsToSeconds(played.trackTimeMillis);
    // itunes api always return 30s in preview, so max seconds need to be 30s
    const seconds = 30;
    progressBar.current.max = seconds;
  }, [played?.name, played?.status, played.trackTimeMillis, crrTime]);

  const play = () => {
    audioPlayer.current.play();
    animationRef.current = requestAnimationFrame(whilePlaying);
    setPlayedSongs({ ...played, status: true });
  };

  const pause = () => {
    audioPlayer.current.pause();
    cancelAnimationFrame(animationRef.current);
    setPlayedSongs({ ...played, status: false });
  };

  const handlePlayButton = () => {
    if (played.name === '') { return null; } // same as do nothing...
    return played.status ? pause() : play();
  };

  const changePlayerCurrentTime = () => {
    // performatic bug?
    // console.log(Math.floor((progressBar.current.value / DEFAULT_PREVIEW_DURATION) * 100));
    progressBar.current
      .style.setProperty(
        '--seek-before-width',
        `${(progressBar.current.value / DEFAULT_PREVIEW_DURATION) * 100}%`,
      );
    setCrrTime(progressBar.current.value);
  };

  const whilePlaying = () => {
    progressBar.current.value = audioPlayer.current.currentTime;
    changePlayerCurrentTime();
    animationRef.current = requestAnimationFrame(whilePlaying);
  };

  const volumeChange = () => {
    // console.log(volume);
    // Need to create another ref to use dynamically input range?
    // volumeBar.current.volume =
    // setPlayerVolume(2);
  };

  const changeRange = () => {
    audioPlayer.current.currentTime = progressBar.current.value;
    changePlayerCurrentTime();
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
                : `0:${convertMillsToSeconds(crrTime * 1000)}`
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
                : `0:${DEFAULT_PREVIEW_DURATION}`
                // : played.trackDuration
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
          max={ crrVolume }
          ref={ volumeBar }
        />
      </div>
    </div>
  );
};

export default PlayerBottomSide;
