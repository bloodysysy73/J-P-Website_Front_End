
import React from "react";
import jwt from "jwt-decode";
import { fetchUtilisateurbylogin, editUtilisateurpage, editUtilisateurImgBlob, setimageProfil } from 'actions/actionUsers';
import { connect } from 'react-redux'
import history from "../../../history";
import { ElasticBeanStalk } from "../../../variables/general";
import { NotificationManager } from 'react-notifications';


// reactstrap components
import {
    Row,
    Col
} from "reactstrap";
import UtlisateurProfileForm from "components/Utilisateur/UtilisateurProfile/UtlisateurProfileForm";
import UtilisateurCard from "components/Utilisateur/UtilisateurProfile/UtilisateurCard";
import UtilisateurPasswordEdit from "./UtilisateurPasswordEdit";

const axios = require("axios").default;
//axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');

class UtilisateurProfileEdit extends React.Component {

    componentDidMount() {
        axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');
        let token = localStorage.getItem("token");

        if (token) {
            let user = jwt(token);
            let login = user.sub;
            this.props.fetchUtilisateurbylogin(login);
        } else {
            history.push('/admin/dashboard')
        }


    }

    onSubmit = formValues => {
        //console.log("formvalues : ", formValues);
        localStorage.setItem("pseudo", formValues.pseudo);
        this.props.editUtilisateurpage(formValues)
    }

    onSubmit3 = formValues => {
        console.log("data 3 : ", formValues);
        let user = {
            nom: formValues.dataURL,
            login: localStorage.getItem("login"),
            image: formValues.file.name
        }
        console.log("user 3 : ", user);
        this.props.editUtilisateurImgBlob(user);
    }

    onSubmit2 = formValues => {
        //console.log("formvalues : ", formValues);
        let login = localStorage.getItem("login");
        let password = formValues.former_password;

        //Test si le mot de passe rentré est le bon
        axios.post(`${ElasticBeanStalk}/login`, {
            login, password
        }).then(res => {

            console.log("response", res);


            if (res.status === 200) {
                console.log("bon code");
                let userupdate = this.props.utilisateur;

                userupdate = {
                    ...userupdate,
                    password: formValues.new_password2
                }
                console.log("j'édit ");
                this.props.editUtilisateurpage(userupdate);

            }

        }).catch((error) => {
            // Error 😨
            if (error.response) {
                /*
                 * The request was made and the server responded with a
                 * status code that falls out of the range of 2xx
                 */
                console.log("error 1 : request http ", error.response.data, "cacth1 ", error.response.status);
                NotificationManager.error('', 'Votre mot de passe est erroné. Veuillez réessayer!', 4000)

            } else if (error.request) {
                console.log("error 2 : no response request http ", error.response.data);
                NotificationManager.error('', 'Une erreur est survenue. Veuillez réessayer plus tard', 4000)

                /*
                 * The request was made but no response was received, `error.request`
                 * is an instance of XMLHttpRequest in the browser and an instance
                 * of http.ClientRequest in Node.js
                 */
            } else {
                // Something happened in setting up the request and triggered an Error
                console.log('Error  http request Something happened in setting up the request and triggered an Error ', error.message);
            }
            console.log("bilan de l'erreur :", error.config);
        });



    }


    render() {

        if (this.props.utilisateur) {
            return (
                <>
                    <div className="content">
                        <Row>
                            <Col md="4">
                                <UtilisateurCard
                                    id={this.props.utilisateur.id}
                                    login={this.props.utilisateur.login}
                                    pseudo={this.props.utilisateur.pseudo}
                                    nom={this.props.utilisateur.nom}
                                    prenom={this.props.utilisateur.prenom}
                                    adresse={this.props.utilisateur.adresse}
                                    dateInscription={this.props.utilisateur.dateInscription}
                                    description={this.props.utilisateur.description}
                                    nbEnfant={this.props.utilisateur.nbenfant}
                                    adherent={this.props.utilisateur.adherent}
                                    imgBlob={this.props.utilisateur.imgBlob}
                                    imageName={this.props.utilisateur.image}
                                    setimageProfil={(URL) => this.props.setimageProfil(URL, this.props.utilisateur)}
                                ></UtilisateurCard>
                                <UtilisateurPasswordEdit
                                    initialValues={(this.props.utilisateur)}
                                    onSubmit={this.onSubmit2}
                                ></UtilisateurPasswordEdit>

                            </Col>
                            <Col md="8">
                                <UtlisateurProfileForm
                                    initialValues={(this.props.utilisateur)}
                                    onSubmit={this.onSubmit}
                                    onSubmit3={this.onSubmit3}
                                ></UtlisateurProfileForm>
                            </Col>
                        </Row>
                    </div>
                </>
            );
        } else { return <div></div>; }
    }
}

const mapStateToProps = (state) => {
    return { utilisateur: state.utilisateurs.utilisateur }
}

export default connect(mapStateToProps, { fetchUtilisateurbylogin, editUtilisateurpage, editUtilisateurImgBlob, setimageProfil })(UtilisateurProfileEdit);
