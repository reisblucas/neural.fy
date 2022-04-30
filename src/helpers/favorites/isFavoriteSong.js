const isFavoriteSong = (favoritesArr, played) => favoritesArr
  .some((sng) => sng.trackId === played.trackId);

export default isFavoriteSong;
