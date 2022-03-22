import { combineReducers } from 'redux';
import favHeader from './favHeader';
import responseMusics from './responseMusics';
import searchAlbum from './searchAlbum';

const rootReducer = combineReducers({
  searchAlbum,
  responseMusics,
  favHeader,
});

export default rootReducer;
