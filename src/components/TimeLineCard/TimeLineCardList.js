import React from "react";
import 'react-vertical-timeline-component/style.min.css';

import { fetchTimeLineCards, sortList } from "../../actions/actionTimeLineCard";
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

class TimeLineCardList extends React.Component {


  componentDidMount() {
    this.props.fetchTimeLineCards();
  }

  renderButton = timeLineCard => {

    return (
      <div className="right floated content">
        <div className="ui buttons">
          <Link to={`/admin/timelinecardedit/${timeLineCard.id}`} className="ui button ">Modifier</Link>
          <div className="or"></div>
          <Link to={`/admin/timelinecarddelete/${timeLineCard.id}`} className="ui button negative">Supprimer</Link>
        </div>
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
        <Link to={`/admin/timelinecardcreate`} className="ui button grey">
          Créer un evènement
                  </Link>
      </div>
    )
  }

  renderSort = () => {
    return (
      <div style={{ textAlign: 'left' }}>
        <div className="ui buttons">
          <button onClick={() => this.props.sortList(1, this.props.timeLineCards)} className="ui button grey">
            trier par titre
           </button>
          <div className="or"></div>
          <button onClick={() => this.props.sortList(2, this.props.timeLineCards)} className="ui button grey">
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
    timeLineCards: Object.values(state.timeLineCards),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn,
    isSignedInEmail: state.auth.isSignedInEmail,
    login: state.auth.login
  }
}

export default connect(
  mapStateToProps,
  { fetchTimeLineCards, sortList }
)(TimeLineCardList)