import {
  FETCH_PUBLICATIONLINECARDS,
  EDIT_PUBLICATIONLINECARD,
  DELETE_PUBLICATIONLINECARD,
  FETCH_PUBLICATIONLINECARD,
  CREATE_PUBLICATIONLINECARD,
  SORT_BY_DATE_PUBLICATIONLINECARD,
  SORT_BY_TITLE_PUBLICATIONLINECARD,
  EDIT_PUBLICATION_IMG
} from "./types";

import history from "../history";
import { ElasticBeanStalk } from "../variables/general";


const axios = require("axios").default;
axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');

const header = new Headers();
header.append('Access-Control-Allow-Origin', '*');

export const fetchPublicationLineCards = () => async dispatch => {
  const response = await axios.get(`${ElasticBeanStalk}/publication/list`, header)

  dispatch({ type: FETCH_PUBLICATIONLINECARDS, payload: response.data })
}

export const editPublicationLineCard = (formValues) => async dispatch => {
  const response = await axios.put(`${ElasticBeanStalk}/publication/edit`, formValues)

  dispatch({ type: EDIT_PUBLICATIONLINECARD, payload: response.data })
  window.alert("Publication modifié !");
  history.push(`/admin/publicationedit/${formValues.id}`)

}

export const deletePublicationLineCard = id => async dispatch => {
  await axios.get(`${ElasticBeanStalk}/publication/delete/${id}`)

  dispatch({ type: DELETE_PUBLICATIONLINECARD, payload: id })
  window.alert("Publication supprimé !");
  history.push('/admin/administration')


}

export const fetchPublicationLineCard = id => async dispatch => {
  const response = await axios.get(`${ElasticBeanStalk}/publication/findbyid/${id}`)

  dispatch({ type: FETCH_PUBLICATIONLINECARD, payload: response.data })
}

export const createPublicationLineCard = formValues => async dispatch => {
  const response = await axios.post(`${ElasticBeanStalk}/publication/save`, {
    ...formValues
  });

  dispatch({ type: CREATE_PUBLICATIONLINECARD, payload: response.data });

  window.alert("Publication créé !");
  history.push('/admin/administration')

};

export const editPublicationCardImgBlob = (publication) => async dispatch => {
  const response = await axios.put(`${ElasticBeanStalk}/publication/updateBlobImg`, publication)

  dispatch({ type: EDIT_PUBLICATION_IMG, payload: response.data })
  window.alert("Photo de publication modifiée");
  document.location.reload(true);
}

export const setimagePublication = (URL, publication) => {

  publication = { ...publication, URL: URL }

  return {
    type: EDIT_PUBLICATION_IMG,
    payload: publication
  }
}

export const sortList = (wtd, publicationList) => {

  if (wtd === 1) {
    //trier la liste par titre
    publicationList.sort((a, b) => (a.title > b.title) ? 1 : (a.title === b.title) ? ((a.title2 > b.title2) ? 1 : -1) : -1)

    return {
      type: SORT_BY_TITLE_PUBLICATIONLINECARD,
      payload: publicationList
    }
  } else if (wtd === 2) {
    //trier la liste par date 
    publicationList.sort((a, b) => (a.id > b.id) ? 1 : -1)

    return {
      type: SORT_BY_DATE_PUBLICATIONLINECARD,
      payload: publicationList
    }
  }
}
