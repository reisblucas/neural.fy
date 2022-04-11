const trackDataStructureToPlayer = (tracks) => {
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
  console.log(musicTracksToGlobal);
};

export default trackDataStructureToPlayer;
