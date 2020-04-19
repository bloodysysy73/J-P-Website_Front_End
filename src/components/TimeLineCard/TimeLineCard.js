import React from 'react';
import {
    Card,
    CardHeader,
    CardFooter,
    CardTitle,
    Row,
    Col
} from "reactstrap";

class TimeLineCard extends React.Component {

    myImg;
    imageUrl;
    relativeUrl;

    componentDidMount() {
        // console.log("img fil : ", this.props.imgBlob)
        this.myImg = this.props.imgBlob;
        //console.log("Base 64: ", this.myImg)

        // créer URL img
        if (this.myImg) {
            let base64Data = this.myImg.split(",")[1];
            const byteCharacters = atob(base64Data);
            const byteNumbers = new Array(byteCharacters.length);
            for (let i = 0; i < byteCharacters.length; i++) {
                byteNumbers[i] = byteCharacters.charCodeAt(i);
            }
            const byteArray = new Uint8Array(byteNumbers);

            let image = new Blob([byteArray], { type: 'image/jpeg' });
            this.imageUrl = URL.createObjectURL(image);
            //console.log("URL : ", this.imageUrl);
            //this.relativeUrl = this.imageUrl.split("3000")[1];
            //console.log("relative URL : ", this.relativeUrl);

            this.props.setimageTimeLineCard(this.imageUrl, this.props.id);
        }

    }

    render() {
        return (< div >
            <Card className="card-user">
                <div className="image">
                    <img alt="" src={this.imageUrl || require("../../assets/img/logojp.jpg")} width="auto" />

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

export default TimeLineCard;