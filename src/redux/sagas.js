import { all } from "redux-saga/effects";
import JobListing from "./features/saga";

export default function* rootSaga() {
  yield all([
    JobListing()
  ]);
}
