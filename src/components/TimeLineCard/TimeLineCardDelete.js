import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Modal from '../Modal'
import history from '../../history'
import { fetchTimeLineCard, deleteTimeLineCard } from '../../actions/actionTimeLineCard'

class TimeLineCardDelete extends React.Component {
  componentDidMount() {
    this.props.fetchTimeLineCard(this.props.match.params.id)
  }

  renderActions = () => {
    const { id } = this.props.match.params

    return (
      <React.Fragment>
        <button onClick={() => this.props.deleteTimeLineCard(id)} className="ui button negative">Delete</button>
        <Link to="/" className="ui button">Cancel</Link>
      </React.Fragment>
    )
  }

  renderContent = () => {
    if (!this.props.stream) {
      return 'Are you sure you want to delete this card?'
    }

    return `Are you sure you want to delete the stream with title: ${this.props.timelinecard.title}?`
  }

  render() {
    return (
      <Modal
        title="Delete Stream"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push('/')}
      />
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.timelinecard[ownProps.match.params.id] }
}

export default connect(
  mapStateToProps,
  { fetchTimeLineCard, deleteTimeLineCard }
)(TimeLineCardDelete)
