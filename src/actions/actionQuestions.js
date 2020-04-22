import {
  FETCH_QUESTIONS
} from "./types";


const axios = require("axios").default;
axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');



export const fetchQuestions = () => async dispatch => {
  const response = await axios.get('http://localhost:8080/question/list')

  dispatch({ type: FETCH_QUESTIONS, payload: response.data })
}
