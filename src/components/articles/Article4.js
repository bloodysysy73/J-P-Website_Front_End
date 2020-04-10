import React from "react";
import {
    Card,
    CardBody,
    CardFooter,
    Row,
    Col
} from "reactstrap";


class Article4 extends React.Component {

    render() {
        return (
            <div>
                <Card className="card-stats">
                    <CardBody>
                        <Row>
                            <Col md="4" xs="5">
                                <div className="icon-big text-center icon-warning">
                                    <i className="nc-icon nc-world-2 text-warning" />
                                </div>
                            </Col>
                            <Col md="8" xs="7" >
                                <div className="numbers">
                                    <p className="card-category">ADHÉRER À L'ASSOCIATION</p>
                                    <p />
                                </div><br />
                                <div >
                                    Pour adhérer, 3 options très simples : </div>
                            </Col>
                        </Row>
                    </CardBody>
                    <CardFooter>
                        <hr />
                        <div className="stats">
                            <i className="fas fa-globe" />  Adhérer en ligne (sur le site nationale,
      <a
                                href="http://www.jumeaux-et-plus.fr/adhesion-association/"
                                className="simple-text logo-mini"
                            >ici</a>
    ), et nous vous contacterons très rapidement.
</div>
                        <div className="stats">
                            <i className="fas fa-download" /> Téléchargez le bulletin d'inscription <a
                                href="http://www.jumeauxetplus74.org/images/stories/bulletin_adhesion%202020.pdf"
                                className="simple-text logo-mini"
                            >ici</a>, vous y trouverez toutes les informations utiles.
</div>
                        <div className="stats">
                            <i className="far fa-handshake" /> Rendez-vous lors d'une de nos permanences (onglet "Nous trouver").
</div>
                    </CardFooter>
                </Card>

            </div>
        );
    }
}

export default Article4;
