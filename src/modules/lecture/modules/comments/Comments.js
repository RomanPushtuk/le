import React, { Component } from 'react';
import { LectureHeader } from '../../components/LectureHeader';
import { TextEdit, CommentList } from './components';

import './index.scss';

export class Comments extends Component {
    render() {
        const { lectureId, lectureTitle, updateComments, comments } = this.props;
        const countComments = comments.length;

        return (
            <div className="lecture_comments">
                <LectureHeader lectureTitle={lectureTitle} info={`${countComments} комментариев`} />
                <h4 className="comments_title">Комментарии</h4>
                <div className="comments_container">
                    <CommentList updateComments={updateComments} comments={comments} />
                    <TextEdit lectureId={lectureId} updateComments={updateComments} />
                </div>
            </div>
        );
    }
}
