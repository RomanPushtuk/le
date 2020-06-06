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

        this.state = {
            answers: [],
            question: value,
            correctAnswers: null,
            isQuestionsComplete: false,
        };
    }

    handleNext = (answers) => {
        const { value, done } = this.questionGenerator.next();

        if (done) {
            const { lectureId } = this.props;

            return LearnElectronicAPI.completeTest({ lectureId, answers: this.state.answers }).then(
                ({ correctAnswers }) => {
                    this.setState({ correctAnswers, isQuestionsComplete: true });
                }
            );
        }

        return this.setState((prevState) => {
            return { question: value, answers: [...prevState.answers, answers] };
        });
    };

    renderQuestion = () => {
        const { question } = this.state;

        return <Question question={question} onNext={this.handleNext} />;
    };

    renderAnswers = () => {
        const { onTestFinish, questions } = this.props;
        const { correctAnswers, answers } = this.state;

        return (
            <Answers
                answers={answers}
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
