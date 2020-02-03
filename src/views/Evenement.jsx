import React from "react";
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";

class Evenement extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>Evenement</CardHeader>
                <CardBody>lalala</CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Evenement;
