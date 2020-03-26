import { SIGN_UP_EMAIL } from "./types";
import { FETCH_UTILISATEURS, EDIT_UTILISATEUR, DELETE_UTILISATEUR, FETCH_UTILISATEUR } from "./types";

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
  history.push("/");
};

export const fetchUtilisateurs = () => async dispatch => {
  const response = await axios.get('http://localhost:8080/user/list')

  dispatch({ type: FETCH_UTILISATEURS, payload: response.data })
}

export const editUtilisateur = (formValues) => async dispatch => {
  const response = await axios.put(`http://localhost:8080/user/edit`, formValues)

  dispatch({ type: EDIT_UTILISATEUR, payload: response.data })
  window.alert("Profil modifié !");
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