export const SEARCH_ALBUM = 'SEARCH_ALBUM';
export const INPUT_SEARCH = 'INPUT_SEARCH';
export const ENABLE_RENDER_AFTER_CLICK_ON_LINK = 'ENABLE_RENDER_AFTER_CLICK_ON_LINK';

export const inputSearchAct = (inputValue) => ({
  type: INPUT_SEARCH,
  inputValue,
});

export const searchAlbumAct = (response) => ({
  type: SEARCH_ALBUM,
  response,
});

export const enableRenderAlbumAct = (boolStringfied) => ({
  type: ENABLE_RENDER_AFTER_CLICK_ON_LINK,
  boolStringfied,
});
