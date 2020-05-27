import React from "react";
import 'react-vertical-timeline-component/style.min.css';


import Brightness3OutlinedIcon from '@material-ui/icons/Brightness3Outlined';
import FilterVintageOutlinedIcon from '@material-ui/icons/FilterVintageOutlined';
import MusicNoteOutlinedIcon from '@material-ui/icons/MusicNoteOutlined';
import RowingOutlinedIcon from '@material-ui/icons/RowingOutlined';
import SportsEsportsOutlinedIcon from '@material-ui/icons/SportsEsportsOutlined';
import SportsTennisOutlinedIcon from '@material-ui/icons/SportsTennisOutlined';
import AdbIcon from '@material-ui/icons/Adb';
import AirplanemodeActiveOutlinedIcon from '@material-ui/icons/AirplanemodeActiveOutlined';
import AndroidOutlinedIcon from '@material-ui/icons/AndroidOutlined';
import BrightnessHighOutlinedIcon from '@material-ui/icons/BrightnessHighOutlined';
import ChildFriendlyOutlinedIcon from '@material-ui/icons/ChildFriendlyOutlined';
import CloudQueueOutlinedIcon from '@material-ui/icons/CloudQueueOutlined';
import DirectionsRunOutlinedIcon from '@material-ui/icons/DirectionsRunOutlined';
import EmojiEmotionsOutlinedIcon from '@material-ui/icons/EmojiEmotionsOutlined';


import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';

import TimeLineCard from "./TimeLineCard";

import { fetchTimeLineCards, setimageTimeLineCard } from "../../actions/actionTimeLineCard";

import { connect } from 'react-redux'

const icons = [
    'brightness3OutlinedIcon',
    'filterVintageOutlinedIcon',
    'musicNoteOutlinedIcon',
    'rowingOutlinedIcon',
    'sportsEsportsOutlinedIcon',
    'sportsTennisOutlinedIcon',
    'adbIcon',
    'airplanemodeActiveOutlinedIcon',
    'androidOutlinedIcon',
    'brightnessHighOutlinedIcon',
    'childFriendlyOutlinedIcon',
    'cloudQueueOutlinedIcon',
    'directionsRunOutlinedIcon',
    'emojiEmotionsOutlinedIcon'
];


class MytimeLine extends React.Component {

    iconsC = {
        brightness3OutlinedIcon: Brightness3OutlinedIcon,
        filterVintageOutlinedIcon: FilterVintageOutlinedIcon,
        musicNoteOutlinedIcon: MusicNoteOutlinedIcon,
        rowingOutlinedIcon: RowingOutlinedIcon,
        sportsEsportsOutlinedIcon: SportsEsportsOutlinedIcon,
        sportsTennisOutlinedIcon: SportsTennisOutlinedIcon,
        adbIcon: AdbIcon,
        airplanemodeActiveOutlinedIcon: AirplanemodeActiveOutlinedIcon,
        androidOutlinedIcon: AndroidOutlinedIcon,
        brightnessHighOutlinedIcon: BrightnessHighOutlinedIcon,
        childFriendlyOutlinedIcon: ChildFriendlyOutlinedIcon,
        cloudQueueOutlinedIcon: CloudQueueOutlinedIcon,
        directionsRunOutlinedIcon: DirectionsRunOutlinedIcon,
        emojiEmotionsOutlinedIcon: EmojiEmotionsOutlinedIcon
    };

    position = "right";
    temoin = 2;

    componentDidMount() {
        this.props.fetchTimeLineCards();
    }

    randomicon = () => {
        let min = Math.ceil(0);
        let max = Math.floor(14);
        let randomNum = Math.floor(Math.random() * (max - min)) + min;
        return icons[randomNum];
    }


    renderTimeLine = () => {
        return this.props.timeLineCards.map(timeLineCard => {

            const icon = this.randomicon();

            let IconObject = this.iconsC[icon];

            let randomicon = <IconObject />;

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
                            iconStyle={{ background: '#293462', color: '#fff' }}
                            icon={randomicon}
                        >

                            <TimeLineCard
                                key={timeLineCard.id}
                                description={timeLineCard.description}
                                title={timeLineCard.title}
                                date={timeLineCard.date}
                                horaire={timeLineCard.heure}
                                imgBlobTimeLine={timeLineCard.imgBlob}
                                setimage={(URL) => this.props.setimageTimeLineCard(URL, this.props.timeLineCard)} >
                            </TimeLineCard>

                        </VerticalTimelineElement>
                    </VerticalTimeline>
                </>)
        })

    }

    render() {
        return (
            <div>
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
    { fetchTimeLineCards, setimageTimeLineCard }
)(MytimeLine)