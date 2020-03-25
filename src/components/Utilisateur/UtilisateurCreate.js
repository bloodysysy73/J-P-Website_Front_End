import React from 'react'
import { connect } from 'react-redux'
import { createUser } from '../../actions/actionUsers'
import UtilisateurForm from './UtilisateurForm'

import {
    Card,
    CardHeader,
    CardFooter,
    CardTitle,
} from "reactstrap";

class UtilisateurCreate extends React.Component {
    componentDidMount() {
    }

    onSubmit = formValues => {
        console.log("formvalues creation : ", formValues);
        this.props.createUser(formValues)
    }

    render() {
        // if (!this.props.utilisateur) return <div>Loading...</div>

        return (
            <>
                <div className="content">
                    <div className="container">
                        <Card className="card-user">
                            <CardHeader className="text-center">
                                <CardTitle tag="h4"> Créer l'utilisateur </CardTitle>

                                <UtilisateurForm
                                    onSubmit={this.onSubmit}
                                    isCreation={true}
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
    return "";
}

export default connect(
    mapStateToProps,
    { createUser }
)(UtilisateurCreate)
