import { addSong, removeSong } from '../../services/favoriteSongsAPI';
import isFavoriteSong from './isFavoriteSong';

// toToggle: is a object containing { favoritesToSidebar, played, setFavorite };
const toggleFavorite = (toToggle) => {
  const { favoritesToSidebar, played, setFavorite } = toToggle;
  const isFavorite = isFavoriteSong(favoritesToSidebar, played);

  if (isFavorite) {
    const rmvFav = favoritesToSidebar.filter((sng) => sng.trackId !== played.trackId);
    removeSong(played); // rmv from localStorage
    return setFavorite(rmvFav); // redux, att the globalState
  }

  const attFavorites = [...favoritesToSidebar, played];
  addSong(played);
  setFavorite(attFavorites);
};

export default toggleFavorite;
