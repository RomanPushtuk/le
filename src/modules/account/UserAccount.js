import React, { Component } from 'react';
import './index.scss';

export class UserAccount extends Component {
    render() {
        return (
            <div className="account">
                <h4 className="user-name">Разрушитель Миров</h4>
                <h4 className="registration-date">29.04.2020</h4>
                <h4 className="info lecture-progress">Пройдено тестов - 40</h4>
                <h4 className="info count-comments">Количество комментариев - 4</h4>
                <h4 className="info common-progress">Общий прогресс - 4%</h4>
            </div>
        );
    }
}
