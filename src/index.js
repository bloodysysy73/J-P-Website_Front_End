import React from "react";
import ReactDOM from "react-dom";
import reduxThunk from "redux-thunk";
import { createStore, applyMiddleware, compose } from "redux";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { Provider } from "react-redux";

import reducers from "./reducers";
import history from "./history";
import AdminLayout from "layouts/Admin.jsx";
// import UtilisateurDelete from "components/Utilisateur/UtilisateurDelete";

import "bootstrap/dist/css/bootstrap.css";
import "assets/scss/paper-dashboard.scss?v=1.1.0";
import "assets/demo/demo.css";
import "perfect-scrollbar/css/perfect-scrollbar.css";
import App from './App';




//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  (applyMiddleware(reduxThunk))
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
