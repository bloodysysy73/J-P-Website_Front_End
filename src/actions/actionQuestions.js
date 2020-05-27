import {
  FETCH_QUESTIONS,
  FETCH_QUESTION,
  DELETE_QUESTION,
  //DELETE_REPONSE
} from "./types";
import { NotificationManager } from 'react-notifications';
import { URL } from "../variables/general";


const axios = require("axios").default;
axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');


export const fetchQuestions = () => async dispatch => {
  const response = await axios.get(`${URL}/question/list`)

  dispatch({ type: FETCH_QUESTIONS, payload: response.data })
}

export const findQuestionById = (id) => async dispatch => {
  const response = await axios.get(`${URL}/question/findbyid/${id}`)

  dispatch({ type: FETCH_QUESTION, payload: response.data, id })
}

export const deletequestion = (id) => async dispatch => {
  await axios.get(`${URL}/question/delete/${id}`)

  dispatch({ type: DELETE_QUESTION, payload: id })
  NotificationManager.warning('Question supprimée !', 3000);

}

export const deletereponse = (id, idquestion) => async dispatch => {
  await axios.get(`${URL}/reponse/delete/${id}`)

  //dispatch({ type: DELETE_REPONSE, payload: id, idquestion })
  window.alert("Reponse supprimée !");
  //document.location.reload(true);

}