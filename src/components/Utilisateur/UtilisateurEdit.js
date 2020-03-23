import _ from 'lodash'
import React from 'react'
import { connect } from 'react-redux'
import { fetchUtilisateur, editUtilisateur } from '../../actions/actionUsers'
import UtilisateurForm from './UtilisateurForm'

import {
    Card,
    CardHeader,
    CardFooter,
    CardTitle,
} from "reactstrap";

class UtilisateurEdit extends React.Component {
    componentDidMount() {
        this.props.fetchUtilisateur(this.props.match.params.id)
    }

    onSubmit = formValues => {
        this.props.editUtilisateur(formValues)
    }

    render() {
        // if (!this.props.utilisateur) return <div>Loading...</div>

        return (
            <>
                <div className="content">
                    <div className="container">
                        <Card className="card-user">
                            <CardHeader className="text-center">
                                <CardTitle tag="h4"> Modifier l'utilisateur </CardTitle>

                                <UtilisateurForm
                                    initialValues={_.pick(this.props.utilisateur, 'login', 'pseudo', 'nom', 'prenom', 'adresse', 'dateInscription', 'isAdherent')}
                                    onSubmit={this.onSubmit}
                                />
                            </CardHeader>
                            <CardFooter>

                            </CardFooter>

                        </Card>
                    </div>
                </div>

            </>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return { utilisateur: state.utilisateurs[ownProps.match.params.id] }
}

export default connect(
    mapStateToProps,
    { fetchUtilisateur, editUtilisateur }
)(UtilisateurEdit)
