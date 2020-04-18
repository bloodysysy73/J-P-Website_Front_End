import React from "react";
import 'react-vertical-timeline-component/style.min.css';
import QuestionsDefault from 'components/FAQ/QuestionsDefault'
import QuestionFormView from "./QuestionFormView";
import QuestionsUsers from 'components/FAQ/QuestionsUsers'


const question = {
    'titre': 'aaaaaaaaaaaa',
    'texte': 'bbbbbbbbb'
}

class FaqComponent extends React.Component {


    componentDidMount() {

    }

    render() {
        return (
            <>
                <QuestionsDefault></QuestionsDefault><br />
                <QuestionFormView></QuestionFormView>
                <QuestionsUsers question={question}> </QuestionsUsers>
            </>
        );
    }
}

export default FaqComponent;
