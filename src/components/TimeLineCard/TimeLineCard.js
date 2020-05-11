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

    myImgTimeLine;
    imageUrlTimeLine;

    componentDidMount() {

        this.myImg = this.props.imgBlob;
        this.myImgTimeLine = this.props.imgBlobTimeLine

        // créer URL img pour edition
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
            this.props.setimageTimeLineCard(this.imageUrl, this.props.id);
        }

        // créer URL img pour affichage timeLine
        if (this.myImgTimeLine) {
            let base64Data = this.myImgTimeLine.split(",")[1];
            const byteCharacters = atob(base64Data);
            const byteNumbers = new Array(byteCharacters.length);
            for (let i = 0; i < byteCharacters.length; i++) {
                byteNumbers[i] = byteCharacters.charCodeAt(i);
            }
            const byteArray = new Uint8Array(byteNumbers);

            let image = new Blob([byteArray], { type: 'image/jpeg' });
            this.imageUrlTimeLine = URL.createObjectURL(image);
            this.props.setimage(this.imageUrl, this.props.id);

        }

    }

    render() {
        return (< div >
            <Card className="card-user">

                <CardHeader className="text-center">
                    <div className="image">
                        <img alt="" src={this.imageUrlTimeLine || this.imageUrl || require("../../assets/img/logojp.jpg")} width="auto" />

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