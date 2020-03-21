import { SIGN_IN, SIGN_OUT, LOGIN_EMAIL, LOGOUT_EMAIL } from "./types";

import jwt from "jwt-decode";

const axios = require("axios").default;

//se connecter avec google
export const signIn = userId => {
  localStorage.setItem("isSignedIn", true);
  return {
    type: SIGN_IN,
    payload: userId
  };
};

//se déconnecter de google
export const signOut = () => {
  localStorage.removeItem("isSignedIn");
  localStorage.removeItem("isAdmin");

  return {
    type: SIGN_OUT
  };
};

//se connecter avec email
export const connexionEmail = formValues => async dispatch => {
  const response = await axios.post("http://localhost:8080/login", {
    ...formValues
  });

  const token = response.headers.authorization;

  localStorage.setItem("token", token);
  localStorage.setItem("isSignedInEmail", true);

  const user = jwt(token);
  console.log('user  info :', user);

  if (user.roles[0].authority === "ROLE_ADMIN") {
    localStorage.setItem("isAdmin", "true");
  }

  dispatch({ type: LOGIN_EMAIL, payload: response, user });

  //history.push("/");
};

// se déconneceter email
export const logoutEmail = () => {
  localStorage.removeItem("isSignedInEmail");
  localStorage.removeItem("token");
  localStorage.removeItem("isSignedIn");
  return {
    type: LOGOUT_EMAIL
  };
};
