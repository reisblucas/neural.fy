import { SET_MUSIC_PLAYER, PLAYED_SONG } from '../actions';

const initialState = {
  songs: [],
  songsDefault: [],
  played: {
    status: false,
    name: '',
  },
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

  case SET_SONGS_DEFAULT:
    return {
      ...state,
      songsDefault: action.sngDefault,
    };

  default:
    return state;
  }
};

export default musicsToPlayer;
