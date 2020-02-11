import { SIGN_IN, SIGN_OUT, LOGIN_EMAIL, SIGN_IN_EMAIL } from "./types";

import history from "../history";
import jwt from "jwt-decode";

const axios = require("axios").default;

export const signIn = userId => {
  return {
    type: SIGN_IN,
    payload: userId
  };
};

export const signOut = () => {
  localStorage.clear();
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

export const connexionEmail = formValues => async dispatch => {
  const response = await axios.post("http://localhost:8080/login", {
    ...formValues
  });

  const token = response.headers.authorization;
  localStorage.setItem("token", token);
  const user = jwt(token);

  console.log(user);
  console.log("je suis la bro");
  dispatch({ type: LOGIN_EMAIL, payload: response, user });

  history.push("/");
};
