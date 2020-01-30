import React from "react";
import { Row, Col } from "reactstrap";

class Dashboard extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col lg="3" md="6" sm="6"></Col>
            <Col lg="3" md="6" sm="6"></Col>
            <Col lg="3" md="6" sm="6"></Col>
            <Col lg="3" md="6" sm="6"></Col>
          </Row>
          <Row>
            <Col md="12"></Col>
          </Row>
          <Row>
            <Col md="4"></Col>
            <Col md="8"></Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Dashboard;
