export const getVideo = async (query) => {
  const url = `https://www.googleapis.com/youtube/v3/search?key=AIzaSyCmqsyYb-3RDBlQQHqJa_NgZwcjkmeJptQ&type=video&videoEmbeddable=true&q=${query}`;

  const request = await fetch(url);
  const response = await request.json();
  console.log(response);
};

export const test = 'lucas';
