import React from "react";
import MyTimeLine from "components/TimeLineCard/MyTimeLine";

import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  Row,
  Col
} from "reactstrap";

class Evenement extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Card className="card-user">

            <CardHeader className="text-center">
              <img
                alt="..."
                src={require("assets/img/logojp.jpg")}
                width="250"
              />
              <CardTitle tag="h4">L'actualité jumeaux et plus Savoie</CardTitle>

            </CardHeader>

            <CardFooter>
              <hr />
              <div className="button-container">
                <Row>
                  <Col>retrouvez ici tous les évènements passés ou qui arrivent ! </Col>
                </Row>
              </div>
            </CardFooter>
          </Card>


          <MyTimeLine></MyTimeLine>

        </div>
      </>
    );
  }
}

export default Evenement;
