import { type } from "../actions/users";

const initialState = {
  id: null,
  users: [],
  loading: false,
  error: null,
};

export default function users(state = initialState, action) {
  switch (action.type) {
    // GET
    case type.GET_USERS_START:
    case type.DELETE_USER_START:
      return {
        ...state,
        loading: true,
      };
    case type.GET_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.users,
      };
    case type.GET_USERS_FAILED:
    case type.DELETE_USER_FAILED:
      return {
        ...state,
        loading: false,
        error: action.message,
      };
    // DELETE
    case type.DELETE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        users: state.users.filter((item) => item.id !== action.id),
      };
    // DEFAULT
    default:
      return state;
  }
}
