import React, { Component } from 'react';
import { StartLayout, Questions } from './components';
import { LectureHeader } from '../../components/LectureHeader';

import './index.scss';

export class Test extends Component {
    state = {
        isTest: false,
        currentQuestion: 0,
    };

    handleNext = (currentQuestion) => {
        this.setState({ currentQuestion });
    };

    handleTestFinish = () => {
        this.setState({
            isTest: false,
        });
    };

    handleStartTest = () => {
        this.setState({
            isTest: true,
        });
    };

    render() {
        const { isTest, currentQuestion } = this.state;
        const { test, lectureId, lectureTitle } = this.props;
        const { title, description, questions } = test;
        const info = `пройдено ${currentQuestion} из ${questions.length}`;

        return (
            <div className="lecture_test">
                <LectureHeader lectureTitle={lectureTitle} info={info} />
                <div className="test_container">
                    {isTest ? (
                        <Questions
                            lectureId={lectureId}
                            questions={questions}
                            onNext={this.handleNext}
                            onTestFinish={this.handleTestFinish}
                        />
                    ) : (
                        <StartLayout title={title} description={description} onStartTest={this.handleStartTest} />
                    )}
                </div>
            </div>
        );
    }
}
