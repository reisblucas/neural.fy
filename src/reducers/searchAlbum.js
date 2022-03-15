import { INPUT_SEARCH, SEARCH_ALBUM } from '../actions';

const initialState = {
  inputSearch: '',
  results: [],
};

const searchAlbum = (state = initialState, action) => {
  switch (action.type) {
  case SEARCH_ALBUM:
    return {
      ...state,
      results: action.response,
    };

  case INPUT_SEARCH:
    return {
      ...state,
      inputSearch: action.inputValue,
    };

  default:
    return state;
  }
};

export default searchAlbum;
