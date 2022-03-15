import { SEARCH_ARTIST } from '../actions';

const initialState = {

};

const searchArtist = (state = initialState, action) => {
  switch (action.type) {
  case SEARCH_ARTIST:
    return {
      ...state,

    };

  default:
    return state;
  }
};

export default searchArtist;
