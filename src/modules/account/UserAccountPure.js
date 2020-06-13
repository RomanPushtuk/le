import React, { Component } from 'react';
import './index.scss';

export class UserAccountPure extends Component {
    render() {
        const { userName, commentCount, completedTestCount, lectureProgress, registrationData } = this.props.userInfo;

        return (
            <div className="account">
                <h4 className="user-name">{userName}</h4>
                <h4 className="registration-date">{registrationData}</h4>
                <h4 className="info lecture-progress">Пройдено тестов - {completedTestCount}</h4>
                <h4 className="info count-comments">Количество комментариев - {commentCount}</h4>
                <h4 className="info common-progress">Общий прогресс - {lectureProgress}%</h4>
            </div>
        );
    }
}
