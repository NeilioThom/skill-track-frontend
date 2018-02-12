import APIRequest from '../util/api';
import { login } from "../actions/actions";

const initialState = () => {
  let userData = {
    userData: {
      isAuthenticated: false,
      username: ''
  }};

  new APIRequest({
    url: 'http://localhost:8000/auth/identify/',
    method: "GET"
  })
  .then((response) => window.store.dispatch(login({ username: response.data.username })))
  .catch();

  return userData;
};

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
