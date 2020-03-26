import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Modal from '../Modal'
import history from '../../history'
import { fetchPublicationLineCard, deletePublicationLineCard } from '../../actions/actionPublication'

class PublicationLineCardDelete extends React.Component {
  componentDidMount() {
    this.props.fetchPublicationLineCard(this.props.match.params.id)
  }

  renderActions = () => {
    const { id } = this.props.match.params

    return (
      <React.Fragment>
        <button onClick={() => this.props.deletePublicationLineCard(id)} className="ui button negative">Delete</button>
        <Link to="/admin/administration" className="ui button">Cancel</Link>
      </React.Fragment>
    )
  }

  renderContent = () => {
    return `Voulez vraiment supprimer cette publicationLineCard` // :${this.props.publicationLineCard.title} ?`
  }

  render() {
    return (
      <Modal
        title="Supprimer la publication ? "
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push('/admin/administration')}
      />
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return { publicationLineCard: state.publicationLineCards[ownProps.match.params.id] }
}

export default connect(
  mapStateToProps,
  { fetchPublicationLineCard, deletePublicationLineCard }
)(PublicationLineCardDelete)
