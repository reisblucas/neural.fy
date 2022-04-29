import { convertMillsToMin, convertMillsToSeconds } from '../songTime';
// This function controls verifies when global state for Music Player need to change, following the cases below:

// Global Storage data match with actual sent data?
// // No: the current Album is sent to Global Storage when user click in Play button at Album or Favorites page.

// // Yes: Data is not sent, global store maintain unchanged.

const trackDataStructureToPlayer = (tracks, musicsGlobalState, setMusicPlayer) => {
  // When musicsGlobalState has some data, we need to verify the content;
  if (musicsGlobalState.length > 0) {
    // musicStateVerifier is a boolean, so, in the musicStateVerifier:
    // 1 - while i(index) of musicsGlobalState is minor than tracks length goes to the next step;
    // 2 - trackName in tracks must include trackName of musicsGlobalState;
    // 3 - tracks tracks must be in the same order as musicsGlobalState, trackName parameter is used to verify;

    const musicStateVerifier = musicsGlobalState
      .every(({ trackName }, i) => i < tracks.length
    && (tracks[i].trackName).includes(trackName)
    && tracks[i].trackName === trackName);

    // all verification results are True: the function should do nothing and the globalState should be unchanged;
    if (musicStateVerifier) { return 'Do nothing!'; }
  }

  // some verification results are False: the function remodel the data structure and set MusicsPlayer to global store.
  const musicTracksToGlobal = tracks.map(({
    artistId, artistName, artworkUrl100, collectionName, trackId,
    trackName, trackNumber, trackTimeMillis, previewUrl,
  }) => {
    const minutes = convertMillsToMin(trackTimeMillis);
    const seconds = convertMillsToSeconds(trackTimeMillis);

    return {
      artistId,
      artistName,
      artworkUrl100,
      collectionName,
      trackId,
      trackName,
      trackNumber,
      previewUrl,
      trackTimeMillis,
      trackDuration: `${minutes}:${seconds}`,
    };
  });

  setMusicPlayer(musicTracksToGlobal);
  return musicTracksToGlobal;
};

export default trackDataStructureToPlayer;
