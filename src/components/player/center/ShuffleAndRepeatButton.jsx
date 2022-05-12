import PropTypes from 'prop-types';
import React, { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import shuffler from '../../../helpers/shuffle/shuffler';
import Repeat from './Repeat';
import Shuffle from './Shuffle';

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
    songsShuffledToGlobal, setPlaylistSong]);

  const shuffleFuncs = {
    isShfflClicked,
    setIsShfflClicked,
    shuffleSongs,
  };

  const repeatFuncs = {
    isRptClicked,
    setIsRptClicked,
  };

  return type === 'shuffle'
    ? <Shuffle { ...shuffleFuncs } />
    : <Repeat { ...repeatFuncs } />;
}

ShuffleAndRepeatButton.propTypes = {
  type: PropTypes.string,
}.isRequired;

export default ShuffleAndRepeatButton;

// Fix deploy
