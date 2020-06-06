import React, { Component } from 'react';
import { questionGenerator } from '../../../../utils';
import { LearnElectronicAPI } from '../../../../../../apis';

import { Question } from '../Question';
import { Answers } from '../Answers';

export class Questions extends Component {
    constructor(props) {
        super(props);
        const { questions, onNext } = this.props;

        this.questionGenerator = questionGenerator(questions, onNext);

        const { value, done } = this.questionGenerator.next();

        if (done) throw Error;

        this.answers = [];

        this.state = {
            question: value,
            correctAnswers: null,
            isQuestionsComplete: false,
        };
    }

    handleNext = (answers) => {
        const { value, done } = this.questionGenerator.next();

        this.answers.push(answers);

        if (done) {
            const { lectureId } = this.props;

            return LearnElectronicAPI.completeTest({ lectureId, answers: this.answers }).then(({ correctAnswers }) => {
                this.setState({ correctAnswers, isQuestionsComplete: true });
            });
        }

        this.setState({ question: value });
    };

    renderQuestion = () => {
        const { question } = this.state;

        return <Question question={question} onNext={this.handleNext} />;
    };

    renderAnswers = () => {
        const { onTestFinish, questions } = this.props;
        const { correctAnswers } = this.state;

        return (
            <Answers
                answers={this.answers}
                correctAnswers={correctAnswers}
                questions={questions}
                onTestFinish={onTestFinish}
            />
        );
    };

    render() {
        return this.state.isQuestionsComplete ? this.renderAnswers() : this.renderQuestion();
    }
}
