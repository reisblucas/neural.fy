export const playAudio = ({ currentTarget }) => {
  const url = currentTarget.attributes.name.value;
  const players = document.querySelectorAll('audio');

  players.forEach((player) => {
    const { id, paused } = player;
    // player.volume = 0.1;
    if (paused === false) return player.pause();

    const targetPlayer = id === url;
    if (targetPlayer) return player.play();
  });
};

export const placeSelectedClass = ({ target }) => {
  const classToFind = document.querySelector('.selectedMusic');

  const addClass = target.classList.add('selectedMusic');

  if (classToFind) {
    const excClass = classToFind.classList.remove('selectedMusic');
    return excClass && addClass;
  }
  return addClass;
};
