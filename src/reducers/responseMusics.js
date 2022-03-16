import { RESPONSE_MUSICS, SAVE_FAVORITE_MUSICS, SORT_MUSIC } from '../actions';

const initialState = {
  tracks: [],
  sortedTracks: [],
  favorites: [],
};

const responseMusics = (state = initialState, action) => {
  switch (action.type) {
  case RESPONSE_MUSICS:
    return {
      ...state,
      tracks: action.musics,
    };

  case SAVE_FAVORITE_MUSICS:
    return {
      ...state,
      favorites: action.favorites,
    };

  case SORT_MUSIC:
    return {
      ...state,
      sortedTracks: action.sorted,
    };

  default:
    return state;
  }
};

export default responseMusics;
