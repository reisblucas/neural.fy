import { SET_MUSIC_PLAYER, PLAYED_SONG } from '../actions';

const initialState = {
  musics: [],
  played: {
    status: false,
    songName: '',
  },
};

const musicsToPlayer = (state = initialState, action) => {
  switch (action.type) {
  case SET_MUSIC_PLAYER:
    return {
      ...state,
      musics: action.arrMusics,
    };

  case PLAYED_SONG:
    return {
      ...state,
      played: action.playedObj,
    };

  default:
    return state;
  }
};

export default musicsToPlayer;
