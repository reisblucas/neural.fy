const playedSongsStruct = (trackData, songs, songUrl, setPlayedSongs) => {
  if (trackData === 'Do nothing!') {
    const trackFilter2 = songs.filter(({ previewUrl }) => previewUrl === songUrl)[0];
    setPlayedSongs({ ...trackFilter2, status: true, name: songUrl });
    return { ...trackFilter2, status: true, name: songUrl };
  }

  const trackFilter = trackData.filter(({ previewUrl }) => previewUrl === songUrl)[0];
  setPlayedSongs({ ...trackFilter, status: true, name: songUrl });
  return { ...trackFilter, status: true, name: songUrl };
};

export default playedSongsStruct;

// NEED TO REFACTOR PLAYEDSONGSSTRUCT AND DOCUMENTATION THIS FUNCTION
