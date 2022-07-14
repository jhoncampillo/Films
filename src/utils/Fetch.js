const API = "https://api.themoviedb.org/3";
export const Fetch = (path) => {
  return fetch(API + path, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MGYzODZiOWJkZjliYThiNGQzN2ExMDJiYWM3NTVhYiIsInN1YiI6IjYyODgyZmRkOGQyZjhkMDA2NjlmYTkzYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vbGXUUv6fQhCezQHZ7O4kcr6Uszi1m-vJUOBHxpmnOk",
      "Content-Type": "application/json;charset=utf-8",
    },
  }).then((result) => result.json());
};
