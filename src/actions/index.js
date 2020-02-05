import { SIGN_IN, SIGN_OUT, SIGN_IN_EMAIL } from "./types";

export const signIn = userId => {
  return {
    type: SIGN_IN,
    payload: userId
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT
  };
};

export const signInEmail = userId => {
  return {
    type: SIGN_IN_EMAIL,
    payload: userId
  };
};
