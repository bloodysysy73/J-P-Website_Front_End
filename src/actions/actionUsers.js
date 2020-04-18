import { SIGN_UP_EMAIL } from "./types";
import {
  FETCH_UTILISATEURS,
  EDIT_UTILISATEUR,
  EDIT_UTILISATEURIMG,
  DELETE_UTILISATEUR,
  FETCH_UTILISATEUR,
  SORT_BY_LOGIN_USER,
  SORT_BY_DATE_USER,
  FETCH_UTILISATEUR_LOGIN
} from "./types";

import history from "../history";

const axios = require("axios").default;
axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');

export const getAll = () => { };

//se créer un compte avec email
export const createUser = formValues => async dispatch => {
  const response = await axios.post("http://localhost:8080/user/save", {
    ...formValues
  });

  dispatch({ type: SIGN_UP_EMAIL, payload: response.data });

  window.alert("Profil créé !");
  history.push('/admin/dashboard')
};

export const fetchUtilisateurs = () => async dispatch => {
  const response = await axios.get('http://localhost:8080/user/list')

  dispatch({ type: FETCH_UTILISATEURS, payload: response.data })
}

export const editUtilisateur = (formValues) => async dispatch => {
  const response = await axios.put(`http://localhost:8080/user/edit`, formValues)

  dispatch({ type: EDIT_UTILISATEUR, payload: response.data })
  history.push('/admin/administration')
  window.alert("Profil modifié !");
}

export const editUtilisateurpage = (formValues) => async dispatch => {
  const response = await axios.put(`http://localhost:8080/user/edit`, formValues)

  dispatch({ type: EDIT_UTILISATEUR, payload: response.data })
  window.alert("Profil modifié !");
  document.location.reload(true);
}

export const editUtilisateurImg = (user) => async dispatch => {
  const response = await axios.put(`http://localhost:8080/user/updateImg`, user)

  dispatch({ type: EDIT_UTILISATEURIMG, payload: response.data })
  window.alert("Photo de profile modifiée !");
  document.location.reload(true);
}

export const deleteUtilisateur = id => async dispatch => {

  await axios.get(`http://localhost:8080/user/delete/${id}`)
  dispatch({ type: DELETE_UTILISATEUR, payload: id })
  history.push('/admin/administration')
  window.alert("utilisateur supprimé !");

}

export const fetchUtilisateur = id => async dispatch => {
  const response = await axios.get(`http://localhost:8080/user/findbyid/${id}`)

  dispatch({ type: FETCH_UTILISATEUR, payload: response.data })
}

export const fetchUtilisateurbylogin = login => async dispatch => {
  const response = await axios.get(`http://localhost:8080/user/findbylogin/${login}`)

  dispatch({ type: FETCH_UTILISATEUR_LOGIN, payload: response.data })
}

export const sortList = (wtd, userList) => {

  if (wtd === 1) {
    //trier la liste par login
    userList.sort((a, b) => (a.login > b.login) ? 1 : (a.login === b.login) ? ((a.pseudo > b.pseudo) ? 1 : -1) : -1)

    return {
      type: SORT_BY_LOGIN_USER,
      payload: userList
    }
  } else if (wtd === 2) {
    //trier la liste par date d'inscription
    userList.sort((a, b) => (a.id > b.id) ? 1 : -1)

    return {
      type: SORT_BY_DATE_USER,
      payload: userList
    }
  }
}
