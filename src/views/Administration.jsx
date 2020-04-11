import React from "react";
import AdministrationChoice from "components/other/AdministrationChoice"
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
} from "reactstrap";

class Administration extends React.Component {
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
            </CardHeader><hr />
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
