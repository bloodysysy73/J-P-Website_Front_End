import React from "react";
import 'react-vertical-timeline-component/style.min.css';


import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import Brightness3OutlinedIcon from '@material-ui/icons/Brightness3Outlined';
import FilterVintageOutlinedIcon from '@material-ui/icons/FilterVintageOutlined';
import MusicNoteOutlinedIcon from '@material-ui/icons/MusicNoteOutlined';
import RowingOutlinedIcon from '@material-ui/icons/RowingOutlined';
import SentimentSatisfiedAltOutlinedIcon from '@material-ui/icons/SentimentSatisfiedAltOutlined';
import SportsEsportsOutlinedIcon from '@material-ui/icons/SportsEsportsOutlined';
import SportsTennisOutlinedIcon from '@material-ui/icons/SportsTennisOutlined';

import TimeLineCard from "./TimeLineCard";

import { fetchTimeLineCards } from "../../actions/actionTimeLineCard";
// import { Link } from 'react-router-dom'

import { connect } from 'react-redux'


class MytimeLine extends React.Component {

    position = "right";
    temoin = 2;

    componentDidMount() {
        this.props.fetchTimeLineCards();
    }


    renderTimeLine = () => {
        return this.props.timeLineCards.map(timeLineCard => {

            if (this.temoin % 2 == 0) {
                this.position = "right";
                this.temoin++;
            } else if (this.temoin % 2 !== 0) {
                this.position = "left";
                this.temoin++;
            }

            return (
                <>
                    <VerticalTimeline>
                        <VerticalTimelineElement
                            position={this.position}
                            key={timeLineCard.id}
                            className="vertical-timeline-element--work"
                            date={timeLineCard.poste_le}
                            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                            icon={<Brightness3OutlinedIcon />}
                        >

                            <TimeLineCard key={timeLineCard.id} description={timeLineCard.description} title={timeLineCard.title} date={timeLineCard.date} horaire={timeLineCard.heure} imgname={timeLineCard.imageName}>
                            </TimeLineCard>

                        </VerticalTimelineElement>
                        {/*<VerticalTimelineElement
                            key={timeLineCard.id}
                            className="vertical-timeline-element--work"
                            date={timeLineCard.date}
                            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                            icon={<Brightness3OutlinedIcon />}
                        >

                            <TimeLineCard description={timeLineCard.description} title={timeLineCard.title} date={timeLineCard.date} horaire="12h" imgname={timeLineCard.imageName}>
                            </TimeLineCard>

                        </VerticalTimelineElement>
                         <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="2008 - 2010"
                            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                            icon={<FilterVintageOutlinedIcon />}
                        >
                            <h3 className="vertical-timeline-element-title">Web Designer</h3>
                            <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
                            <p>
                                User Experience, Visual Design
        </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="2006 - 2008"
                            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                            icon={<MusicNoteOutlinedIcon />}
                        >
                            <h3 className="vertical-timeline-element-title">Web Designer</h3>
                            <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
                            <p>
                                User Experience, Visual Design
        </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--education"
                            date="April 2013"
                            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                            icon={<SportsEsportsOutlinedIcon />}
                        >
                            <h3 className="vertical-timeline-element-title">Content Marketing for Web, Mobile and Social Media</h3>
                            <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
                            <p>
                                Strategy, Social Media
        </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--education"
                            date="November 2012"
                            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                            icon={<SentimentSatisfiedAltOutlinedIcon />}
                        >
                            <h3 className="vertical-timeline-element-title">Agile Development Scrum Master</h3>
                            <h4 className="vertical-timeline-element-subtitle">Certification</h4>
                            <p>
                                Creative Direction, User Experience, Visual Design
        </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--education"
                            date="2002 - 2006"
                            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                            icon={<RowingOutlinedIcon />}
                        >
                            <h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
                            <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
                            <p>
                                Creative Direction, Visual Design
        </p>
                        </VerticalTimelineElement> */}
                    </VerticalTimeline>
                </>)
        })

    }

    render() {
        return (
            <div>
                <h2 align="center" >TimeLine</h2>
                <div>{this.renderTimeLine()}</div>
            </div>)
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
)(MytimeLine)



    // renderAdmin = timeLineCard => {
    //     if (timeLineCard.userId === this.props.currentUserId) {
    //         return (
    //             <div className="right floated content">
    //                 <Link to={`/timelinecard/edit/${timeLineCard.id}`} className="ui button primary">Edit</Link>
    //                 <Link to={`/timelinecard/delete/${timeLineCard.id}`} className="ui button negative">Delete</Link>
    //             </div>
    //         )
    //     }
    // }

    // renderList = () => {
    //     return this.props.timeLineCards.map(timeLineCard => {
    //         return (
    //             <div className="item" key={timeLineCard.id}>
    //                 {this.renderAdmin(timeLineCard)}
    //                 <i className="large middle aligned icon camera" />
    //                 <div className="content">
    //                     <Link to={`/timelinecard/${timeLineCard.id}`} className="header">
    //                         {timeLineCard.title}
    //                     </Link>
    //                     <div className="description">{timeLineCard.description}</div>
    //                 </div>
    //             </div>
    //         )
    //     })
    // }

    // renderCreate = () => {
    //     if (this.props.isSignedIn) {
    //         return (
    //             <div style={{ textAlign: 'right' }}>
    //                 <Link to="/timelinecard/save" className="ui button primary">
    //                     Create timeLineCard
    //               </Link>
    //             </div>
    //         )
    //     }
    // }
        // return (
    //     <div>
    //         <h2>timeLineCards</h2>
    //         <div className="ui celled list">{this.renderList()}</div>
    //         {this.renderCreate()}
    //     </div>
    // )