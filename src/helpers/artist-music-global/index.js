import { enableRenderAlbumAct, inputSearchAct } from '../../actions';
import fetchAlbumInRedux from '../../thunk/fetchAlbumInRedux';
import fetchMusicsInRedux from '../../thunk/fetchMusicsInRedux';
import store from '../../store/index';

const { dispatch } = store;

export const handleMusicNameClick = async (artistName, collectionId) => {
  await dispatch(fetchAlbumInRedux(artistName));
  dispatch(fetchMusicsInRedux(collectionId));
  dispatch(inputSearchAct(artistName));
};

export const handleArtistNameClick = async (artistName) => {
  await dispatch(fetchAlbumInRedux(artistName));
  dispatch(inputSearchAct(artistName));
  dispatch(enableRenderAlbumAct(true));
};

export const resetSearch = async () => {
  await dispatch(inputSearchAct(''));
  dispatch(fetchAlbumInRedux([]));
};

export const enableRender = async (bool) => {
  await dispatch(enableRenderAlbumAct(bool));
};
