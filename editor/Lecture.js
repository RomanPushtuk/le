class Lecture {
    constructor({id, lectureTitle, lectureContent, test, comments}){
        this.id = id;
        this.lectureTitle = lectureTitle;
        this.lectureContent = lectureContent;
        this.test = test;
        this.comments = comments;
    }

    getCountComments() {
        return this.comments.length;
    }

    getComment(commentId) {
        return this.comments.find(comment => comment.id === commentId);
    }

    addComment(comment) {
        const incId = this.getCountComments();
        this.comments.push({id: incId, ...comment})
        return this.comments
    }

    deleteComment(commentId) {
        return this.comments.filter(comment => comment.id !== commentId);
    }

    changeComment(commentId, newComment) {
        const comment = this.getComment(commentId);

        Object.assign(comment, ...newComment);
        return this.comments;
    }

    likeComment(commentId) {
        const comment = this.getComment(commentId);

        if (comment.vote === "default" || comment.vote === "dislike") {
            comment.vote === "like";
        }

        if (comment.vote === "like") {
            comment.vote === "default";
        }

        return this.comments;
    }

    dislikeComment(commentId) {
        const comment = this.getComment(commentId);

        if (comment.vote === "default" || comment.vote === "like") {
            comment.vote === "dislike";
        }

        if (comment.vote === "dislike") {
            comment.vote === "default";
        }

        return this.comments;
    }
}

module.exports = Lecture;