import APIRequest from '../api/api';
import { login } from "../actions/actions";

const initialState = () => {
  let userData = {
    userData: {
      isAuthenticated: false,
      username: ''
  }};

  APIRequest('auth/identify/', { method: "GET" })
    .then((response) => window.store.dispatch(login({ username: response.data.user.username })))
    .catch();

  return userData;
};  

const logout = () => {
  APIRequest('auth/', { method: "DELETE" })
}

const rootReducer = (state = initialState(), action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state, userData: {
          isAuthenticated: true,
          username: action.payload.username
        }
      };
    case 'LOGOUT':
      logout();
      return {
        ...state, userData: {
          isAuthenticated: false,
          username: ''
        }
      };
    default:
      return state;
  }
};

export default rootReducer;
