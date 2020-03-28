import React from "react";
import 'react-vertical-timeline-component/style.min.css';

import Brightness3OutlinedIcon from '@material-ui/icons/Brightness3Outlined';
// import FilterVintageOutlinedIcon from '@material-ui/icons/FilterVintageOutlined';
// import MusicNoteOutlinedIcon from '@material-ui/icons/MusicNoteOutlined';
// import RowingOutlinedIcon from '@material-ui/icons/RowingOutlined';
// import SenpublicationntSatisfiedAltOutlinedIcon from '@material-ui/icons/SenpublicationntSatisfiedAltOutlined';
// import SportsEsportsOutlinedIcon from '@material-ui/icons/SportsEsportsOutlined';
// import SportsTennisOutlinedIcon from '@material-ui/icons/SportsTennisOutlined';


import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';

import PublicationLineCard from "./PublicationLineCard";

import { fetchPublicationLineCards } from "../../actions/actionPublication";

import { connect } from 'react-redux'


class MyPublicationLine extends React.Component {

    position = "right";
    temoin = 2;

    componentDidMount() {
        this.props.fetchPublicationLineCards();
    }


    renderPublicationLine = () => {
        return this.props.publicationLineCards.map(publicationLineCard => {

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
                            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                            icon={<Brightness3OutlinedIcon />}
                        >

                            <PublicationLineCard key={publicationLineCard.id} description={publicationLineCard.description} title={publicationLineCard.title} date={publicationLineCard.date} horaire={publicationLineCard.heure} imageName={publicationLineCard.imageName}>
                            </PublicationLineCard>

                        </VerticalTimelineElement>
                    </VerticalTimeline>
                </>)
        })

    }

    render() {
        return (
            <div>
                {/* <h2 align="center" >TimeLine</h2> */}
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
    { fetchPublicationLineCards }
)(MyPublicationLine)

