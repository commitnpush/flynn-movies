import axios from "axios";

const defaultParams = {
  api_key: "256d566a87a438becb17c776bd65e4e4",
  language: "es-US",
};

class Api {
  static get = (url, params = {}) =>
    axois.get(url, { params, ...this.defaultParams });
}

export const TVApi = {
  nowPlaying: () => Api.get("movie/now_playing"),
  upcoming: () => Api.get("movie/upcoming"),
  popular: () => Api.get("movie/popular"),
  movieDetail: (id) =>
    Api.get(`movie/${id}`, { params: { append_to_response: "videos" } }),
  search: (search) =>
    Api.get("search/movie", { query: encodeURIComponent(search) }),
};
export const MoviesApi = {
  topRated: () => Api.get("tv/top_rated"),
  popular: () => Api.get("tv/popular"),
  aringToday: () => Api.get("tv/ariing_today"),
  showDetail: (id) =>
    Api.get(`tv/${id}`, { params: { append_to_response: "videos" } }),
  search: (search) =>
    Api.get("search/tv", { query: encodeURIComponent(search) }),
};
