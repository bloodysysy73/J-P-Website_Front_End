import {
  SIGN_IN,
  SIGN_OUT,
  SIGN_UP_EMAIL,
  LOGIN_EMAIL,
  LOGOUT_EMAIL
} from "../actions/types";

const INITIAL_STATE = { isSignedIn: null, userId: null };

export default (state = INITIAL_STATE, action) => {
  console.log("je suis dans le reducer, payload : " + action.payload);
  switch (action.type) {
    //se connecter avec google
    case SIGN_IN:
      return {
        ...state,
        isSignedIn: true,
        userId: action.payload
      };
    //se déconnecter avec google
    case SIGN_OUT:
      return {
        ...state,
        isSignedIn: false,
        userId: null
      };
    //s'inscrire avec email
    case SIGN_UP_EMAIL:
      return {
        ...state,
        isSignedIn: false,
        userId: null,
        isSignedInEmail: false,
        login: null
      };
    //se connecter avec email
    case LOGIN_EMAIL:
      return {
        ...state,
        isSignedInEmail: true,
        login: action.user.sub,
        token: action.payload
      };
    //se déconnecter avec email
    case LOGOUT_EMAIL:
      return {
        ...state,
        isSignedInEmail: false,
        login: null,
        token: null
      };
    default:
      return state;
  }
};
