import React from 'react';
import {
    Card,
    CardHeader,
    CardFooter,
    CardTitle,
    Row,
    Col
} from "reactstrap";

class QuestionCard extends React.Component {



    render() {
        let { titre, texte, user } = this.props.question
        return (< div >
            <Card className="card-user">

                <CardHeader className="text-center">

                    <CardTitle tag="h6"> Objet : {titre}</CardTitle>
                    <p className="card-category">
                        Question :  {texte} <br />
                    </p>
                </CardHeader>
                <CardFooter>
                    <hr />
                    <div className="button-container">
                        <Row>
                            <Col >
                                <h5>
                                    Posée par : {user ? (user.pseudo || user.login) : 'inconnu'}
                                </h5>
                            </Col>
                        </Row>
                    </div>
                </CardFooter>

            </Card>
        </div >);
    }
}

export default QuestionCard;