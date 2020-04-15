import React from "react";
import 'react-vertical-timeline-component/style.min.css';
import Questions from 'components/FAQ/Questions'
import QuestionFormView from "./QuestionFormView";

class FaqComponent extends React.Component {

    render() {
        return (
            <>
                <Questions></Questions><br />
                <QuestionFormView></QuestionFormView>
            </>
        );
    }
}

export default FaqComponent;
