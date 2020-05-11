import { SIGN_IN, SIGN_OUT, LOGIN_EMAIL, LOGOUT_EMAIL, SIGN_UP_EMAIL, SIGN_IN_GOOGLE_MAIL } from "./types";
import { ElasticBeanStalk } from "../variables/general";
import { NotificationManager } from 'react-notifications';


import jwt from "jwt-decode";
import history from "../history";

const axios = require("axios").default;
axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');

//se connecter avec google
export const signIn = (userId) => {
  localStorage.setItem("isSignedIn", true);
  return {
    type: SIGN_IN,
    payload: userId,
  };
};

//se déconnecter de google
export const signOut = () => {
  localStorage.removeItem("isSignedIn");
  localStorage.removeItem("isAdmin");
  localStorage.removeItem("isSignedInEmail");
  localStorage.removeItem("token");
  localStorage.removeItem("login");
  localStorage.removeItem("pseudo");

  return {
    type: SIGN_OUT
  };
};

//se connecter avec email
export const connexionEmail = formValues => async dispatch => {
  await axios.post(`${ElasticBeanStalk}/login`, {
    ...formValues
  }).then(res => {

    if (res.status === 200) {

      const token = res.headers.authorization;

      localStorage.setItem("token", token);
      localStorage.setItem("isSignedInEmail", true);

      const user = jwt(token);

      if (user.roles[0].authority === "ROLE_ADMIN") {
        localStorage.setItem("isAdmin", "true");
      }

      localStorage.setItem("login", user.sub);

      let pseudo;
      let login = user.sub;

      // axios pour récuperer le pseudo de l'tilisateur, le finnaly assure qu'on dispatch no matter what
      axios.get(`${ElasticBeanStalk}/user/retrievepseudo/${login}`).then(res => {

        if (res.status === 200) {
          //console.log(" réponse 200, la le pseudo est :", res.data)
          pseudo = res.data;
          localStorage.setItem("pseudo", pseudo);

        }

      }).catch((error) => {
        // Error 😨
        if (error.res) {

          console.log("error 1 : request http recup pseudo", error.res.data, "cacth1 ", error.res.status);
        } else if (error.request) {
          console.log("error 2 : no response request http ", error.res.data);
        } else {
          console.log('Error  http request Something happened in setting up the request and triggered an Error ', error.message);
        }
        console.log("bilan de l'erreur :", error.config);
      }).finally(() => {

        //console.log("la 2 pseudo est : ", pseudo);
        dispatch({ type: LOGIN_EMAIL, payload: res, user, pseudo });

        NotificationManager.info('Bonjour =)', 'Vous êtes connecté', 3000);

      });
    }

  }).catch((error) => {
    // Error login😨
    if (error.response) {

      console.log("error 1 : login http ", error.response.data, "cacth1 ", error.response.status);
      NotificationManager.error('Veuillez réessayer', 'Mot de passe erroné', 3000);
    } else if (error.request) {
      console.log("error 2 : no response login request http ", error.response.data);
    } else {
      console.log('Error login  http request Something happened in setting up the request and triggered an Error ', error.message);
    }
    console.log("bilan de l'erreur :", error.config);
  }).finally(() => {

  });
}

// se déconneceter email
export const logoutEmail = () => {
  localStorage.removeItem("isSignedInEmail");
  localStorage.removeItem("token");
  localStorage.removeItem("isSignedIn");
  localStorage.removeItem("isAdmin");
  localStorage.removeItem("login");
  localStorage.removeItem("pseudo");

  NotificationManager.warning('à bientôt =)', 'Vous êtes déconnecté', 3000);

  history.push("/admin/dashboard");

  return {
    type: LOGOUT_EMAIL
  };
};

//action de création via une connexion google
export const createUserGoogle = login => async dispatch => {
  let password = null;
  await axios.post(`${ElasticBeanStalk}/user/save`, {
    login, password
  }).then(response => {

    console.log("response", response);
    dispatch({ type: SIGN_UP_EMAIL, payload: response.data });

  }).catch((error) => {
    // Error 😨
    if (error.response) {
      console.log("error 1 : request http USER/SAVE : duplicate entry", error.response.data, "cacth1 ", error.response.status);
    } else if (error.request) {
      console.log("error 2 : no response request http ", error.response.data);
    } else {
      console.log('Error  http request Something happened in setting up the request and triggered an Error ', error.message);
    }
    console.log("bilan de l'erreur :", error.config);
  });

};

export const connexionEmailGoogle = user => async dispatch => {
  let pseudo;
  let token;
  let login = user.googleLogin;

  var xhr = new XMLHttpRequest();
  xhr.open('POST', `${ElasticBeanStalk}/user/googletoken`);
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xhr.onload = function () {
    if (localStorage.getItem("isSignedIn")) {
      token = xhr.responseText;
      localStorage.setItem("token", token);
      localStorage.setItem("login", login);
    }
  };
  xhr.send(user.googleIdToken);

  // axios pour récuperer le pseudo de l'tilisateur, le finnaly assure qu'on dispatch no matter what
  axios.get(`${ElasticBeanStalk}/user/retrievepseudo/${login}`).then(res => {

    if (res.status === 200) {
      //console.log(" réponse 200, la le pseudo est :", res.data)
      pseudo = res.data;

      if (localStorage.getItem("isSignedIn")) {
        localStorage.setItem("pseudo", pseudo);
      }

    }

  }).catch((error) => {
    // Error 😨
    if (error.response) {

      console.log("error 1 : request http recup pseudo", error.response.data, "cacth1 ", error.response.status);
    } else if (error.request) {
      console.log("error 2 : no response request http ", error.response.data);
    } else {
      console.log('Error  http request Something happened in setting up the request and triggered an Error ', error.message);
    }
    console.log("bilan de l'erreur :", error.config);
  }).finally(() => {

    dispatch({ type: SIGN_IN_GOOGLE_MAIL, login, pseudo, token });

  });
};
