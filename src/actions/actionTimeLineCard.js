import {
  FETCH_TIMELINECARDS,
  EDIT_TIMELINECARD,
  DELETE_TIMELINECARD,
  FETCH_TIMELINECARD,
  CREATE_TIMELINECARD,
  SORT_BY_TITLE_TIMELINECARD,
  SORT_BY_DATE_TIMELINECARD,
  EDIT_TIMELINECARD_IMG
} from "./types";

import history from "../history";
import { URL } from "../variables/general";


const axios = require("axios").default;
axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');

export const fetchTimeLineCards = () => async dispatch => {
  const response = await axios.get(`${URL}/timelinecard/list`)

  dispatch({ type: FETCH_TIMELINECARDS, payload: response.data })
}

export const editTimeLineCard = (formValues) => async dispatch => {
  const response = await axios.put(`${URL}/timelinecard/edit`, formValues)

  dispatch({ type: EDIT_TIMELINECARD, payload: response.data })
  window.alert("Evenement modifié !");
  history.push(`/admin/timelinecardedit/${formValues.id}`)
}

export const deleteTimeLineCard = id => async dispatch => {
  await axios.get(`${URL}/timelinecard/delete/${id}`)

  dispatch({ type: DELETE_TIMELINECARD, payload: id })
  window.alert("Evenement supprimé !");
  history.push('/admin/administration')


}

export const fetchTimeLineCard = id => async dispatch => {
  const response = await axios.get(`${URL}/timelinecard/findbyid/${id}`)

  dispatch({ type: FETCH_TIMELINECARD, payload: response.data })
}

export const createTimeLineCard = formValues => async dispatch => {
  const response = await axios.post(`${URL}/timelinecard/save`, {
    ...formValues
  });

  dispatch({ type: CREATE_TIMELINECARD, payload: response.data });

  window.alert("Evenement créé !");
  history.push('/admin/administration')

};

export const editTimeLineCardImgBlob = (timeLineCard) => async dispatch => {
  const response = await axios.put(`${URL}/timelinecard/updateBlobImg`, timeLineCard)

  dispatch({ type: EDIT_TIMELINECARD_IMG, payload: response.data })
  window.alert("Photo évènement modifiée");
  document.location.reload(true);
}

export const setimageTimeLineCard = (URL, timeLineCard) => {
  console.log("action timeline URL ", URL)
  timeLineCard = { ...timeLineCard, URL: URL }

  return {
    type: EDIT_TIMELINECARD_IMG,
    payload: timeLineCard
  }
}

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