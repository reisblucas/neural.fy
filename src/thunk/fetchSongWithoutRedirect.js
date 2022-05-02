const fetchSongWithoutRedirect = async (id) => {
  const url = `https://itunes.apple.com/lookup?id=${id}&entity=song`;

  try {
    const request = await fetch(url);
    const { results } = await request.json();
    return results.slice(1);
  } catch (error) {
    return error;
  }
};

export default fetchSongWithoutRedirect;
