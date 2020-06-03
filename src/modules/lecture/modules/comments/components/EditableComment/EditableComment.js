import React, { Component } from 'react';
import { LocalStorageAPI, LearnElectronicAPI } from '../../../../../../apis';
import moment from 'moment';

export class EditableComment extends Component {
    constructor(props) {
        super(props);
        this.text = this.props.comment.text;
        this.state = {
            isEdit: false,
        };
    }

    handleOnChange = (event) => {
        this.text = event.target.value;
    };

    handleDeleteComment = () => {
        const { updateComments, comment } = this.props;

        LearnElectronicAPI.deleteComment(comment.id).then((comment) => {
            updateComments(comment);
        });
    };

    startEditComment = () => {
        this.setState({ isEdit: true });
    };

    finishEditComment = () => {
        const { updateComments, comment } = this.props;

        LearnElectronicAPI.editComment({ commentId: comment.id, text: this.text }).then((comments) => {
            updateComments(comments);
        });

        this.setState({ isEdit: false });
    };

    renderTextArea = () => {
        const { text } = this.props.comment;

        return (
            <div className="editable">
                <textarea className="text-area" onChange={this.handleOnChange}>
                    {text}
                </textarea>
                <p className="estimation" onClick={this.finishEditComment}>
                    <span>Изменить</span>
                </p>
            </div>
        );
    };

    renderText = () => {
        return (
            <p className="estimation">
                <span onClick={this.startEditComment}>Редактировать</span>
                <span onClick={this.handleDeleteComment}>Удалить</span>
            </p>
        );
    };

    render() {
        const { userName, dateTime, text } = this.props.comment;

        return (
            <div className="container_comment">
                <p className="info">
                    <span className="info_user-name">{userName}</span>
                    <span className="info_time">{dateTime}</span>
                </p>
                {!this.state.isEdit && <p className="comment_text">{text}</p>}
                {this.state.isEdit ? this.renderTextArea() : this.renderText()}
            </div>
        );
    }
}
