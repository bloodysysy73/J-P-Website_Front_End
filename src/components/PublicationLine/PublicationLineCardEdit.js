import _ from 'lodash'
import React from 'react'
import { connect } from 'react-redux'
import { fetchPublicationLineCard, editPublicationLineCard } from '../../actions/actionPublicationLineCard'
import PublicationLineCardForm from './PublicationLineCardForm'

class PublicationLineCardEdit extends React.Component {
    componentDidMount() {
        this.props.fetchPublicationLineCard(this.props.match.params.id)
    }

    onSubmit = formValues => {
        this.props.editPublicationLineCard(this.props.match.params.id, formValues)
    }

    render() {
        if (!this.props.publicationLineCard) return <div>Loading...</div>

        return (
            <div>
                <h3>Edit a PublicationLineCard</h3>
                <PublicationLineCardForm
                    initialValues={_.pick(this.props.stream, 'title', 'description')}
                    onSubmit={this.onSubmit}
                />
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return { stream: state.publicationLineCard[ownProps.match.params.id] }
}

export default connect(
    mapStateToProps,
    { fetchPublicationLineCard, editPublicationLineCard }
)(PublicationLineCardEdit)
