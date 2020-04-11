import React from "react";
import ButtonLink from "components/other/ButtonLink"
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Row,
  Col
} from "reactstrap";

class Liens extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Card className="card-upgrade">
            <CardHeader className="text-center">
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col md="4" xs="5">
                      <div className="icon-big text-left icon-warning">
                        <i className="nc-icon nc-world-2 text-warning" />
                      </div>
                    </Col>
                    <Col md="8" xs="7" >
                      <div className="numbers">
                        <p className="card-category">LIENS UTILES</p>
                        <p />
                      </div><br />
                      <div >
                        Vous trouverez ici les liens vers nos partenaires commerciaux ou partenaires associatiatifs : </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="stats text-left">
                    <i className="fas fa-globe" />  www.jumeaux-et-plus.fr est le site nationale de notre association.
                     vous y trouverez entre autre les bulletins d'bulletin adhesion.
                  </div>
                  <div className="stats text-left" >
                    <i className="fas fa-download" /> Google, parce que c'est votre ami.
                  </div>
                  <div className="stats text-left" >
                    <i className="far fa-handshake" /> Jumeaux et plus 74, les potos d'en haut.
                  </div>
                </CardFooter>
              </Card>
            </CardHeader>
            <CardBody> <ButtonLink></ButtonLink></CardBody>
          </Card>
        </div>
      </>
    );
  }
}
export default Liens;
