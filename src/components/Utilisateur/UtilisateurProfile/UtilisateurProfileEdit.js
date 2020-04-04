
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
                                <UtilisateurPasswordEdit></UtilisateurPasswordEdit>

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
