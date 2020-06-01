import React, { Component } from 'react';

export class TestProgressHeader extends Component {
    render() {
        const { lectureTitle, currentQuestion, totalQuestions } = this.props;

        return (
            <div className="tasks_info-container">
                <p className="info-container_info">
                    {lectureTitle}{' '}
                    <span className="info_progress">
                        {currentQuestion} из {totalQuestions} вопросов
                    </span>
                </p>
            </div>
        );
    }
}
