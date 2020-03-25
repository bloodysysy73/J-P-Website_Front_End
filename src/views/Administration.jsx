/*eslint-disable*/
import React from "react";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col
} from "reactstrap";
import UtilisateurList from "components/Utilisateur/UtilisateurList";

class Administration extends React.Component {

  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h5">Administration</CardTitle>
                  <p className="card-category">
                    ici vous pouvez retrouver la liste des utilisteurs ainsi que l'historique des publications et des évènements du site{" "}
                  </p>
                </CardHeader>
                <CardBody>
                  <Row>
                    <Col md="6">
                      <Card className="card-plain">
                        <CardHeader>
                          <CardTitle tag="h5">utilisateur</CardTitle>
                          <p className="category">Dans la base de donnée jumeaux et plus savoie</p>
                        </CardHeader>
                        <CardBody>
                          <UtilisateurList></UtilisateurList>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col md="6">
                      <Card className="card-plain">
                        <CardHeader>
                          <CardTitle tag="h5">Evenements</CardTitle>
                          <p className="category">historique</p>
                        </CardHeader>
                        <CardBody>

                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md="12">
              <Card>
                <CardBody>
                  <div className="places-buttons">
                    <Row>
                      <Col className="ml-auto mr-auto text-center" md="6">
                        <CardTitle tag="h5">Publications</CardTitle>
                        <p className="category">historique</p>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="ml-auto mr-auto" lg="8">
                        <Row>

                        </Row>
                      </Col>
                    </Row>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Administration;
