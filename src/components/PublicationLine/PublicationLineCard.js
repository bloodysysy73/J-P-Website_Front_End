import React from 'react';
import {
    Card,
    CardHeader,
    CardFooter,
    CardTitle,
    Row,
    Col
} from "reactstrap";

class PublicationLineCard extends React.Component {

    render() {
        return (< div >
            <Card className="card-user">
                <div className="image">
                    <img alt="" src={require(`../../assets/img/${this.props.imgname.toLowerCase()}`)} width="auto" />

                </div>
                <CardHeader className="text-center">
                    <CardTitle tag="h4"> {this.props.title}</CardTitle>
                    <p className="card-category">
                        {this.props.description} <br />
                    </p>
                </CardHeader>
                <CardFooter>
                    <hr />
                    <div className="button-container">
                        <Row>
                            <Col >
                                <h5>
                                    {this.props.date} <br />
                                    <small>{this.props.horaire}</small>
                                </h5>
                            </Col>
                        </Row>
                    </div>
                </CardFooter>

            </Card>
        </div >);
    }
}

export default PublicationLineCard;