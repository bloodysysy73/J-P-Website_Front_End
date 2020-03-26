import React from "react";
import MySlider from "components/other/MySlider";
import MyPublicationLine from "components/PublicationLineCard/MyPublicationLine";


import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  Row,
  Col
} from "reactstrap";

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
          <Card className="card-user">
            <div className="image">
              <img
                alt="..."
                src={require("assets/img/logojp.jpg")}
                width="250"
              />
            </div>
            <CardHeader className="text-center">
              <CardTitle tag="h4">L'actualité jumeaux et plus Savoie</CardTitle>

            </CardHeader>

            <CardFooter>
              <hr />
              <div className="button-container">
                <Row>
                  <Col><MySlider></MySlider></Col>
                </Row>
              </div>
            </CardFooter>
          </Card>


          <MyPublicationLine></MyPublicationLine>

        </div>
      </>
    );
  }
}

export default Dashboard;
