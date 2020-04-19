import React from 'react';
import {
    Card,
    CardFooter,
    CardBody,
    Row,
    Col
} from "reactstrap";


class UtilisateurCard extends React.Component {

    myImg;
    imageUrl;
    relativeUrl;

    componentDidMount() {
        // console.log("img fil : ", this.props.imgBlob)
        this.myImg = this.props.imgBlob;
        console.log("Base 64: ", this.myImg)

        // créer URL img
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

        this.props.setimageProfil(this.imageUrl, this.props.id);

    }

    render() {
        if (this.imageUrl) {
            return (< div >
                <Card className="card-user">
                    <div className="image">
                        <img alt="" src={require(`../../../assets/img/${this.props.onverraplustard || 'logojp.jpg'}`)} width="auto" />
                    </div>
                    <CardBody>
                        <div className="author">
                            <a href="#pablo" onClick={e => e.preventDefault()}>
                                <img id="imgProfil"
                                    alt="..."
                                    className="avatar border-gray"
                                    src={this.imageUrl}
                                //src={require("/home/sysy/Documents/projets/projet_JP/back/J-P-Website_Back_End/Back_End/grossesse.png")}
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
        } else { return <div>loading...</div> }
    }
}

export default UtilisateurCard;