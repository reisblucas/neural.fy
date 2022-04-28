import { SET_MUSIC_PLAYER, PLAYED_SONG, VOLUME_SONG } from '../actions';

const initialState = {
  songs: [],
  played: {
    status: false,
    name: '',
  },
  volume: 1.0,
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

  case VOLUME_SONG:
    return {
      ...state,
      volume: action.volumeChanged,
    };

  default:
    return state;
  }
};

export default musicsToPlayer;
