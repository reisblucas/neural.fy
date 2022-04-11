const trackDataStructureToPlayer = (tracks, musicsGlobalState, setMusicsGlobal) => {
  if (musicsGlobalState.length > 0) {
    console.log(tracks);
    const musicStateVerifier = musicsGlobalState
      .some(({ trackName }, i) => i < tracks.length
      && [tracks[i].trackName].includes(trackName));
    console.log(musicStateVerifier);

    if (musicStateVerifier) {
      return 'do nothing'; // else set musics to global
    }
  }

  const musicTracksToGlobal = tracks.map((t) => {
    const {
      artworkUrl100, collectionName, trackId, trackName,
      trackNumber, trackTimeMillis, previewUrl,
    } = t;
    const trackData = { artworkUrl100,
      collectionName,
      trackId,
      trackName,
      trackNumber,
      trackTimeMillis,
      previewUrl };

    return trackData;
  });
  setMusicsGlobal(musicTracksToGlobal);
};

export default trackDataStructureToPlayer;
