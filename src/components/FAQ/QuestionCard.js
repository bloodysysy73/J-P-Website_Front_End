import React from 'react';
import { Link } from 'react-router-dom'
import { deletequestion } from '../../actions/actionQuestions'
import { connect } from 'react-redux'

import {
    Card,
    CardHeader,
    CardFooter,
    CardTitle,
    Row,
    Col
} from "reactstrap";

class QuestionCard extends React.Component {

    renderButtonSuppress() {
        let question = this.props.question;
        let login;
        (question.user ? login = question.user.login : login = '')

        if (localStorage.getItem("isAdmin") || localStorage.getItem("login") === login) {
            return (<div className="text-center" ><button onClick={() => this.props.deletequestion(question.id)} className="btn btn-danger">supprimer question</button></div>)
        }
    }

    render() {
        let { titre, texte, user, id } = this.props.question
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
                                <p className="card-category">
                                    Posée par : {user ? (user.pseudo || user.login) : 'inconnu'}
                                </p>
                            </Col>
                        </Row><br />
                        <Row>
                            <Col >
                                <Link to={`/admin/reponsequestion/${id}`} className="btn btn-primary">voir réponses</Link>
                            </Col>
                        </Row>
                    </div>
                    {this.renderButtonSuppress()}
                </CardFooter>
            </Card>
        </div >);
    }
}

const mapStateToProps = (state) => {
    return {}
}

export default connect(
    mapStateToProps,
    { deletequestion }
)(QuestionCard);