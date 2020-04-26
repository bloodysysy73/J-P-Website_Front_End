import {
  SIGN_IN,
  SIGN_OUT,
  SIGN_UP_EMAIL,
  LOGIN_EMAIL,
  LOGOUT_EMAIL,
  SIGN_IN_GOOGLE_MAIL
} from "../actions/types";

const INITIAL_STATE = { isSignedIn: null, userId: null };

export default (state = INITIAL_STATE, action) => {
  // console.log("je suis dans le reducer, payload : " + action.payload);
  switch (action.type) {
    //se connecter avec google
    case SIGN_IN:
      return {
        ...state,
        isSignedIn: true,
        userId: action.payload,
      };
    //se déconnecter avec google
    case SIGN_OUT:
      return {
        ...state,
        isSignedIn: false,
        userId: null,
        role: null,
        isSignedInEmail: false,
        login: null,
        token: null,
        pseudo: null
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
        token: action.payload,
        role: action.user.roles[0].authority,
        pseudo: action.pseudo
      };
    //se déconnecter avec email
    case LOGOUT_EMAIL:
      return {
        ...state,
        isSignedInEmail: false,
        login: null,
        token: null
      };
    //se connecter avec google + email
    case SIGN_IN_GOOGLE_MAIL:
      return {
        ...state,
        isSignedIn: true,
        isSignedInEmail: true,
        login: action.login,
        token: action.token,
        pseudo: action.pseudo
      };
    default:
      return state;
  }
};
