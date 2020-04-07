import { SIGN_IN, SIGN_OUT, LOGIN_EMAIL, LOGOUT_EMAIL } from "./types";

import jwt from "jwt-decode";
import history from "../history";


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

  localStorage.setItem("login", user.sub);
  retrievePseudo(user.sub);

  if (user.roles[0].authority === "ROLE_ADMIN") {
    localStorage.setItem("isAdmin", "true");
  }

  dispatch({ type: LOGIN_EMAIL, payload: response, user });
  alert("vous etes connecté");
  history.push('/admin/dashboard')
};

// se déconneceter email
export const logoutEmail = () => {
  localStorage.removeItem("isSignedInEmail");
  localStorage.removeItem("token");
  localStorage.removeItem("isSignedIn");
  localStorage.removeItem("isAdmin");
  localStorage.removeItem("login");
  localStorage.removeItem("pseudo");


  alert("vous etes déconnecté");
  return {
    type: LOGOUT_EMAIL
  };
};

//retrieve pseudo of user with the login

const retrievePseudo = async login => {
  const response = await axios.get(`http://localhost:8080/user/retrievepseudo/${login}`);

  localStorage.setItem("pseudo", response.data);


};
