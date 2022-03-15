export const SEARCH_ALBUM = 'SEARCH_ALBUM';
export const INPUT_SEARCH = 'INPUT_SEARCH';

export const inputSearchAct = (inputValue) => ({
  type: INPUT_SEARCH,
  inputValue,
});

export const searchAlbumAct = (response) => ({
  type: SEARCH_ALBUM,
  response,
});
