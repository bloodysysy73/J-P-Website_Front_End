import { FETCH_TIMELINECARDS, EDIT_TIMELINECARD, DELETE_TIMELINECARD, FETCH_TIMELINECARD } from "./types";


const axios = require("axios").default;
axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');

export const fetchTimeLineCards = () => async dispatch => {
  const response = await axios.get('http://localhost:8080/timelinecard/list')

  dispatch({ type: FETCH_TIMELINECARDS, payload: response.data })
}

export const editTimeLineCard = (id, formValues) => async dispatch => {
  const response = await axios.patch(`http://localhost:8080/timelinecard/edit/${id}`, formValues)

  dispatch({ type: EDIT_TIMELINECARD, payload: response.data })
}

export const deleteTimeLineCard = id => async dispatch => {
  await axios.delete(`http://localhost:8080/timelinecard/delete/${id}`)

  dispatch({ type: DELETE_TIMELINECARD, payload: id })
}

export const fetchTimeLineCard = id => async dispatch => {
  const response = await axios.get(`http://localhost:8080/timelinecard/findbyid/${id}`)

  dispatch({ type: FETCH_TIMELINECARD, payload: response.data })
}