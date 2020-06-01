import React, { Component } from 'react';
import { Question } from '../Question';
import { questionGenerator, getDiff } from '../../utils';

export class Test extends Component {
    constructor(props) {
        super(props);

        this.questionGenerator = questionGenerator(this.props.questions, this.props.onNext);
        this.currentCheckboxes = {};
        this.answers = [];

        const { value, done } = this.questionGenerator.next();

        if (done) throw Error;

        this.state = {
            test: value,
            isComplete: false,
        };
    }

    handleChange = (event) => {
        const field = event.target.value;

        if (typeof this.currentCheckboxes[field] === 'undefined') {
            return (this.currentCheckboxes[field] = true);
        }

        this.currentCheckboxes[field] = !this.currentCheckboxes[field];
    };

    showAnswers = () => {
        this.setState({ isComplete: true });
    };

    handleNext = () => {
        const { value, done } = this.questionGenerator.next();

        this.answers.push(this.currentCheckboxes);
        this.currentCheckboxes = {};

        if (done) return this.showAnswers();

        this.setState({ test: value });
    };

    renderTestLayout = () => {
        const { text, component, questions } = this.state.test;

        return (
            <div>
                <h2 className="test_title">Тест</h2>
                <h6 className="test_question">
                    Вопрос: {text} {decide && info}
                </h6>
                <Question text={text} component={component} questions={questions} onChange={this.handleChange} />
                <button className="test_btn" onClick={this.handleNext}>
                    Продолжить
                </button>
            </div>
        );
    };

    handleTestFinish = () => {
        this.props.onTestFinish(this.answers);
    };

    renderShowAnswers = () => {
        return (
            <div>
                <h2 className="test_title">Ответы</h2>
                {this.props.questions.map((question, index) => {
                    const { text, component, questions } = question;
                    const [attempt, complete] = getDiff(questions, this.answers[index]);

                    return (
                        <Question
                            text={text}
                            component={component}
                            questions={questions}
                            attempt={attempt}
                            complete={complete}
                            decide
                        />
                    );
                })}
                <button className="test_btn" onClick={this.handleTestFinish}>
                    Завершить
                </button>
            </div>
        );
    };

    render() {
        return this.state.isComplete ? this.renderShowAnswers() : this.renderTestLayout();
    }
}
