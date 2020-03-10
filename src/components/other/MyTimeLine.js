import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Brightness3OutlinedIcon from '@material-ui/icons/Brightness3Outlined';
import FilterVintageOutlinedIcon from '@material-ui/icons/FilterVintageOutlined';
import MusicNoteOutlinedIcon from '@material-ui/icons/MusicNoteOutlined';
import RowingOutlinedIcon from '@material-ui/icons/RowingOutlined';
import SentimentSatisfiedAltOutlinedIcon from '@material-ui/icons/SentimentSatisfiedAltOutlined';
import SportsEsportsOutlinedIcon from '@material-ui/icons/SportsEsportsOutlined';
import SportsTennisOutlinedIcon from '@material-ui/icons/SportsTennisOutlined';


import TimeLineElement from "./TimeLineElement";

class MytimeLine extends React.Component {

    render() {
        return (
            <>
                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="2011 - present"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        icon={<Brightness3OutlinedIcon />}
                    >

                        <TimeLineElement description="evenement 1 de rencontre" title="EVENT 1 !" date="vendredi 4 juin" horaire="12h" imgname="logojp.jpg">
                        </TimeLineElement>

                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="2010 - 2011"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        icon={<SportsTennisOutlinedIcon />}
                    >

                        <TimeLineElement description="evenement 2 de rencontre" title="EVENT2" date="mardi 12 juin" horaire="12h" imgname="logojp.jpg">
                        </TimeLineElement>

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
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </>
        );
    }
}

export default MytimeLine;
