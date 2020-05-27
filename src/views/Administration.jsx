import React from "react";
import AdministrationChoice from "components/other/AdministrationChoice"
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
} from "reactstrap";

import jwt from "jwt-decode";
import history from "../history";

class Administration extends React.Component {

  componentDidMount() {
    const axios = require("axios").default;
    axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');
    let token = localStorage.getItem("token");
    let user;
    try {
      user = jwt(token);
    } catch (error) {
      // invalid token format
    }

    if (user && user.roles[0].authority !== "ROLE_ADMIN") {
      history.push('/admin/dashboard')
    }

  }

  render() {
    return (
      <>
        <div className="content">
          <Card>
            <CardHeader>
              <CardTitle tag="h5">Administration des evenements, des publications et des utilisteurs.</CardTitle>
              <p className="card-category">
                ici vous pouvez retrouver la liste des utilisteurs ainsi que l'historique des publications et des évènements du site pour les modifier ou les supprimer.{" "}
              </p>
              <hr />
            </CardHeader>
            <CardBody>
              <AdministrationChoice></AdministrationChoice>
            </CardBody>
          </Card>
        </div>
      </>
    );
  }
}

export default Administration;
