import React from 'react'
import { connect } from 'react-redux'
import { fetchTimeLineCard, editTimeLineCard } from '../../actions/actionTimeLineCard'
import TimeLineCardForm from './TimeLineCardForm'

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import TimeLineCard from './TimeLineCard';

import Brightness3OutlinedIcon from '@material-ui/icons/Brightness3Outlined';

import {
    Card,
    CardHeader,
    CardFooter,
    CardTitle,
} from "reactstrap";

class TimeLineCardEdit extends React.Component {

    componentDidMount() {
        const { id } = this.props.match.params;

        this.props.fetchTimeLineCard(id)
    }

    onSubmit = formValues => {
        console.log("formvalues : ", formValues);
        this.props.editTimeLineCard(formValues)
    }

    render() {
        // if (!this.props.timeLineCard) return <div>Loading...</div>
        if (this.props.timeLineCard) {
            return (
                <>
                    <div className="content">
                        <div className="container">
                            <Card className="card-user">
                                <CardHeader className="text-center">
                                    <CardTitle tag="h4"> Modifier l'évènement</CardTitle>

                                    <TimeLineCardForm
                                        initialValues={(this.props.timeLineCard)}
                                        onSubmit={this.onSubmit}
                                    />
                                </CardHeader>
                                <CardFooter>

                                </CardFooter>

                            </Card>
                            <div >
                                <div className="text-center">Prévisualtion de l'évènement : </div> <br />
                                {/* publicationLineCard était ici */}
                            </div>
                        </div>
                        <VerticalTimeline>
                            <VerticalTimelineElement
                                className="vertical-publicationline-element--work"
                                date={this.props.timeLineCard.poste_le}
                                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                                icon={<Brightness3OutlinedIcon />}
                            >

                                <TimeLineCard
                                    title={this.props.timeLineCard.title}
                                    date={this.props.timeLineCard.date}
                                    description={this.props.timeLineCard.description}
                                    horaire={this.props.timeLineCard.heure} >
                                </TimeLineCard>
                            </VerticalTimelineElement>
                        </VerticalTimeline>

                    </div>

                </>
            )
        } return <div></div>
    }
}

const mapStateToProps = (state, ownProps) => {
    return { timeLineCard: state.timeLineCards[ownProps.match.params.id] }
}
export default connect(
    mapStateToProps,
    { fetchTimeLineCard, editTimeLineCard }
)(TimeLineCardEdit)
