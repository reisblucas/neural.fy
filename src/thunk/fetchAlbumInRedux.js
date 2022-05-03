import { searchAlbumAct } from '../actions';

const fetchAlbumInRedux = (artistNameURL) => async (dispatch) => {
  const url = `https://itunes.apple.com/search?entity=album&term=${artistNameURL}&attribute=allArtistTerm`;

  try {
    const request = await fetch(url);
    const { results } = await request.json();
    dispatch(searchAlbumAct(results));
  } catch (error) {
    dispatch(searchAlbumAct(error));
  }
};

export default fetchAlbumInRedux;
