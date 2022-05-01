const INITIAL_VOLUME = 1;

export const saveInStorage = (key, value) => localStorage
  .setItem(key, JSON.stringify(value));

export const getInStorage = (key) => {
  const data = localStorage.getItem(key);

  const dataCondition = data === null || data === undefined;
  const volumeCondition = key === 'volume' && dataCondition;

  if (volumeCondition) { saveInStorage(key, INITIAL_VOLUME); }

  return JSON.parse(localStorage.getItem(key));
};
