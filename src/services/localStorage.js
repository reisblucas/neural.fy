const INITIAL_VOLUME = 1;
const INITIAL_MUSIC = {};

export const saveInStorage = (key, value) => localStorage
  .setItem(key, JSON.stringify(value));

export const getInStorage = (key) => {
  const data = localStorage.getItem(key);

  const dataCondition = data === null || data === undefined;
  const volumeCondition = key === 'volume' && dataCondition;
  const lastSongCondition = key === 'lastSong' && dataCondition;

  if (volumeCondition) { saveInStorage(key, INITIAL_VOLUME); }
  if (lastSongCondition) { saveInStorage(key, INITIAL_MUSIC); }

  return JSON.parse(localStorage.getItem(key));
};
