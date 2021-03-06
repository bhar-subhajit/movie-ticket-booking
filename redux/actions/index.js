import { FETCH_ALL_MOVIES, FILTER_MOVIES, SELECT_MOVIE } from "./actionTypes";

export function fetchAllMovies(payload) {
  return {
    type: FETCH_ALL_MOVIES,
    payload,
  };
}

export function filterMovies(payload) {
  return {
    type: FILTER_MOVIES,
    payload,
  };
}

export function selectMovie(payload) {
  return {
    type: SELECT_MOVIE,
    payload,
  };
}
