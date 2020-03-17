import _ from 'lodash'
import React from 'react'
import { connect } from 'react-redux'
import { fetchTimeLineCard, editTimeLineCard } from '../../actions/actionTimeLineCard'
import TimeLineCardForm from './TimeLineCardForm'

class TimeLineCardEdit extends React.Component {
    componentDidMount() {
        this.props.fetchTimeLineCard(this.props.match.params.id)
    }

    onSubmit = formValues => {
        this.props.editTimeLineCard(this.props.match.params.id, formValues)
    }

    render() {
        if (!this.props.timeLineCard) return <div>Loading...</div>

        return (
            <div>
                <h3>Edit a TimeLineCard</h3>
                <TimeLineCardForm
                    initialValues={_.pick(this.props.stream, 'title', 'description')}
                    onSubmit={this.onSubmit}
                />
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return { stream: state.timeLineCard[ownProps.match.params.id] }
}

export default connect(
    mapStateToProps,
    { fetchTimeLineCard, editTimeLineCard }
)(TimeLineCardEdit)
