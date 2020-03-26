import { FETCH_TIMELINECARDS, EDIT_TIMELINECARD, DELETE_TIMELINECARD, FETCH_TIMELINECARD, CREATE_TIMELINECARD } from "./types";
import history from "../history";


const axios = require("axios").default;
axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');

export const fetchTimeLineCards = () => async dispatch => {
  const response = await axios.get('http://localhost:8080/timelinecard/list')

  dispatch({ type: FETCH_TIMELINECARDS, payload: response.data })
}

export const editTimeLineCard = (formValues) => async dispatch => {
  const response = await axios.put(`http://localhost:8080/timelinecard/edit`, formValues)

  dispatch({ type: EDIT_TIMELINECARD, payload: response.data })
  window.alert("Evenement modifié !");
  history.push('/admin/administration')

}

export const deleteTimeLineCard = id => async dispatch => {
  await axios.get(`http://localhost:8080/timelinecard/delete/${id}`)

  dispatch({ type: DELETE_TIMELINECARD, payload: id })
  window.alert("Evenement supprimé !");
  history.push('/admin/administration')


}

export const fetchTimeLineCard = id => async dispatch => {
  const response = await axios.get(`http://localhost:8080/timelinecard/findbyid/${id}`)

  dispatch({ type: FETCH_TIMELINECARD, payload: response.data })
}

export const createTimeLineCard = formValues => async dispatch => {
  const response = await axios.post("http://localhost:8080/timelinecard/save", {
    ...formValues
  });

  dispatch({ type: CREATE_TIMELINECARD, payload: response.data });

  window.alert("Evenement créé !");
  history.push('/admin/administration')

};