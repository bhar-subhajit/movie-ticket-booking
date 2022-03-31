import { all, call, delay, put, takeEvery } from "redux-saga/effects";
import axios from "axios";

export function* fetchAllMovies() {
  yield delay(2000);
  const { data } = yield axios.get(
    "http://7a7a-150-129-132-99.ngrok.io/movies"
  );
  yield put({ type: "ALL_MOVIES_FETCH_SUCCESS", movies: data });
}

export function* watchFetchAllMovies() {
  yield takeEvery("FETCH_ALL_MOVIES", fetchAllMovies);
}

// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([call(watchFetchAllMovies)]);
}
