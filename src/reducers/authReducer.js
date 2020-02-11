import {
  SIGN_IN,
  SIGN_OUT,
  SIGN_IN_EMAIL,
  SIGN_UP_EMAIL,
  LOGIN_EMAIL
} from "../actions/types";

const INITIAL_STATE = { isSignedIn: null, userId: null };

export default (state = INITIAL_STATE, action) => {
  console.log("je suis dans le reducer, payload" + action.payload);
  switch (action.type) {
    case SIGN_IN:
      return { ...state, isSignedIn: true, userId: action.payload };
    case SIGN_IN_EMAIL:
      return { ...state, isSignedIn: true, userId: action.payload };
    case SIGN_OUT:
      return { ...state, isSignedIn: false, userId: null };
    case SIGN_UP_EMAIL:
      return {
        ...state,
        isSignedIn: false,
        userId: null,
        isSignedInEmail: null
      };
    case LOGIN_EMAIL:
      return {
        ...state,
        isSignedIn: false,
        userId: null,
        isSignedInEmail: true,
        login: action.user.sub
      };
    default:
      return state;
  }
};
