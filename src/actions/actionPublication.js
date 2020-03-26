import { FETCH_PUBLICATIONLINECARDS, EDIT_PUBLICATIONLINECARD, DELETE_PUBLICATIONLINECARD, FETCH_PUBLICATIONLINECARD, CREATE_PUBLICATIONLINECARD } from "./types";
import history from "../history";


const axios = require("axios").default;
axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');

export const fetchPublicationLineCards = () => async dispatch => {
  const response = await axios.get('http://localhost:8080/publication/list')

  dispatch({ type: FETCH_PUBLICATIONLINECARDS, payload: response.data })
}

export const editPublicationLineCard = (formValues) => async dispatch => {
  const response = await axios.put(`http://localhost:8080/publication/edit`, formValues)

  dispatch({ type: EDIT_PUBLICATIONLINECARD, payload: response.data })
  window.alert("Publication modifié !");
  history.push('/admin/administration')

}

export const deletePublicationLineCard = id => async dispatch => {
  await axios.get(`http://localhost:8080/publication/delete/${id}`)

  dispatch({ type: DELETE_PUBLICATIONLINECARD, payload: id })
  window.alert("Publication supprimé !");
  history.push('/admin/administration')


}

export const fetchPublicationLineCard = id => async dispatch => {
  const response = await axios.get(`http://localhost:8080/publication/findbyid/${id}`)

  dispatch({ type: FETCH_PUBLICATIONLINECARD, payload: response.data })
}

export const createPublicationLineCard = formValues => async dispatch => {
  const response = await axios.post("http://localhost:8080/publication/save", {
    ...formValues
  });

  dispatch({ type: CREATE_PUBLICATIONLINECARD, payload: response.data });

  window.alert("Publication créé !");
  history.push('/admin/administration')

};