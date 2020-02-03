import React from "react";
import { Row, Col } from "reactstrap";
import MyRoute from "../components/other/MyRoute";

class Presentation extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <MyRoute></MyRoute>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Presentation;
