export const handleMusicNameClick = async (artistName, collectionId) => {
  const { fetchAlbumThunk, fetchMusicsThunk, inputSearchGlobal } = this.props;
  fetchAlbumThunk(artistName);
  fetchMusicsThunk(collectionId);
  await inputSearchGlobal(artistName);
};

export const handleArtistNameClick = async ({ target: { innerText } }) => {
  const { inputSearchGlobal, searchAlbumGlobal, enableRender } = this.props;
  inputSearchGlobal(innerText);
  await searchAlbumGlobal(innerText);
  enableRender(true);
};
