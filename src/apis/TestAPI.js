import { themes, lecture, comments } from '../constants';
import { LocalStorageAPI } from './LocalStorageAPI';

export class TestAPI {
    static authorizationId(id) {
        LocalStorageAPI.setUserId(id);
        return Promise.resolve();
    }

    static getThemes(userId) {
        return Promise.resolve(themes);
    }

    static getLecture(lectureId) {
        return Promise.resolve(lecture);
    }

    static addComment(lectureId, comment) {
        const newComments = [...comments, comment];

        return Promise.resolve(newComments);
    }

    static removeComment(commentId) {
        const newComments = comments.filter((comment) => comment.id !== commentId);

        return Promise.resolve(newComments);
    }

    static editComment(commentId, editComment) {
        const newComments = comments.map((comment) => {
            if (comment.id === commentId) {
                return editComment;
            }

            return comment;
        });

        return Promise.resolve(newComments);
    }

    static likeComment(commentId) {
        const newComments = comments.map((comment) => {
            if (comment.id === commentId) {
                comment.status = 'like';
                return comment;
            }

            return comment;
        });

        return Promise.resolve(newComments);
    }

    static dislikeComment(commentId) {
        const newComments = comments.map((comment) => {
            if (comment.id === commentId) {
                comment.status = 'dislike';
                return comment;
            }

            return comment;
        });

        return Promise.resolve(newComments);
    }
}
