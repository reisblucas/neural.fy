import { SET_MUSIC_PLAYER } from '../actions';

const initialState = {
  musics: [],
};

const musicsToPlayer = (state = initialState, action) => {
  switch (action.type) {
  case SET_MUSIC_PLAYER:
    return {
      ...state,
      musics: action.arrMusics,
    };

  default:
    return state;
  }
};

export default musicsToPlayer;
