import { enableRenderAlbumAct, inputSearchAct, setSongPlayedAct } from '../../actions';
import fetchAlbumInRedux from '../../thunk/fetchAlbumInRedux';
import fetchMusicsInRedux from '../../thunk/fetchMusicsInRedux';
import store from '../../store/index';
import fetchSongWithoutRedirect from '../../thunk/fetchSongWithoutRedirect';

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

export const handlePlayInFriend = async (collectionId, musicName) => {
  const response = await fetchSongWithoutRedirect(collectionId); // is an array of objects

  const findFriendSong = response.find((sng) => sng.trackName === musicName); // need to refactor my friends data to catch trackId...
  console.log(findFriendSong);

  if (findFriendSong) {
    const dataToSet = {
      ...findFriendSong,
      status: true,
      name: findFriendSong.previewUrl };
    dispatch(setSongPlayedAct(dataToSet));
  }
};
