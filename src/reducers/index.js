import { combineReducers } from 'redux';
import responseMusics from './responseMusics';
import searchAlbum from './searchAlbum';

const rootReducer = combineReducers({
  searchAlbum,
  responseMusics,
});

export default rootReducer;
