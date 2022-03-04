const THOUSAND = 1000;
const SIXTY = 60;

export const convertMillsToMin = (ms) => {
  const minutes = ((ms / THOUSAND) / SIXTY);
  const minutesHouse = Math.trunc(minutes);
  return minutesHouse;
};

export const convertMillsToSeconds = (ms) => {
  const seconds = ((ms / THOUSAND) % SIXTY);
  const secondsHouse = Math.round(seconds);

  const TEN = 10;
  if (secondsHouse < TEN) {
    const verifier = [0, secondsHouse];
    return verifier.join('');
  }
  return secondsHouse;
};

export const totalAlbumTime = (tracks) => {
  const totalTime = tracks
    .reduce((acc, { trackTimeMillis }) => acc += trackTimeMillis, 0);

  const hoursHouse = (((totalTime / THOUSAND) / SIXTY) / SIXTY); // ms / s / min / h
  const hours = Math.trunc(hoursHouse);

  const minutesHouse = hoursHouse.toFixed(2).toString().split('.')[1];
  const minutesToNum = +`0.${minutesHouse}`;
  const minutes = Math.round(minutesToNum * SIXTY);

  if (hours <= 0) {
    return `${minutes} min`;
  }
  return `${hours} hr ${minutes} min`;
};
