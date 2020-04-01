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

    // componentDidMount() {
    //     if (!this.props.imageName) {
    //         this.props.imageName = 'bg5.jpg'
    //     }

    // }

    render() {
        return (< div >
            <Card className="card-user">

                <CardHeader className="text-center">
                    <div className="image"> {/*enlever classname pour image complete  */}
                        <img alt="" src={require(`../../assets/img/${this.props.imageName || 'logojp.jpg'}`)} width="auto" />
                    </div>
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
                                    {this.props.title2} <br />
                                    <small>{this.props.description2}</small>
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