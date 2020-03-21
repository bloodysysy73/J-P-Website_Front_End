import { FETCH_PUBLICATIONLINECARDS, EDIT_PUBLICATIONLINECARD, DELETE_PUBLICATIONLINECARD, FETCH_PUBLICATIONLINECARD } from "./types";


const axios = require("axios").default;
axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');

export const fetchPublicationLineCards = () => async dispatch => {
  const response = await axios.get('http://localhost:8080/publication/list')

  dispatch({ type: FETCH_PUBLICATIONLINECARDS, payload: response.data })
}

export const editPublicationLineCard = (id, formValues) => async dispatch => {
  const response = await axios.patch(`http://localhost:8080/publication/edit/${id}`, formValues)

  dispatch({ type: EDIT_PUBLICATIONLINECARD, payload: response.data })
}

export const deletePublicationLineCard = id => async dispatch => {
  await axios.delete(`http://localhost:8080/publication/delete/${id}`)

  dispatch({ type: DELETE_PUBLICATIONLINECARD, payload: id })
}

export const fetchPublicationLineCard = id => async dispatch => {
  const response = await axios.get(`http://localhost:8080/publication/findbyid/${id}`)

  dispatch({ type: FETCH_PUBLICATIONLINECARD, payload: response.data })
}