import React, { Component } from 'react';
import { FormGroup } from '../FormGroup';

export class Question extends Component {
    constructor(props) {
        super(props);

        this.userOptions = {};
    }

    handleOnChange = (value) => {
        this.userOptions[value] = value;
    };

    handleShowNextQuestion = () => {
        const { onNext } = this.props;

        onNext(Object.values(this.userOptions).join(','));
        this.userOptions = {};
    };

    render() {
        const { description, component, variants } = this.props.question;

        return (
            <div className="question">
                <h2 className="question_title">Тест</h2>
                <h4 className="test_question">Вопрос: {description}</h4>
                <FormGroup component={component} variants={variants} onChange={this.handleOnChange} />
                <button className="question_btn-next" onClick={this.handleShowNextQuestion}>
                    Продолжить
                </button>
            </div>
        );
    }
}
