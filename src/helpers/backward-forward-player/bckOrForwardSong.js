const bckOrForwardSong = (isBackwardButton, dataToBackOrForward) => {
  const { songsGlobal, played, setPlayedSongs } = dataToBackOrForward;

  const FIRST = 0;
  const LAST = songsGlobal.length - 1;
  const firstSong = songsGlobal[FIRST];
  const lastSong = songsGlobal[LAST];

  if (songsGlobal.length > 1) {
    // each one of this block of code is equal a one function that need to be abstracted
    // 1 -
    const firstSongCondition = firstSong.trackId === played.trackId;
    if (isBackwardButton && firstSongCondition) {
      return setPlayedSongs({ ...lastSong, status: true, name: lastSong.previewUrl });
    }

    // 2 -
    const lastSongCondition = lastSong.trackId === played.trackId;
    if (!isBackwardButton && lastSongCondition) {
      return setPlayedSongs({ ...firstSong, status: true, name: firstSong.previewUrl });
    }

    // 3 - CONTENT OF THIRD CONDITION IS EQUAL THE FIFTH
    const { crrTime } = dataToBackOrForward;
    const songPosition = songsGlobal.findIndex((song) => song.trackId === played.trackId);
    if (!isBackwardButton && crrTime) {
      const nextSong = songsGlobal[songPosition + 1];
      return setPlayedSongs({ ...nextSong, state: true, name: nextSong.previewUrl });
    }

    // 4 -
    const { trackId: idFirstSongg } = firstSong;
    const { trackId: idLastSong } = lastSong;
    const whenIsBetween1stLast = (idFirstSongg !== played.trackId
      || idLastSong !== played.trackId);
    if (isBackwardButton && whenIsBetween1stLast) {
      const prevSong = songsGlobal[songPosition - 1];
      return setPlayedSongs({ ...prevSong, state: true, name: prevSong.previewUrl });
    }

    // 5 -
    if (!isBackwardButton && whenIsBetween1stLast) {
      const nextSong = songsGlobal[songPosition + 1];
      return setPlayedSongs({ ...nextSong, state: true, name: nextSong.previewUrl });
    }
  }
};

export default bckOrForwardSong;
