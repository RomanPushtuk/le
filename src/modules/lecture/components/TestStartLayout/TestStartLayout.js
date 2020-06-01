import React, { Component } from 'react';

export class TestStartLayout extends Component {
    render() {
        const { title, description, onStartTest } = this.props;

        return (
            <div>
                <div className="tasks_content-container">
                    <h4 className="tasks_title">{title}</h4>
                    <p className="tasks_description">{description}</p>
                </div>
                <button className="tasks_btn-start" onClick={onStartTest}>
                    Начать тест
                </button>
            </div>
        );
    }
}
