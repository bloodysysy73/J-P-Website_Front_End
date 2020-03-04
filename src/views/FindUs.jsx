import React from "react";

// reactstrap components
import { Card, CardHeader, CardBody, Row, Col, CardTitle, CardFooter } from "reactstrap";
import GoogleMap from "components/other/GoogleMap";

class FindUs extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="4">
              <Card className="card-user">
                <div className="image">
                  <img
                    alt="..."
                    src={require("assets/img/logoJP.jpg")}
                  />
                </div>
                <CardHeader className="text-center">
                  <CardTitle tag="h4">Jumeaux et Plus</CardTitle>
                  <p className="card-category">
                    L'association de Savoie <br />

                    125 rue du Mâconnais<br /><br />

                    73000 Chambéry Le Haut
                </p>
                </CardHeader>

                <CardFooter>
                  <hr />
                  <div className="button-container">
                    <Row>
                      <Col className="ml-auto" lg="3" md="6" xs="6">
                        <h5>
                          Lundi <br />
                          <small>14h - 16h</small>
                        </h5>
                      </Col>
                      <Col className="ml-auto mr-auto" lg="4" md="6" xs="6">
                        <h5>
                          mercredi <br />
                          <small>9h - 15h </small>
                        </h5>
                      </Col>
                      <Col className="mr-auto" lg="3">
                        <h5>
                          Jeudi <br />
                          <small>13h - 17h</small>
                        </h5>
                      </Col>
                    </Row>
                  </div>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-center" tag="h4">Les permanences</CardTitle>
                </CardHeader>
                <CardBody>
                  Assurées par trois bénévoles en moyenne, ces permanences sont des moments d'échanges et de convivialité, autour d'un jus de fruits. <br /><br />
                  Exceptionnellement, une permanence peut être annulée, mieux vaut s'assurer par téléphone au 0479854061 du maintien de celle-ci avant de vous déplacer. <br />
                </CardBody>
              </Card>
            </Col>
            <Col md="8">
              <Card>
                <CardHeader>Google Maps</CardHeader>
                <CardBody>
                  <div
                    id="map"
                    className="map"
                    style={{ position: "relative", overflow: "hidden" }}
                  >
                    <GoogleMap
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>


          </Row>
        </div >
      </>


    );
  }
}

export default FindUs;
