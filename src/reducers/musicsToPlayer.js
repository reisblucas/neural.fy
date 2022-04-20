import { SET_MUSIC_PLAYER, PLAYED_SONG,
  // AUDIO_PLAYCER_REF,
} from '../actions';

const initialState = {
  songs: [],
  played: {
    status: false,
    name: '',
  },
  // audioRef: () => {},
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

    // case AUDIO_PLAYCER_REF:
    //   return {
    //     ...state,
    //     audioRef: action.audioRef,
    //   };

  default:
    return state;
  }
};

export default musicsToPlayer;
