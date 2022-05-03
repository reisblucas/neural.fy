const shuffler = (arr) => {
  const totalItems = arr.length;

  const newOrder = [];
  for (let i = 0; i <= totalItems; i += 1) { newOrder.push(i); }

  const ZERO_DOT_FIVE = 0.5;
  const shuffled = [...newOrder].sort(() => Math.random() - ZERO_DOT_FIVE);

  console.log('before', newOrder);
  console.log('after', shuffled);

  return shuffled;
};

export default shuffler;
