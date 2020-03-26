import React from 'react'
import { connect } from 'react-redux'
import { createTimeLineCard } from '../../actions/actionTimeLineCard'
import TimeLineCardForm from './TimeLineCardForm'

import {
    Card,
    CardHeader,
    CardFooter,
    CardTitle,
} from "reactstrap";

class TimeLineCardCreate extends React.Component {
    componentDidMount() {
    }

    onSubmit = formValues => {
        console.log("formvalues creation : ", formValues);
        this.props.createTimeLineCard(formValues)
    }

    render() {

        return (
            <>
                <div className="content">
                    <div className="container">
                        <Card className="card-user">
                            <CardHeader className="text-center">
                                <CardTitle tag="h4"> Créer un évenement </CardTitle>

                                <TimeLineCardForm
                                    onSubmit={this.onSubmit}
                                    isCreation={true}
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
    return "";
}

export default connect(
    mapStateToProps,
    { createTimeLineCard }
)(TimeLineCardCreate)
