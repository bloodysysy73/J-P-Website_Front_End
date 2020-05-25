import { SIGN_UP_EMAIL } from "./types";
import { NotificationManager } from 'react-notifications';

import {
  FETCH_UTILISATEURS,
  EDIT_UTILISATEUR,
  EDIT_UTILISATEURIMG,
  DELETE_UTILISATEUR,
  FETCH_UTILISATEUR,
  SORT_BY_LOGIN_USER,
  SORT_BY_DATE_USER,
  FETCH_UTILISATEUR_LOGIN,
  EDIT_UTILISATEURURLIMG,
  EDIT_UTILISATEUR2,
  DISCONNECT_UTILISATEUR
} from "./types";

import history from "../history";
import { URL } from "../variables/general";

const axios = require("axios").default;
axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');

export const getAll = () => { };

//se créer un compte avec email
export const createUser = formValues => async dispatch => {
  const response = await axios.post(`${URL}/user/save`, {
    ...formValues
  });

  dispatch({ type: SIGN_UP_EMAIL, payload: response.data });

  NotificationManager.success('nous somme heureux de vous compter parmis nous', 'Profil créé', 4000);
  history.push('/admin/dashboard')

};

export const fetchUtilisateurs = () => async dispatch => {
  const response = await axios.get(`${URL}/user/list`)

  dispatch({ type: FETCH_UTILISATEURS, payload: response.data })
}

export const editUtilisateur = (formValues) => async dispatch => {
  const response = await axios.put(`${URL}/user/edit`, formValues)

  dispatch({ type: EDIT_UTILISATEUR, payload: response.data })
  dispatch({ type: EDIT_UTILISATEUR2, payload: response.data })

  NotificationManager.success(' =) ', 'Profil modifié !', 4000, () => {
    history.push('/admin/administration')
  });
}

//TODO faire marcher les realod et la notif en meme temps ou mettre custom alert
export const editUtilisateurpage = (formValues) => async dispatch => {
  const response = await axios.put(`${URL}/user/edit`, formValues)

  dispatch({ type: EDIT_UTILISATEUR, payload: response.data })
  dispatch({ type: EDIT_UTILISATEUR2, payload: response.data })
  alert();
}

export const editUtilisateurImgBlob = (user) => async dispatch => {
  const response = await axios.put(`${URL}/user/updateBlobImg`, user)

  dispatch({ type: EDIT_UTILISATEURIMG, payload: response.data })
  dispatch({ type: EDIT_UTILISATEUR, payload: response.data })
  dispatch({ type: EDIT_UTILISATEUR2, payload: response.data })

  alert();
}

const alert = () => {
  NotificationManager.success(' =) ', 'Profil modifié !', 4000)
  history.push('/admin/user-page')
}

export const setimageProfil = (URL, user) => {

  user = { ...user, URL: URL }

  return {
    type: EDIT_UTILISATEURURLIMG,
    payload: user
  }
}

export const deleteUtilisateur = id => async dispatch => {

  await axios.get(`${URL}/user/delete/${id}`)
  dispatch({ type: DELETE_UTILISATEUR, payload: id })
  history.push('/admin/administration')
  NotificationManager.warning('Utilisateur supprimé !', 4000);

}

export const fetchUtilisateur = id => async dispatch => {
  const response = await axios.get(`${URL}/user/findbyid/${id}`)

  dispatch({ type: FETCH_UTILISATEUR, payload: response.data })
}

export const fetchUtilisateurbylogin = login => async dispatch => {
  const response = await axios.get(`${URL}/user/findbylogin/${login}`)

  dispatch({ type: FETCH_UTILISATEUR_LOGIN, payload: response.data })
}

export const disconnectUser = () => {
  return { type: DISCONNECT_UTILISATEUR }
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
