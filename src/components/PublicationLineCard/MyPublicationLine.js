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

import PublicationLineCard from "./PublicationLineCard";

import { fetchPublicationLineCards, setimagePublication } from "../../actions/actionPublication";

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

class MyPublicationLine extends React.Component {

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
        this.props.fetchPublicationLineCards();
    }

    randomicon = () => {
        let min = Math.ceil(0);
        let max = Math.floor(14);
        let randomNum = Math.floor(Math.random() * (max - min)) + min;
        return icons[randomNum];
    }


    renderPublicationLine = () => {
        return this.props.publicationLineCards.map(publicationLineCard => {

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
                            key={publicationLineCard.id}
                            className="vertical-publicationline-element--work"
                            date={publicationLineCard.poste_le}
                            iconStyle={{ background: '#293462', color: '#fff' }}
                            icon={randomicon}
                        >

                            <PublicationLineCard
                                id={publicationLineCard.id}
                                description2={publicationLineCard.description2}
                                description={publicationLineCard.description}
                                title={publicationLineCard.title}
                                title2={publicationLineCard.title2}
                                date={publicationLineCard.date}
                                horaire={publicationLineCard.heure}
                                imageName={publicationLineCard.imageName}
                                imgBlobPublicationLine={publicationLineCard.imgBlob}
                                setimage={(URL) => this.props.setimagePublication(URL, this.props.publicationLineCard)} >
                                >
                            </PublicationLineCard>

                        </VerticalTimelineElement>
                    </VerticalTimeline>
                </>)
        })

    }

    render() {
        return (
            <div>
                {/* <h2 align="center" >PublicationLine</h2> */}
                <div>{this.renderPublicationLine()}</div>
            </div>)
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
    { fetchPublicationLineCards, setimagePublication }
)(MyPublicationLine)

