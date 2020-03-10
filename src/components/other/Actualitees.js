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

class Actualitees extends React.Component {

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

                        <TimeLineElement description="Notre association fondée en 1994 par quelques parents de multiples s’appelait initialement ADEPM Association d’entraide des parents de multiples… si le nom a changé c’est toujours sa vocation ! Agrément par l’UDAF (Union départementale des associations familiales), reconnaissance d’utilité publique via notre fédération nationale, autant de preuves que notre travail est nécessaire !

Gérée uniquement par des bénévoles, nous avons la volonté d’être un relais pour les parents. Avoir des jumeaux peut paraître courant, idéal pour certains même, par expérience, nous nous dirions plutôt : c’est probablement deux fois plus de boulot mais c’est aussi deux fois plus de bonheur !" title="Editorial" date="vendredi 4 juin" horaire="12h" imgname="logojp.jpg">
                        </TimeLineElement>

                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="2010 - 2011"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        icon={<SportsTennisOutlinedIcon />}
                    >

                        <TimeLineElement description="Pour le prochain numéro de la gazette, Mathilde voudrait aborder le sujet :  Les bêtises de vos multiples.
A bientôt ! Quand vous le pouvez,
 faites parvenir vos textes par e-mail à Mélanie et à Caroline." title="Appel à volontaires"  imgname="logojp.jpg">
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

export default Actualitees;
