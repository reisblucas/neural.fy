import { SAVE_URL } from '../actions';

const initialState = 'url';

const url = (state = initialState, action) => {
  switch (action.type) {
  case SAVE_URL:
    return action.url;

  default:
    return state;
  }
};

export default url;
