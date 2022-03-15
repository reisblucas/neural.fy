import { combineReducers } from 'redux';
import searchArtist from './searchArtist';

const rootReducer = combineReducers({
  searchArtist,
});

export default rootReducer;
