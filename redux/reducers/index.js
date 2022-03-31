import { combineReducers } from "redux";

const initialState = {
  movies: [],
  selectedMovie: null,
  loading: false,
  filteredMovies: [],
};

const movie = function (state = initialState, action) {
  switch (action.type) {
    case "FETCH_ALL_MOVIES":
      return { ...state, loading: true };
    case "ALL_MOVIES_FETCH_SUCCESS":
      return {
        ...state,
        loading: false,
        movies: action.movies,
        filteredMovies: action.movies,
      };
    case "FILTER_MOVIES":
      return {
        ...state,
        filteredMovies: state.movies.filter((movie) =>
          movie.title.toLowerCase().includes(action.payload.toLowerCase())
        ),
      };
    case "SELECT_MOVIE":
      return {
        ...state,
        selectedMovie: action.payload,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  movie,
});

export default rootReducer;
