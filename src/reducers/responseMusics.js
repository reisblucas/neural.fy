import {
  RESPONSE_MUSICS,
  SAVE_FAVORITE_MUSICS,
  SORT_FAV_MUSICS,
  SORT_MUSIC,
} from '../actions';

const initialState = {
  tracks: [],
  sortedTracks: [],
  favorites: [],
  favoritesToSidebar: [],
};

const responseMusics = (state = initialState, action) => {
  switch (action.type) {
  case RESPONSE_MUSICS:
    return {
      ...state,
      tracks: action.musics,
    };

  case SORT_MUSIC:
    return {
      ...state,
      tracks: action.sorted,
    };

  case SAVE_FAVORITE_MUSICS:
    return {
      ...state,
      favorites: action.favorites,
      favoritesToSidebar: action.favorites,
    };

  case SORT_FAV_MUSICS:
    return {
      ...state,
      favorites: action.sortedFav,
    };

  default:
    return state;
  }
};

export default responseMusics;
