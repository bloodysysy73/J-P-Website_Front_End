import React from 'react'
import { connect } from 'react-redux'
import { fetchTimeLineCard, editTimeLineCard } from '../../actions/actionTimeLineCard'
import TimeLineCardForm from './TimeLineCardForm'

import {
    Card,
    CardHeader,
    CardFooter,
    CardTitle,
} from "reactstrap";

class TimeLineCardEdit extends React.Component {

    componentDidMount() {
        this.props.fetchTimeLineCard(this.props.match.params.id)
    }

    onSubmit = formValues => {
        console.log("formvalues : ", formValues);
        this.props.editTimeLineCard(formValues)
    }

    render() {
        // if (!this.props.timeLineCard) return <div>Loading...</div>

        return (
            <>
                <div className="content">
                    <div className="container">
                        <Card className="card-user">
                            <CardHeader className="text-center">
                                <CardTitle tag="h4"> Modifier l'timeLineCard </CardTitle>

                                <TimeLineCardForm
                                    initialValues={(this.props.timeLineCard)}
                                    onSubmit={this.onSubmit}
                                />
                            </CardHeader>
                            <CardFooter>

                            </CardFooter>

                        </Card>
                    </div>
                </div>

            </>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return { timeLineCard: state.timeLineCards[ownProps.match.params.id] }
}
export default connect(
    mapStateToProps,
    { fetchTimeLineCard, editTimeLineCard }
)(TimeLineCardEdit)
