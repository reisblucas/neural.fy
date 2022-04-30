import { SET_MUSIC_PLAYER, PLAYED_SONG, SET_PLAYER_REFS } from '../actions';

const initialState = {
  songs: [],
  played: {
    status: false,
    name: '',
  },
  refs: {},
};

const musicsToPlayer = (state = initialState, action) => {
  switch (action.type) {
  case SET_MUSIC_PLAYER:
    return {
      ...state,
      songs: action.arrMusics,
    };

  case PLAYED_SONG:
    return {
      ...state,
      played: action.playedObj,
    };

  case SET_PLAYER_REFS:
    return {
      ...state,
      refs: { ...refs, [action.reference]: action.reference },
    };

  default:
    return state;
  }
};

export default musicsToPlayer;
