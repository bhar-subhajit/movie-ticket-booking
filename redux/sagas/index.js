import { all, call, delay, put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import {
  ALL_MOVIES_FETCH_SUCCESS,
  FETCH_ALL_MOVIES,
} from "../actions/actionTypes";

export function* fetchAllMovies() {
  const { data } = yield axios.get(
    "http://5dff-150-129-132-99.ngrok.io/movies"
  ); //configured for Android Emulators
  yield put({ type: ALL_MOVIES_FETCH_SUCCESS, movies: data });
}

export function* watchFetchAllMovies() {
  yield takeEvery(FETCH_ALL_MOVIES, fetchAllMovies);
}

// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([call(watchFetchAllMovies)]);
}
