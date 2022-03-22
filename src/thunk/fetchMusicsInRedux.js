import { responseMusicsAct, saveAlbumNameAct } from '../actions';

const fetchMusics = (id) => async (dispatch) => {
  const url = `https://itunes.apple.com/lookup?id=${id}&entity=song`;

  try {
    const request = await fetch(url);
    const { results } = await request.json();
    dispatch(saveAlbumNameAct(results[0]));
    dispatch(responseMusicsAct(results.slice(1)));
  } catch (error) {
    dispatch(responseMusicsAct(error));
  }
};

export default fetchMusics;
