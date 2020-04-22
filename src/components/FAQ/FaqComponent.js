import React from "react";
import { connect } from 'react-redux'

import 'react-vertical-timeline-component/style.min.css';
import QuestionsDefault from 'components/FAQ/QuestionsDefault'
import QuestionFormView from "./QuestionFormView";
import QuestionsUsers from 'components/FAQ/QuestionsUsers'

import { fetchQuestions } from "../../actions/actionQuestions";

class FaqComponent extends React.Component {


    componentDidMount() {
        this.props.fetchQuestions();
    }

    render() {
        let questions = this.props.questions;
        questions.reverse();

        return (
            <>
                <QuestionsDefault></QuestionsDefault><br />
                <QuestionFormView></QuestionFormView>
                <QuestionsUsers questions={questions}>
                </QuestionsUsers>
            </>
        );
    }
}


const mapStateToProps = state => {
    return {
        questions: Object.values(state.questions),
        login: state.auth.login
    }
}

export default connect(
    mapStateToProps,
    { fetchQuestions }
)(FaqComponent)
