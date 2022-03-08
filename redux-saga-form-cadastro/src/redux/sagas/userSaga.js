import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { type } from "../actions/users";
import api from "../../services/api";

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

function getApi() {
  return api
    .get("/users")
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
}

function* getUsers(action) {
  try {
    yield delay(1000);
    const users = yield call(getApi);
    yield put({ type: type.GET_USERS_SUCCESS, users: users });
  } catch (e) {
    yield put({ type: type.GET_USERS_FAILED, message: e.message });
  }
}

function deleteApi(payload) {
  return api
    .delete(`/users/${payload}`)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return err.response;
    });
}

function* deleteUser({ payload }) {
  try {
    yield delay(1000);
    const response = yield deleteApi(payload);
    console.log(response);
    console.log(response.statusText);
    if (response.status === 200 && response.status < 300) {
      yield put({ type: type.DELETE_USER_SUCCESS, id: payload });
    } else {
      yield put({
        type: type.DELETE_USER_FAILED,
        message: response.statusText,
      });
    }
  } catch (e) {
    console.log("erro: " + e);
    yield put({ type: type.DELETE_USER_FAILED, message: e.message });
  }
}

export function* getUsersStart() {
  yield takeLatest(type.GET_USERS_START, getUsers);
}

export function* deleteUsersStart() {
  yield takeLatest(type.DELETE_USER_START, deleteUser);
}
