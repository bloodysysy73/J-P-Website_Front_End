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
        <Link to="/admin/administration" className="ui button">Cancel</Link>
      </React.Fragment>
    )
  }

  renderContent = () => {
    return `Voulez vraiment supprimer cet timeLineCard` // :${this.props.timeLineCard.title} ?`
  }

  render() {
    return (
      <Modal
        title="Supprimer l'évènement ? "
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push('/admin/administration')}
      />
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return { timeLineCard: state.timeLineCards[ownProps.match.params.id] }
}

export default connect(
  mapStateToProps,
  { fetchTimeLineCard, deleteTimeLineCard }
)(TimeLineCardDelete)
