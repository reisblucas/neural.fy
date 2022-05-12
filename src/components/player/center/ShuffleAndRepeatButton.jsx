import PropTypes from 'prop-types';
import React, { useCallback, useEffect, useState } from 'react';
import { BiRepeat, BiShuffle } from 'react-icons/bi';
import { useSelector } from 'react-redux';
import shuffler from '../../../helpers/shuffle/shuffler';

function ShuffleAndRepeatButton({ type, setPlaylistSong }) {
  const [isShfflClicked, setIsShfflClicked] = useState(false);
  const [isRptClicked, setIsRptClicked] = useState(false);

  const [songsDefault, setSongsDefault] = useState([]);

  const store = useSelector((globalState) => ({
    songs: globalState.musicsToPlayer.songs,
    tracks: globalState.responseMusics.tracks, // onload album page
  }));

  const { songs, tracks } = store;

  const songsShuffledToGlobal = useCallback((sngClone) => {
    const myShuffleOrder = shuffler(sngClone);
    return songs.map((_, i) => songs[myShuffleOrder[i]]);
  }, [songs]);

  const shuffleSongs = () => {
    const songsClone = [...songs];

    if (isShfflClicked) {
      return setPlaylistSong(songsDefault);
    }

    // const songsShuffledToGlobal = songs.map((_, i) => songs[myShuffleOrder[i]]);
    const sngToSentGlobal = songsShuffledToGlobal(songsClone);
    setPlaylistSong(sngToSentGlobal);
  };

  useEffect(() => {
    if (songsDefault.length === 0 && tracks.length !== 0) {
      setSongsDefault(tracks);
    }

    if (songsDefault.length > 0 && songsDefault[0]?.trackId !== songs[0]?.trackId) {
      setSongsDefault(tracks);
    }

    if (isShfflClicked && songsDefault[0]?.trackId !== songs[0]?.trackId) {
      const sngclone = [...songs];
      const shuffledOrder = songsShuffledToGlobal(sngclone);
      setPlaylistSong(shuffledOrder);
    }
  }, [songs, songsDefault, tracks, isShfflClicked,
    songsShuffledToGlobal]);

  const shuffle = (
    <button
      type="button"
      className="cpb dot-father"
      onClick={ () => {
        setIsShfflClicked(!isShfflClicked);
        shuffleSongs();
      } }
    >
      {
        isShfflClicked
          ? (
            <>
              <BiShuffle className="tsp-sa tsp-s" />
              <div className="green-dot" />
            </>
          )
          : <BiShuffle className="tsp-rs tsp-s" />
      }
    </button>
  );

  const repeat = (
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

  return type === 'shuffle' ? shuffle : repeat;
}

ShuffleAndRepeatButton.propTypes = {
  type: PropTypes.string,
}.isRequired;

export default ShuffleAndRepeatButton;
