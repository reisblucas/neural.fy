const fetchAlbums = async (artistNameURL) => {
  const url = `https://itunes.apple.com/search?entity=album&term=${artistNameURL}&attribute=allArtistTerm`;

  try {
    const request = await fetch(url);
    const { results } = await request.json();
    return results;
  } catch (error) {
    return error;
  }
};

export default fetchAlbums;
