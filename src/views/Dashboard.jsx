import React from "react";
import { Col } from "reactstrap";
import MySlider from "components/other/MySlider";
import Actualitees from "components/other/Actualitees";

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

          <Col><MySlider></MySlider></Col>

          <Actualitees></Actualitees>

        </div>
      </>
    );
  }
}

export default Dashboard;
