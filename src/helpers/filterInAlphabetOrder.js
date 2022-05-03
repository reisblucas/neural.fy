const filterInAlphabetOrder = (tracks) => {
  const tracksClone = [...tracks];
  return tracksClone.sort((a, b) => (a).localeCompare(b));
};

export default filterInAlphabetOrder;
