import { SIGN_UP_EMAIL } from "./types";
import history from "../history";

const axios = require("axios").default;

export const getAll = () => {};

//se créer un compte avec email
export const createUser = formValues => async dispatch => {
  const response = await axios.post("http://localhost:8080/user/save", {
    ...formValues
  });

  dispatch({ type: SIGN_UP_EMAIL, payload: response.data });

  history.push("/");
};
