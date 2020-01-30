import React from "react";
// react plugin used to create charts
import { Line, Pie } from "react-chartjs-2";
// reactstrap components
import { Row, Col } from "reactstrap";
// core components
import {
  dashboard24HoursPerformanceChart,
  dashboardEmailStatisticsChart,
  dashboardNASDAQChart
} from "variables/charts.jsx";

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
