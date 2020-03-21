import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import authReducer from "./authReducer";
import timeLineReducer from "./TimeLineReducer";
import publicationLineReducer from "./PublicationLineReducer";


export default combineReducers({
  auth: authReducer,
  form: formReducer,
  timeLineCards: timeLineReducer,
  publicationLineCards: publicationLineReducer
});
