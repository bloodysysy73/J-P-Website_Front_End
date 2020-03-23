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
        <Link to={`/admin/utilisateurdelete`} className="ui button negative">Delete</Link>
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
            <Link to={`/utilisateur/${utilisateur.id}`} className="header">
              {utilisateur.dateInscription}
            </Link>
            <div className="description">{utilisateur.login}</div>
          </div>
        </div>
      )
    })
  }

  renderCreate = () => {
    if (this.props.isSignedIn) {
      return (
        <div style={{ textAlign: 'right' }}>
          {/* <Link to="/utilisateur/save" className="ui button primary">
            Create utilisateur
                  </Link> */}
        </div>
      )
    }
  }

  render() {
    return (
      <div>
        <h2>utilisateurs</h2>
        <div className="ui celled list">{this.renderList()}</div>
        {/* {this.renderCreate()} */}
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
