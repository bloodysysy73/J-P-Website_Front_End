import {
  FETCH_QUESTIONS,
  FETCH_QUESTION,
  DELETE_QUESTION,
  DELETE_REPONSE
} from "./types";


const axios = require("axios").default;
axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');


export const fetchQuestions = () => async dispatch => {
  const response = await axios.get('http://localhost:8080/question/list')

  dispatch({ type: FETCH_QUESTIONS, payload: response.data })
}

export const findQuestionById = (id) => async dispatch => {
  const response = await axios.get(`http://localhost:8080/question/findbyid/${id}`)

  dispatch({ type: FETCH_QUESTION, payload: response.data, id })
}

export const deletequestion = (id) => async dispatch => {
  await axios.get(`http://localhost:8080/question/delete/${id}`)

  dispatch({ type: DELETE_QUESTION, payload: id })
  window.alert("Question supprimée !");

}

export const deletereponse = (id, idquestion) => async dispatch => {
  await axios.get(`http://localhost:8080/reponse/delete/${id}`)

  //dispatch({ type: DELETE_REPONSE, payload: id, idquestion })
  window.alert("Reponse supprimée !");
  document.location.reload(true);

}