import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaRegHeart, FaLinkedin } from 'react-icons/fa';
import { GiPauseButton } from 'react-icons/gi';
import { IoPlaySharp } from 'react-icons/io5';
import { BsVolumeMute } from 'react-icons/bs';
import { VscGithub, VscLayers } from 'react-icons/vsc';
import { saveFavoriteMusicsAct, setReferenceAct, setSongPlayedAct  } from '../actions';
import bckOrForwardSong from '../helpers/backward-forward-player/bckOrForwardSong';
import { convertMillsToSeconds } from '../helpers/songTime';
import '../styles/playerBottomSide.css';
import BackAndForwardButton from './player/BackAndForwardButton';
import ShuffleAndRepeatButton from './player/ShuffleAndRepeat';
import isFavoriteSong from '../helpers/favorites/isFavoriteSong';
import toggleFavorite from '../helpers/favorites/toggleFavorite';
import { Link } from 'react-router-dom';

const DEFAULT_PLAYER_VOLUME = 0.1;
const DEFAULT_PREVIEW_DURATION = 30;
const ONE_THOUSAND = 1000;

export const PlayerBottomSide = () => {
  const state = useSelector((globalState) => {
    // console.log('estado global', globalState);
    return {
    musicsToPlayer: globalState.musicsToPlayer,
    played: globalState.musicsToPlayer.played,
    favoritesToSidebar: globalState.responseMusics.favoritesToSidebar,
  }});

  // Songs global to go to the next and previous song
  const { musicsToPlayer: { songs: songsGlobal },
    played, favoritesToSidebar } = state;

  const dispatch = useDispatch();
  const setPlayedSongs = (objInsidePlayed) => dispatch(setSongPlayedAct(objInsidePlayed));
  const setFavorite = (favArray) => dispatch(saveFavoriteMusicsAct(favArray));

  const [crrTime, setCrrTime] = useState('0:00');

  // references
  // https://www.youtube.com/watch?v=sqpg1qzJCGQ - building some parts of this player with Amy's help
  const audioPlayer = useRef(); // reference for audio component
  const progressBar = useRef(); // reference for progress bar
  const animationRef = useRef();
  const volumeBar = useRef(); // reference for volumeBar

  const audioPlayerEnded = audioPlayer?.current?.ended;

  useEffect(() => {
    if (played.status) {
      audioPlayer.current.volume = DEFAULT_PLAYER_VOLUME;
      audioPlayer.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying);
    }

    if (crrTime === '30' && !audioPlayer.current.ended && played.status) {
      setPlayedSongs({ ...played, status: false });
      const dtbfwCrrTime = { songsGlobal, played, setPlayedSongs, crrTime };
      return bckOrForwardSong(false, dtbfwCrrTime);
    }

    if (!played.status && crrTime === '0') {
      setPlayedSongs({ ...played, status: true });
    }

    // const seconds = convertMillsToSeconds(played.trackTimeMillis);
    // itunes api always return 30s in preview, so max seconds need to be 30s
    const seconds = 30;
    progressBar.current.max = seconds;
  }, [played, played.name, played.status,
    played.trackTimeMillis, crrTime, audioPlayerEnded, favoritesToSidebar]);

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

  // the sound volume will be in the localStorage to remember the user preferences
  const [crrVolume, setCrrVolume] = useState(1);

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

  const toToggle = { favoritesToSidebar, played, setFavorite };
  console.log('no playerbottom', played.status);

  return (
    <div className="player-container">
      <div className="music-player-info">
        <div className="artist-infos">
          <Link to="/">
            <p className="music-name-player tdh tc ellipsis">{played.trackName}</p>
          </Link>
          <p className="artist-name-player tdh tc ellipsis">{played.artistName}</p>
        </div>
        <div className="favorite-player-container">
          {
            played?.previewUrl && (
              <label htmlFor="fbp">
                <input type="checkbox" id="fbp" name="" hidden />
                {
                  isFavoriteSong(favoritesToSidebar, played)
                    ? (
                      <FontAwesomeIcon
                        icon={ faHeart }
                        className="heartIcon-player"
                        onClick={ () => toggleFavorite(toToggle) }
                      />
                    )
                    : (
                      <FaRegHeart
                        className="hip-unfav"
                        onClick={ () => toggleFavorite(toToggle) }
                      />
                    )
                }
              </label>
            )
          }
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
            <ShuffleAndRepeatButton type="shuffle" />
            <BackAndForwardButton
              type="backward"
              songsGlobal={ songsGlobal }
              played={ played }
              setPlayedSongs={ setPlayedSongs }
            />

            <button
              type="button"
              className="cpb pb"
              onClick={ handlePlayButton }
            >
              {
                played.status
                  ? <GiPauseButton className="pbcs" />
                  : <IoPlaySharp className="pbcs" />
              }
            </button>

            <BackAndForwardButton
              type="forward"
              songsGlobal={ songsGlobal }
              played={ played }
              setPlayedSongs={ setPlayedSongs }
            />
            <ShuffleAndRepeatButton type="repeat" />
          </div>
        </div>

        <div className="bsp">

          {/* duration before */}
          <div className="dfs mr-5">
            {
              crrTime === '0:00'
                ? '0:00'
                : `0:${convertMillsToSeconds(crrTime * ONE_THOUSAND)}`
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
            }
          </div>
        </div>
      </div>

      <div className="right-player-buttons">
        <button
          className="cpb gh-in"
          type="button"
        >
          <VscGithub />
        </button>

        <button
          className="cpb gh-in"
          type="button"
        >
          <FaLinkedin />
        </button>

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
    </div>
  );
};

export default PlayerBottomSide;
