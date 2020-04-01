import {
  FETCH_TIMELINECARDS,
  EDIT_TIMELINECARD,
  DELETE_TIMELINECARD,
  FETCH_TIMELINECARD,
  CREATE_TIMELINECARD,
  SORT_BY_TITLE_TIMELINECARD,
  SORT_BY_DATE_TIMELINECARD
} from "./types";

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
  history.push(`/admin/timelinecardedit/${formValues.id}`)
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

export const sortList = (wtd, timeLineCardList) => {

  if (wtd === 1) {
    //trier la liste par titre
    console.log("je suis dans l'action de sort ", timeLineCardList)
    timeLineCardList.sort((a, b) => (a.title > b.title) ? 1 : (a.title === b.title) ? ((a.title2 > b.title2) ? 1 : -1) : -1)

    return {
      type: SORT_BY_TITLE_TIMELINECARD,
      payload: timeLineCardList
    }
  } else if (wtd === 2) {
    //trier la liste par date 
    timeLineCardList.sort((a, b) => (a.id > b.id) ? 1 : -1)

    return {
      type: SORT_BY_DATE_TIMELINECARD,
      payload: timeLineCardList
    }
  }
}