import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col
} from "reactstrap";

class Upgrade extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col className="ml-auto mr-auto" md="8">
              <Card className="card-upgrade">
                <CardHeader className="text-center">
                  <CardTitle tag="h4">Nous contacter</CardTitle>
                  <p className="card-category">
                    Are you looking for more components? Please check our
                    Premium Version of Paper Dashboard PRO.
                  </p>
                </CardHeader>
                <CardBody></CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Upgrade;
