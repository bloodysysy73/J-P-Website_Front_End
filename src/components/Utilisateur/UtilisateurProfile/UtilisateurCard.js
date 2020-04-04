import React from 'react';
import {
    Card,
    CardFooter,
    CardBody,
    Row,
    Col
} from "reactstrap";

class UtilisateurCard extends React.Component {

    render() {
        return (< div >
            <Card className="card-user">
                <div className="image">
                    <img alt="" src={require(`../../../assets/img/${this.props.imageName || 'logojp.jpg'}`)} width="auto" />
                </div>
                <CardBody>
                    <div className="author">
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                            <img
                                alt="..."
                                className="avatar border-gray"
                                src={require(`../../../assets/img/${this.props.image || 'mike.jpg'}`)}
                            />
                            <h5 className="title">{this.props.pseudo}</h5>
                        </a>
                    </div>
                    <p className="description text-center">
                        {this.props.description}
                    </p>
                </CardBody>
                <CardFooter>
                    <hr />
                    <div className="button-container">
                        <Row>
                            <Col className="ml-auto" lg="3" md="6" xs="6">
                                <h5>
                                    {this.props.nbEnfant} <br />
                                    <small>Enfants</small>
                                </h5>
                            </Col>
                            <Col className="ml-auto mr-auto" lg="4" md="6" xs="6">
                                <h5>
                                    {this.props.dateInscription}<br />
                                    <small>Date d'inscription</small>
                                </h5>
                            </Col>
                            <Col className="mr-auto" lg="3">
                                <h5>
                                    {this.props.prenom}<br />
                                    <small>Prenom</small>
                                </h5>
                            </Col>
                        </Row>
                    </div>
                </CardFooter>
            </Card>
        </div >);
    }
}

export default UtilisateurCard;