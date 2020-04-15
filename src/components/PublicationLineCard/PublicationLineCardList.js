import React from "react";
import 'react-vertical-timeline-component/style.min.css';

import { fetchPublicationLineCards, sortList } from "../../actions/actionPublication";
import { Link } from 'react-router-dom'

import { connect } from 'react-redux'

var style1 = {
  display: 'inline-block',
  marginLeft: '0',
  marginRight: '0',
};

var style2 = {
  display: 'inline-block',
};


class PublicationLineCardList extends React.Component {

  componentDidMount() {
    this.props.fetchPublicationLineCards();
  }

  renderButton = publicationLineCard => {

    return (
      <div className="right floated content">
        <div className="ui buttons">
          <Link to={`/admin/publicationedit/${publicationLineCard.id}`} className="ui button ">Modifier</Link>
          <div className="or"></div>
          <Link to={`/admin/publicationdelete/${publicationLineCard.id}`} className="ui button negative">Supprimer</Link>
        </div>
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
        <Link to={`/admin/publicationcreate`} className="ui button grey">
          Créer une publication
                  </Link>
      </div>
    )
  }

  renderSort = () => {
    return (
      <div style={{ textAlign: 'left' }}>
        <div className="ui buttons">
          <button onClick={() => this.props.sortList(1, this.props.publicationLineCards)} className="ui button grey">
            trier par titre
           </button>
          <div className="or"></div>
          <button onClick={() => this.props.sortList(2, this.props.publicationLineCards)} className="ui button grey">
            trier par date
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
    publicationLineCards: Object.values(state.publicationLineCards),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn,
    isSignedInEmail: state.auth.isSignedInEmail,
    login: state.auth.login
  }
}

export default connect(
  mapStateToProps,
  { fetchPublicationLineCards, sortList }
)(PublicationLineCardList)