import React, { Component } from 'react';
import { LocalStorageAPI, TestAPI } from '../../../../../../apis';
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
        console.log('Удаление коммента');
    };

    renderText = () => {
        return (
            <p className="estimation">
                <span onClick={this.startEditComment}>Редактировать</span>
                <span onClick={this.handleDeleteComment}>Удалить</span>
            </p>
        );
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

    startEditComment = () => {
        this.setState({ isEdit: true });
    };

    finishEditComment = () => {
        const { updateComments, comment: oldComment } = this.props;

        const dateTime = moment().format('YYYY.MM.DD HH:mm');
        const comment = {
            ...oldComment,
            text: this.text,
            dateTime,
        };

        TestAPI.editComment(oldComment.id, comment).then((comments) => {
            updateComments(comments);
        });
        this.setState({ isEdit: false });
    };

    render() {
        const { avatar, authorName, dateTime, text } = this.props.comment;

        return (
            <div className="container_comment">
                <p className="info">
                    <span className="info_user-name">{authorName}</span>
                    <span className="info_time">{dateTime}</span>
                </p>
                {!this.state.isEdit && <p className="comment_text">{text}</p>}
                {this.state.isEdit ? this.renderTextArea() : this.renderText()}
            </div>
        );
    }
}
