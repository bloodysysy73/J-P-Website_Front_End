import React from "react";

// reactstrap components
import { Card, CardHeader, CardBody, CardTitle, Row, Col } from "reactstrap";
import QuestionForm from "components/FAQ/QuestionForm";
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';


class QuestionFormView extends React.Component {
    render() {
        return (
            <>
                <div className="content">
                    <Row>
                        <Col className="ml-auto mr-auto" md="5">
                            <Card className="card-upgrade">
                                <CardHeader className="text-center">
                                    <HelpOutlineIcon fontSize="large" /> <CardTitle tag="h6">Votre question ne figure pas dans la liste ? Demandez à la communauté</CardTitle>
                                    <div className="card-category"> <QuestionForm></QuestionForm></div>
                                </CardHeader>
                                <CardBody></CardBody>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </>
        );
    }
}

export default QuestionFormView;