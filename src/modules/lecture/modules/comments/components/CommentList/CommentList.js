import React, { Component } from 'react';
import Cookies from 'js-cookie';
import { EditableComment } from '../EditableComment';
import { DefaultComment } from '../DefaultComment';

export class CommentList extends Component {
    render() {
        const { updateComments, comments } = this.props;
        const userId = Number(Cookies.get('userId'));

        return comments.map((comment) => {
            const { id, userId: authorId } = comment;

            if (authorId === userId) {
                return <EditableComment key={id} updateComments={updateComments} comment={comment} />;
            }

            return <DefaultComment key={id} updateComments={updateComments} comment={comment} />;
        });
    }
}
