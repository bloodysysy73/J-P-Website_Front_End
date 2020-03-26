import React from "react";
import 'react-vertical-timeline-component/style.min.css';

import { fetchPublicationLineCards } from "../../actions/actionPublication";
import { Link } from 'react-router-dom'

import { connect } from 'react-redux'


class PublicationLineCardList extends React.Component {

  componentDidMount() {
    this.props.fetchPublicationLineCards();
  }

  renderButton = publicationLineCard => {

    return (
      <div className="right floated content">
        <Link to={`/admin/publicationedit/${publicationLineCard.id}`} className="ui button primary">Edit</Link>
        <Link to={`/admin/publicationdelete/${publicationLineCard.id}`} className="ui button negative">Delete</Link>
      </div>
    )

  }

  renderList = () => {
    return this.props.publicationLineCards.map(publicationLineCard => {
      return (
        <div className="item" key={publicationLineCard.id}>
          {this.renderButton(publicationLineCard)}
          <i className="large middle aligned icon camera" />
          <div className="content">
            <div className="description">titre : {publicationLineCard.title}</div>
            <p className="header">
              créé le : {publicationLineCard.date}
            </p>
          </div>
        </div>
      )
    })
  }

  renderCreate = () => {
    return (
      <div style={{ textAlign: 'right' }}>
        <Link to={`/admin/publicationcreate`} className="ui button primary">
          Créer une publication
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
    publicationLineCards: Object.values(state.publicationLineCards),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn,
    isSignedInEmail: state.auth.isSignedInEmail,
    login: state.auth.login
  }
}

export default connect(
  mapStateToProps,
  { fetchPublicationLineCards }
)(PublicationLineCardList)