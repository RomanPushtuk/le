import React, { Component } from 'react';
import cn from 'classnames';
import { difference } from 'ramda';
import { AnswerFormGroup } from '../AnswerFormGroup';

export class Answers extends Component {
    renderAnswers = () => {
        const { answers, correctAnswers, questions } = this.props;

        return questions.map((question, index) => {
            const { description, component, variants } = question;
            const answer = answers[index].split(',');
            const correctAnswer = correctAnswers[index].split(',');

            const result = difference(answer, correctAnswer);
            const style = result.length === 0 ? 'correct' : 'wrong';
            const text = result.length === 0 ? 'правильно!' : 'ошибка!';

            return (
                <div className="answers_container" key={index}>
                    <h4 className="title">
                        Вопрос: {description} <span className={cn('span-info', style)}>{text}</span>
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
