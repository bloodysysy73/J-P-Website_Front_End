import React from "react";
import 'react-vertical-timeline-component/style.min.css';


// import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
// import Brightness3OutlinedIcon from '@material-ui/icons/Brightness3Outlined';
// import FilterVintageOutlinedIcon from '@material-ui/icons/FilterVintageOutlined';
// import MusicNoteOutlinedIcon from '@material-ui/icons/MusicNoteOutlined';
// import RowingOutlinedIcon from '@material-ui/icons/RowingOutlined';
// import SentimentSatisfiedAltOutlinedIcon from '@material-ui/icons/SentimentSatisfiedAltOutlined';
// import SportsEsportsOutlinedIcon from '@material-ui/icons/SportsEsportsOutlined';
// import SportsTennisOutlinedIcon from '@material-ui/icons/SportsTennisOutlined';

//import TimeLineCard from "./TimeLineCard";

import { fetchTimeLineCards } from "../../actions/actionTimeLineCard";
import { Link } from 'react-router-dom'

import { connect } from 'react-redux'


class TimeLineCardList extends React.Component {

  componentDidMount() {
    this.props.fetchTimeLineCards();
  }

  renderAdmin = timeLineCard => {
    if (timeLineCard.userId === this.props.currentUserId) {
      return (
        <div className="right floated content">
          <Link to={`/timelinecard/edit/${timeLineCard.id}`} className="ui button primary">Edit</Link>
          <Link to={`/timelinecard/delete/${timeLineCard.id}`} className="ui button negative">Delete</Link>
        </div>
      )
    }
  }

  renderList = () => {
    return this.props.timeLineCards.map(timeLineCard => {
      return (
        <div className="item" key={timeLineCard.id}>
          {this.renderAdmin(timeLineCard)}
          <i className="large middle aligned icon camera" />
          <div className="content">
            <Link to={`/timelinecard/${timeLineCard.id}`} className="header">
              {timeLineCard.title}
            </Link>
            <div className="description">{timeLineCard.description}</div>
          </div>
        </div>
      )
    })
  }

  renderCreate = () => {
    if (this.props.isSignedIn) {
      return (
        <div style={{ textAlign: 'right' }}>
          <Link to="/timelinecard/save" className="ui button primary">
            Create timeLineCard
                  </Link>
        </div>
      )
    }
  }

  render() {
    return (
      <div>
        <h2>timeLineCards</h2>
        <div className="ui celled list">{this.renderList()}</div>
        {this.renderCreate()}
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
