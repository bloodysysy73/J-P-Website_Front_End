import React from 'react'
import { connect } from 'react-redux'
import { createPublicationLineCard } from '../../actions/actionPublication'
import PublicationLineCardForm from './PublicationLineCardForm'

import {
    Card,
    CardHeader,
    CardFooter,
    CardTitle,
} from "reactstrap";

class PublicationLineCardCreate extends React.Component {
    componentDidMount() {
    }

    onSubmit = formValues => {
        console.log("formvalues creation : ", formValues);
        this.props.createPublicationLineCard(formValues)
    }

    render() {

        return (
            <>
                <div className="content">
                    <div className="container">
                        <Card className="card-user">
                            <CardHeader className="text-center">
                                <CardTitle tag="h4"> Créer une publication </CardTitle>

                                <PublicationLineCardForm
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
    { createPublicationLineCard }
)(PublicationLineCardCreate)