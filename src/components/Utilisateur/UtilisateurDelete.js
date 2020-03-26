import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Modal from '../Modal'
import history from '../../history'
import { fetchUtilisateur, deleteUtilisateur } from '../../actions/actionUsers'

class UtilisateurDelete extends React.Component {
  componentDidMount() {
    this.props.fetchUtilisateur(this.props.match.params.id)
  }

  renderActions = () => {
    const { id } = this.props.match.params

    return (
      <React.Fragment>
        <button onClick={() => this.props.deleteUtilisateur(id)} className="ui button negative">Delete</button>
        <Link to="/admin/administration" className="ui button">Cancel</Link>
      </React.Fragment>
    )
  }

  renderContent = () => {
    return `Voulez vraiment supprimer cet utilisateur`// : ${this.props.utilisateur.login}?`
  }

  render() {
    return (
      <Modal
        title="Supprimer l'Utilisateur ? "
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push('/admin/administration')}
      />
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return { utilisateur: state.utilisateurs[ownProps.match.params.id] }
}

export default connect(
  mapStateToProps,
  { fetchUtilisateur, deleteUtilisateur }
)(UtilisateurDelete)
