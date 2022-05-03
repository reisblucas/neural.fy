import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { BiRepeat, BiShuffle } from 'react-icons/bi';
import { useSelector } from 'react-redux';
import shuffler from '../../../helpers/shuffle/shuffler';

function ShuffleAndRepeatButton({ type, setPlaylistSong }) {
  const [isShfflClicked, setIsShfflClicked] = useState(false);
  const [isRptClicked, setIsRptClicked] = useState(false);

  const [songsDefault, setSongsDefault] = useState([]);
  const [songsShuffledLocal, setSongsShuffledLocal] = useState([]);

  const store = useSelector((globalState) => ({
    songs: globalState.musicsToPlayer.songs,
  }));

  const { songs } = store;

  useEffect(() => {
    if (songsDefault.length === 0) {
      setSongsDefault(songs);
    }

    if (songsDefault.length > 0 && songsDefault[0].trackId !== songs[0].trackId) {
      setSongsShuffledLocal(songs);
    }
  }, [songs, songsDefault, songsShuffledLocal]);

  const shuffleSongs = () => {
    const songsClone = [...songs];
    const myShuffleOrder = shuffler(songsClone);

    if (isShfflClicked) {
      return setPlaylistSong(songsDefault);
    }

    const songsShuffledToGlobal = songs.map((_, i) => songs[myShuffleOrder[i]]);
    setPlaylistSong(songsShuffledToGlobal);
  };

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
        // setRepeatSongs();
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
