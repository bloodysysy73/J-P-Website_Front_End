import React from "react";
import 'react-vertical-timeline-component/style.min.css';

import { fetchUtilisateurs } from "../../actions/actionUsers";
import { Link } from 'react-router-dom'

import { connect } from 'react-redux'


class UtilisateurList extends React.Component {

  componentDidMount() {
    this.props.fetchUtilisateurs();
  }

  renderButton = utilisateur => {

    return (
      <div className="right floated content">
        <Link to={`/admin/utilisateuredit/${utilisateur.id}`} className="ui button primary">Edit</Link>
        <Link to={`/admin/utilisateurdelete/${utilisateur.id}`} className="ui button negative">Delete</Link>
      </div>
    )

  }

  renderList = () => {
    return this.props.utilisateurs.map(utilisateur => {
      return (
        <div className="item" key={utilisateur.id}>
          {this.renderButton(utilisateur)}
          <i className="large middle aligned icon camera" />
          <div className="content">
            <div className="description">login : {utilisateur.login}</div>
            <p className="header">
              inscrit le : {utilisateur.dateInscription}
            </p>
            <div className="description">Pseudo : {utilisateur.pseudo}</div>
          </div>
        </div>
      )
    })
  }

  renderCreate = () => {
    return (
      <div style={{ textAlign: 'right' }}>
        <Link to={`/admin/utilisateurcreate`} className="ui button primary">
          Créer un utilisateur
                  </Link>
      </div>
    )

  }

  render() {
    return (
      <div>
        {this.renderCreate()}
        <div className="ui celled list">{this.renderList()}</div>

      </div>
    )
  }
}


const mapStateToProps = state => {
  return {
    utilisateurs: Object.values(state.utilisateurs),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn,
    isSignedInEmail: state.auth.isSignedInEmail,
    login: state.auth.login
  }
}

export default connect(
  mapStateToProps,
  { fetchUtilisateurs }
)(UtilisateurList)
