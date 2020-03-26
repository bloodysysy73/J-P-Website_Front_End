import React from "react";
import 'react-vertical-timeline-component/style.min.css';

import { fetchTimeLineCards } from "../../actions/actionTimeLineCard";
import { Link } from 'react-router-dom'

import { connect } from 'react-redux'


class TimeLineCardList extends React.Component {

  componentDidMount() {
    this.props.fetchTimeLineCards();
  }

  renderButton = timeLineCard => {

    return (
      <div className="right floated content">
        <Link to={`/admin/timelinecardedit/${timeLineCard.id}`} className="ui button primary">Edit</Link>
        <Link to={`/admin/timelinecarddelete/${timeLineCard.id}`} className="ui button negative">Delete</Link>
      </div>
    )

  }

  renderList = () => {
    return this.props.timeLineCards.map(timeLineCard => {
      return (
        <div className="item" key={timeLineCard.id}>
          {this.renderButton(timeLineCard)}
          <i className="large middle aligned icon camera" />
          <div className="content">
            <div className="description">titre : {timeLineCard.title}</div>
            <p className="header">
              créé le : {timeLineCard.poste_le}
            </p>
          </div>
        </div>
      )
    })
  }

  renderCreate = () => {
    return (
      <div style={{ textAlign: 'right' }}>
        <Link to={`/admin/timelinecardcreate`} className="ui button primary">
          Créer un evènement
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
    timeLineCards: Object.values(state.timeLineCards),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn,
    isSignedInEmail: state.auth.isSignedInEmail,
    login: state.auth.login
  }
}

export default connect(
  mapStateToProps,
  { fetchTimeLineCards }
)(TimeLineCardList)