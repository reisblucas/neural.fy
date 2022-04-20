// const played = { status: true, name: songUrl };
// setPlayedSongs(played);

const playedSongsStruct = (trackData, songs, songUrl, setPlayedSongs) => {
  if (songs.length === 0) {
    console.log('to no songs');
    const trackFilter = trackData.filter(({ previewUrl }) => previewUrl === songUrl)[0];
    setPlayedSongs({ ...trackFilter, status: true, name: songUrl });
    return { ...trackFilter, status: true, name: songUrl };
  }

  if (trackData === 'Do nothing!') {
    console.log('to no tracksdata');

    const trackFilter = songs.filter(({ previewUrl }) => previewUrl === songUrl)[0];
    setPlayedSongs({ ...trackFilter, status: true, name: songUrl });
    return { ...trackFilter, status: true, name: songUrl };
  }

  console.log('random return?');
};

export default playedSongsStruct;
