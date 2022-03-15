export const SEARCH_ARTIST = 'SEARCH_ARTIST';

export const searchArtistAct = (name) => ({
  type: SEARCH_ARTIST,
  name,
});
