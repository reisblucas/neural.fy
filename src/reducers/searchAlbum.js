import {
  ENABLE_RENDER_AFTER_CLICK_ON_LINK,
  INPUT_SEARCH,
  SEARCH_ALBUM,
} from '../actions';

const initialState = {
  inputSearch: '',
  results: [],
  render: false,
};

const searchAlbum = (state = initialState, action) => {
  switch (action.type) {
  case SEARCH_ALBUM:
    return {
      ...state,
      results: action.response,
      render: false,
    };

  case INPUT_SEARCH:
    return {
      ...state,
      inputSearch: action.inputValue,
    };

  case ENABLE_RENDER_AFTER_CLICK_ON_LINK:
    return {
      ...state,
      render: action.boolStringfied,
    };

  default:
    return state;
  }
};

export default searchAlbum;
