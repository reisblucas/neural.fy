const bckOrForwardSong = (isBackwardButton, dataToBackOrForward) => {
  const { songsGlobal, played, setPlayedSongs } = dataToBackOrForward;
  console.log(dataToBackOrForward);
  console.log('entrei aqui');

  const FIRST = 0;
  const LAST = songsGlobal.length - 1;
  const firstSong = songsGlobal[FIRST];
  const lastSong = songsGlobal[LAST];

  const songPosition = songsGlobal.findIndex((song) => song.trackId === played.trackId);

  if (songsGlobal.length > 1) {
    // each one of this block of code is equal a one function that need to be abstracted
    // 1 -
    const firstSongCondition = firstSong.trackId === played.trackId;
    if (isBackwardButton && firstSongCondition) {
      console.log('to na primeira musica');
      setPlayedSongs({ ...lastSong, status: true, name: lastSong.previewUrl });
    }

    // 2 -
    const lastSongCondition = lastSong.trackId === played.trackId;
    if (!isBackwardButton && lastSongCondition) {
      console.log('to na ultima musica');
      setPlayedSongs({ ...firstSong, status: true, name: firstSong.previewUrl });
    }

    // 3 -
  }
};

export default bckOrForwardSong;
