import React, { Component } from 'react';
import cn from 'classnames';
import { AnswerFormGroup } from '../AnswerFormGroup';

export class Answers extends Component {
    renderAnswers = () => {
        const { answers, correctAnswers, questions } = this.props;

        return questions.map((question, index) => {
            const { description, component, variants } = question;
            const answer = answers[index];
            const correctAnswer = correctAnswers[index];

            return (
                <div className="answers_container" key={index}>
                    <h4 className="title">
                        Вопрос: {description} <span className={cn('span-info')}>{null}</span>
                    </h4>
                    <AnswerFormGroup
                        component={component}
                        variants={variants}
                        answer={answer}
                        correctAnswer={correctAnswer}
                    />
                </div>
            );
        });
    };

    render() {
        const { onTestFinish } = this.props;

        return (
            <div className="answers">
                <h1 className="answers_title">Ответы</h1>
                {this.renderAnswers()}
                <button className="answers_btn-finish" onClick={onTestFinish}>
                    Завершить тест
                </button>
            </div>
        );
    }
}
