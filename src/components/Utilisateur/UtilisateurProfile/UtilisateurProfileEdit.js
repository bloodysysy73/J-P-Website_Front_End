
import React from "react";
import jwt from "jwt-decode";
import { fetchUtilisateurbylogin, editUtilisateurpage } from 'actions/actionUsers';
import { connect } from 'react-redux'


// reactstrap components
import {
    Row,
    Col
} from "reactstrap";
import UtlisateurProfileForm from "components/Utilisateur/UtilisateurProfile/UtlisateurProfileForm";
import UtilisateurCard from "components/Utilisateur/UtilisateurProfile/UtilisateurCard";
import UtilisateurPasswordEdit from "./UtilisateurPasswordEdit";

const axios = require("axios").default;
axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');

class UtilisateurProfileEdit extends React.Component {

    componentDidMount() {

        let token = localStorage.getItem("token");
        let user = jwt(token);

        let login = user.sub;
        this.props.fetchUtilisateurbylogin(login);

    }

    onSubmit = formValues => {
        //console.log("formvalues : ", formValues);
        this.props.editUtilisateurpage(formValues)
    }

    onSubmit2 = formValues => {
        //console.log("formvalues : ", formValues);
        let login = localStorage.getItem("login");
        let password = formValues.former_password;

        //Test si le mot de passe rentré est le bon
        axios.post("http://localhost:8080/login", {
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
                window.alert("Votre mot de passe est erroné. Veuillez réessayer");
            } else if (error.request) {
                console.log("error 2 : no response request http ", error.response.data);
                window.alert("Une erreur est survenue. Veuillez réessayer plus tard");

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
                                    login={this.props.utilisateur.login}
                                    pseudo={this.props.utilisateur.pseudo}
                                    nom={this.props.utilisateur.nom}
                                    prenom={this.props.utilisateur.prenom}
                                    adresse={this.props.utilisateur.adresse}
                                    dateInscription={this.props.utilisateur.dateInscription}
                                    description={this.props.utilisateur.description}
                                    nbEnfant={this.props.utilisateur.nbenfant}
                                    adherent={this.props.utilisateur.adherent}
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

export default connect(mapStateToProps, { fetchUtilisateurbylogin, editUtilisateurpage })(UtilisateurProfileEdit);
