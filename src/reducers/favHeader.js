import { FAVORITES_SAVE } from '../actions';
import { getUser } from '../services/userAPI';

const initialState = {};

const favHeader = (state = initialState, action) => {
  switch (action.type) {
  case FAVORITES_SAVE:
    return action.saveFav;

  default:
    return state;
  }
};

export default favHeader;
