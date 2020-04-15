import React from "react";
import 'react-vertical-timeline-component/style.min.css';

import { fetchUtilisateurs, sortList } from "../../actions/actionUsers";
import { Link } from 'react-router-dom'

import { connect } from 'react-redux'

var style1 = {
  display: 'inline-block',
  marginLeft: '50px',
  marginRight: '50px',
};

var style2 = {
  display: 'inline-block',
};


class UtilisateurList extends React.Component {

  componentDidMount() {
    this.props.fetchUtilisateurs();
  }

  renderButton = utilisateur => {

    return (
      <div className="right floated content">
        <div className="ui buttons">
          <Link to={`/admin/utilisateuredit/${utilisateur.id}`} className="ui button ">Modifier</Link>
          <div className="or"></div>
          <Link to={`/admin/utilisateurdelete/${utilisateur.id}`} className="ui button negative">Supprimer</Link>
        </div>
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
        <Link to={`/admin/utilisateurcreate`} className="ui button grey">
          new user
                  </Link>
      </div>
    )

  }

  renderSort = () => {
    return (
      <div style={{ textAlign: 'left' }}>
        <div className="ui buttons">
          <button onClick={() => this.props.sortList(1, this.props.utilisateurs)} className="ui button grey">
            trier login
           </button>
          <div className="or"></div>
          <button onClick={() => this.props.sortList(2, this.props.utilisateurs)} className="ui button grey">
            trier chronologique
           </button>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div>
        <div className="ui top attached button" tabIndex="0">
          <div>
            <div style={style1}>{this.renderSort()}</div>{" "}<div style={style2}>{this.renderCreate()}</div>
          </div>
        </div>
        <div className="ui attached segment">
          <div className="ui celled list">{this.renderList()}</div>
        </div>
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
  { fetchUtilisateurs, sortList }
)(UtilisateurList)
