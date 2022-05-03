import { combineReducers } from 'redux';
import musicsToPlayer from './musicsToPlayer';
import responseMusics from './responseMusics';
import searchAlbum from './searchAlbum';

const rootReducer = combineReducers({
  searchAlbum,
  responseMusics,
  musicsToPlayer,
});

export default rootReducer;
