import { enableRenderAlbumAct, inputSearchAct, setMusicsToPlayerAct,
  setSongPlayedAct } from '../../actions';
import fetchAlbumInRedux from '../../thunk/fetchAlbumInRedux';
import fetchMusicsInRedux from '../../thunk/fetchMusicsInRedux';
import store from '../../store/index';
import fetchSongWithoutRedirect from '../../thunk/fetchSongWithoutRedirect';

const { dispatch, getState } = store;

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
  if (findFriendSong) {
    const dataToSet = {
      ...findFriendSong,
      status: true,
      name: findFriendSong.previewUrl };

    dispatch(setSongPlayedAct(dataToSet));
  }

  if (response[0]) { // when its not fail in request set to global
    dispatch(setMusicsToPlayerAct(response)); // set musics in global to work the next and prev player buttons
  }
};

export const handlePauseInFriend = () => {
  const global = getState();
  const { musicsToPlayer: { played } } = global;
  const audio = document.querySelector('audio');
  audio.pause();

  const dataToSet = { ...played, status: false };
  dispatch(setSongPlayedAct(dataToSet));
};
