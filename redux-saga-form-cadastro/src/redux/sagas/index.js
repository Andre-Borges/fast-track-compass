import { all } from "redux-saga/effects";
import { getUsersStart, deleteUsersStart } from "./userSaga";

export default function* rootSaga() {
  yield all([getUsersStart(), deleteUsersStart()]);
}
