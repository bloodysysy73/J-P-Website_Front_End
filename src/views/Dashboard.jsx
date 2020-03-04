import React from "react";
import { Row, Col } from "reactstrap";
import MySlider from "components/other/MySlider";

class Dashboard extends React.Component {
  // settings = {
  //   arrowsScroll: 3,
  //   autoplay: true,
  //   centerMode: true,
  //   centerPadding: 50,
  //   dotsScroll: 5,
  //   initialSlide: true,
  //   slidesPerRow: 1,
  //   wheelScroll: 3,
  //   dots: true,
  //   wheel: true
  // };
  setting = { autoPlay: true };

  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col ><MySlider props={this.settings} ></MySlider></Col>
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
