import { SET_MUSICS } from '../actions';

const initialState = {
  musics: [],
};

const musics = (state = initialState, action) => {
  switch (action.type) {
  case SET_MUSICS:
    return console.log('lucao');

  default:
    return state;
  }
};

export default musics;
