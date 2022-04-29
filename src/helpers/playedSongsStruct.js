const playedSongsStruct = (trackData, songs, songUrl, setPlayedSongs) => {
  if (trackData === 'Do nothing!') {
    const trackFilter = songs.filter(({ previewUrl }) => previewUrl === songUrl)[0];
    setPlayedSongs({ ...trackFilter, status: true, name: songUrl });
    return { ...trackFilter, status: true, name: songUrl };
  }

  const trackFilter = trackData.filter(({ previewUrl }) => previewUrl === songUrl)[0];
  setPlayedSongs({ ...trackFilter, status: true, name: songUrl });
  return { ...trackFilter, status: true, name: songUrl };
};

export default playedSongsStruct;

// NEED TO REFACTOR PLAYEDSONGSSTRUCT
