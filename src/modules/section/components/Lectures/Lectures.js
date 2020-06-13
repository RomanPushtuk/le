import React, { Component } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export class Lectures extends Component {
    renderList = () => {
        return this.props.lightLectures.map((lecture, index) => {
            const { id, isCompleted, title } = lecture;

            return (
                <li className="lectures_item" key={index}>
                    <Link className="item_title" to={`/lecture/${id}`}>
                        {title}
                    </Link>
                    <p className={cn('item_progress', isCompleted && 'completed')}>{isCompleted ? 'пройдено' : 'непройдено'}</p>
                </li>
            );
        });
    };

    render() {
        return (
            <div className="themes_lectures">
                <ul>{this.renderList()}</ul>
            </div>
        );
    }
}

Lectures.propTypes = {
    lightLectures: PropTypes.array,
};
