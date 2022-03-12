export default filterInAlphabetOrder = (tracks) => {
  const tracksClone = [...tracks];
  tracksClone.sort((a, b) => (a).localeCompare(b));
  return tracksClone;
};
