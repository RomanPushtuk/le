import React, { Component } from 'react';
import { FormGroup } from '../FormGroup';
import cn from 'classnames';
import { getDiffOptions, getCorrectOptions } from '../../utils';

export class Answers extends Component {
    renderAnswers = () => {
        const { correctAnswers, answers } = this.props;

        // return answers.map((value, index) => {
        //     const userOptions = answers[index];
        //     const userCorrectOptions = getDiffOptions(testOptions, userOptions);
        //     const questionTotalCorrectOptions = getCorrectOptions(testOptions);
        //     const infoStyle = userCorrectOptions === questionTotalCorrectOptions ? 'correct' : 'wrong';
        //     // const info = `правильно (${userCorrectOptions} из ${questionTotalCorrectOptions})`;
        //
        //     return (
        //         <div className="answers_container" key={index}>
        //             <h4 className="title">
        //                 Вопрос: {title} <span className={cn('span-info', infoStyle)}>{null}</span>
        //             </h4>
        //             <FormGroup component={component} testOptions={testOptions} userOptions={userOptions} />
        //         </div>
        //     );
        // });
    };

    render() {
        const { onTestFinish } = this.props;

        return (
            <div className="answers">
                <h1 className="answers_title">Ответы</h1>
                <button className="answers_btn-finish" onClick={onTestFinish}>
                    Завершить тест
                </button>
            </div>
        );
    }
}
