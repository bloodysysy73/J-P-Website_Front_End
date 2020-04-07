
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

        //Test di le mot de passe rentré est le bon
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
                this.props.editUtilisateurpage(userupdate);

            } else {
                console.log("error http request")

            }

        })



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


// const checkmypassword = (login, password) => {

//     var test;

//     axios.post("http://localhost:8080/login", {
//         login, password
//     }).then(res => {

//         console.log("response", res);


//         if (res.status === 200) {
//             console.log("bon code");
//             test = true;
//         } else {
//             console.log("error http request")
//             test = false;
//         }
//         console.log("test = ", test)
//         return test;
//     })

// }
