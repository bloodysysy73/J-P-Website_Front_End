import React from 'react'
import { connect } from 'react-redux'
import { fetchPublicationLineCard, editPublicationLineCard } from '../../actions/actionPublication'
import PublicationLineCardForm from './PublicationLineCardForm'

import {
    Card,
    CardHeader,
    CardFooter,
    CardTitle,
} from "reactstrap";

class PublicationLineCardEdit extends React.Component {

    componentDidMount() {
        this.props.fetchPublicationLineCard(this.props.match.params.id)
    }

    onSubmit = formValues => {
        console.log("formvalues : ", formValues);
        this.props.editPublicationLineCard(formValues)
    }

    render() {
        // if (!this.props.publicationLineCard) return <div>Loading...</div>

        return (
            <>
                <div className="content">
                    <div className="container">
                        <Card className="card-user">
                            <CardHeader className="text-center">
                                <CardTitle tag="h4"> Modifier la publication </CardTitle>

                                <PublicationLineCardForm
                                    initialValues={(this.props.publicationLineCard)}
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
    return { publicationLineCard: state.publicationLineCards[ownProps.match.params.id] }
}
export default connect(
    mapStateToProps,
    { fetchPublicationLineCard, editPublicationLineCard }
)(PublicationLineCardEdit)
