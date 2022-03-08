export const type = {
  GET_USERS_START: "GET_USERS_START",
  GET_USERS_SUCCESS: "GET_USERS_SUCCESS",
  GET_USERS_FAILED: "GET_USERS_FAILED",

  DELETE_USER_START: "DELETE_USER_START",
  DELETE_USER_SUCCESS: "DELETE_USER_SUCCESS",
  DELETE_USER_FAILED: "DELETE_USER_FAILED",
};

export function getUsers() {
  return {
    type: type.GET_USERS_START,
  };
}

export function deleteUser(id) {
  return {
    type: type.DELETE_USER_START,
    payload: id,
  };
}
