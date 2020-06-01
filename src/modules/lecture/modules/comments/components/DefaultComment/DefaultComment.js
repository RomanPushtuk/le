import React, { Component } from 'react';
import { EstimationComment } from '../EstimationComment';

export class DefaultComment extends Component {
    render() {
        const { id, userName, dateTime, text, likes, dislikes } = this.props.comment;

        return (
            <div className="container_comment">
                <p className="info">
                    <span className="info_user-name">{userName}</span>
                    <span className="info_time">{dateTime}</span>
                </p>
                <p className="comment_text">{text}</p>
                <EstimationComment commentId={id} likes={likes} dislikes={dislikes} />
            </div>
        );
    }
}
