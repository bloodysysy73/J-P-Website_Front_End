import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Modal from '../Modal'
import history from '../../history'
import { fetchPublicationLineCard, deletePublicationLineCard } from '../../actions/actionPublicationLineCard'

class PublicationLineCardDelete extends React.Component {
  componentDidMount() {
    this.props.fetchPublicationLineCard(this.props.match.params.id)
  }

  renderActions = () => {
    const { id } = this.props.match.params

    return (
      <React.Fragment>
        <button onClick={() => this.props.deletePublicationLineCard(id)} className="ui button negative">Delete</button>
        <Link to="/" className="ui button">Cancel</Link>
      </React.Fragment>
    )
  }

  renderContent = () => {
    if (!this.props.stream) {
      return 'Are you sure you want to delete this card?'
    }

    return `Are you sure you want to delete the stream with title: ${this.props.publicationlinecard.title}?`
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
  return { stream: state.publicationlinecard[ownProps.match.params.id] }
}

export default connect(
  mapStateToProps,
  { fetchPublicationLineCard, deletePublicationLineCard }
)(PublicationLineCardDelete)
