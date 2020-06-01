import React, { Component } from 'react';

export class StartLayout extends Component {
    render() {
        const { title, description, onStartTest } = this.props;

        return (
            <div className="container_start-layout">
                <div className="start-layout_info">
                    <h4 className="info_title">{title}</h4>
                    <p className="info_description">{description}</p>
                </div>
                <button className="start-layout_btn-start" onClick={onStartTest}>
                    Начать тест
                </button>
            </div>
        );
    }
}
