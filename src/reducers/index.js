import { combineReducers } from 'redux';
import responseMusics from './responseMusics';
import searchAlbum from './searchAlbum';
import url from './url';

const rootReducer = combineReducers({
  searchAlbum,
  responseMusics,
  url,
});

export default rootReducer;
