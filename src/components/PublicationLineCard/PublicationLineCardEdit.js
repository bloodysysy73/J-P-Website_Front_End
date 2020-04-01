import React from 'react'
import { connect } from 'react-redux'
import { fetchPublicationLineCard, editPublicationLineCard } from '../../actions/actionPublication'
import PublicationLineCardForm from './PublicationLineCardForm'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import PublicationLineCard from './PublicationLineCard';

import Brightness3OutlinedIcon from '@material-ui/icons/Brightness3Outlined';

import {
    Card,
    CardHeader,
    CardFooter,
    CardTitle,
} from "reactstrap";


class PublicationLineCardEdit extends React.Component {

    componentDidMount() {
        const { id } = this.props.match.params;

        this.props.fetchPublicationLineCard(id);
    }

    onSubmit = formValues => {
        console.log("formvalues : ", formValues);
        this.props.editPublicationLineCard(formValues)
    }

    render() {
        if (this.props.publicationLineCard) {
            return (
                <>
                    <div className="content">
                        <div className="container">
                            <Card className="card-user">
                                <CardHeader className="text-center">
                                    <CardTitle tag="h4"> Modifier la publication </CardTitle>

                                    <PublicationLineCardForm
                                        initialValues={(this.props.publicationLineCard)}
                                        onSubmit={this.onSubmit}
                                    />
                                </CardHeader>
                                <CardFooter></CardFooter>
                            </Card>

                            <div >
                                <div className="text-center">Prévisualtion de la publication : </div> <br />
                                {/* publicationLineCard était ici */}
                            </div>
                        </div>
                        <VerticalTimeline>
                            <VerticalTimelineElement
                                className="vertical-publicationline-element--work"
                                date={this.props.publicationLineCard.poste_le || ' '}
                                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                                icon={<Brightness3OutlinedIcon />}
                            >

                                <PublicationLineCard
                                    title={this.props.publicationLineCard.title}
                                    title2={this.props.publicationLineCard.title2}
                                    description={this.props.publicationLineCard.description}
                                    description2={this.props.publicationLineCard.description2} >
                                </PublicationLineCard>
                            </VerticalTimelineElement>
                        </VerticalTimeline>
                    </div>

                </>
            )
        } return <div></div>
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        publicationLineCard: state.publicationLineCards[ownProps.match.params.id],
    }
}
export default connect(
    mapStateToProps,
    { fetchPublicationLineCard, editPublicationLineCard }
)(PublicationLineCardEdit)
