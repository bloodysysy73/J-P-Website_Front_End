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

    myImg;
    imageUrl;
    relativeUrl;

    myImgPublicationLine;
    imageUrlPublicationLine;

    componentDidMount() {

        this.myImg = this.props.imgBlob;
        this.myImgPublicationLine = this.props.imgBlobPublicationLine

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
            this.props.setimagePublicationLineCard(this.imageUrl, this.props.id);
        }

        // créer URL img pour affichage publicationLine
        if (this.myImgPublicationLine) {
            let base64Data = this.myImgPublicationLine.split(",")[1];
            const byteCharacters = atob(base64Data);
            const byteNumbers = new Array(byteCharacters.length);
            for (let i = 0; i < byteCharacters.length; i++) {
                byteNumbers[i] = byteCharacters.charCodeAt(i);
            }
            const byteArray = new Uint8Array(byteNumbers);

            let image = new Blob([byteArray], { type: 'image/jpeg' });
            this.imageUrlPublicationLine = URL.createObjectURL(image);
            this.props.setimage(this.imageUrl, this.props.id);

        }
    }

    render() {
        return (
            < div key={this.props.id}>
                <Card className="card-user">

                    <CardHeader className="text-center">
                        <div className="image"> {/*enlever classname pour image complete  */}
                            <img alt="" src={this.imageUrlPublicationLine || this.imageUrl || require("../../assets/img/logojp.jpg")} width="auto" />
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