export const convertMillsToMin = (ms) => {
  const THOUSAND = 1000;
  const SIXTY = 60;

  const minutes = ((ms / THOUSAND) / SIXTY);
  const minutesHouse = Math.trunc(minutes);
  return minutesHouse;
};

export const convertMillsToSeconds = (ms) => {
  const THOUSAND = 1000;
  const SIXTY = 60;

  const seconds = ((ms / THOUSAND) % SIXTY);
  const secondsHouse = Math.round(seconds);

  const TEN = 10;
  if (secondsHouse < TEN) {
    const verifier = [0, secondsHouse];
    return verifier.join('');
  }
  return secondsHouse;
};
