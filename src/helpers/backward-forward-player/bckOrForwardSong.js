const bckOrForwardSong = (isBackwardButton, dataToBackOrForward) => {
  const { songsGlobal, played, setPlayedSongs } = dataToBackOrForward;
  console.log(dataToBackOrForward);
  console.log('entrei aqui');

  const FIRST = 0;
  const LAST = songsGlobal.length - 1;
  const firstSong = songsGlobal[FIRST];
  const lastSong = songsGlobal[LAST];

  if (songsGlobal.length > 1) {
    // each one of this block of code is equal a one function that need to be abstracted
    // 1 -
    const firstSongCondition = firstSong.trackId === played.trackId;
    if (isBackwardButton && firstSongCondition) {
      console.log('to na primeira musica');
      return setPlayedSongs({ ...lastSong, status: true, name: lastSong.previewUrl });
    }

    // 2 -
    const lastSongCondition = lastSong.trackId === played.trackId;
    if (!isBackwardButton && lastSongCondition) {
      console.log('to na ultima musica');
      return setPlayedSongs({ ...firstSong, status: true, name: firstSong.previewUrl });
    }

    // 3 -
    const { crrTime } = dataToBackOrForward;
    console.log(crrTime);
    if (!isBackwardButton && crrTime) {
      const songPosition = songsGlobal
        .findIndex((song) => song.trackId === played.trackId);
      console.log('entrei apos terminar a musica');
      const nextSong = songsGlobal[songPosition + 1];
      console.log(nextSong);
      return setPlayedSongs({ ...nextSong, state: true, name: nextSong.previewUrl });
    }
  }
};

export default bckOrForwardSong;
