import React from "react";
import 'react-vertical-timeline-component/style.min.css';

import Brightness3OutlinedIcon from '@material-ui/icons/Brightness3Outlined';
// import FilterVintageOutlinedIcon from '@material-ui/icons/FilterVintageOutlined';
// import MusicNoteOutlinedIcon from '@material-ui/icons/MusicNoteOutlined';
// import RowingOutlinedIcon from '@material-ui/icons/RowingOutlined';
// import SentimentSatisfiedAltOutlinedIcon from '@material-ui/icons/SentimentSatisfiedAltOutlined';
// import SportsEsportsOutlinedIcon from '@material-ui/icons/SportsEsportsOutlined';
// import SportsTennisOutlinedIcon from '@material-ui/icons/SportsTennisOutlined';


import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';

import TimeLineCard from "./TimeLineCard";

import { fetchTimeLineCards } from "../../actions/actionTimeLineCard";

import { connect } from 'react-redux'


class MytimeLine extends React.Component {

    position = "right";
    temoin = 2;

    componentDidMount() {
        this.props.fetchTimeLineCards();
    }


    renderTimeLine = () => {
        return this.props.timeLineCards.map(timeLineCard => {

            if (this.temoin % 2 === 0) {
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