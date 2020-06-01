import React, { Component } from 'react';

export class LectureHeader extends Component {
    render() {
        const { lectureTitle, info } = this.props;

        return (
            <div className="lecture_header">
                <div className="header_container">
                    <h4 className="container_title">{lectureTitle}</h4>
                    <p className="container_title">{info}</p>
                </div>
            </div>
        );
    }
}
