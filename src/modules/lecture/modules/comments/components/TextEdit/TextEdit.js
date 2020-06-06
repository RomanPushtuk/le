import React, { Component } from 'react';
import { LocalStorageAPI, LearnElectronicAPI } from '../../../../../../apis';
import moment from 'moment';

export class TextEdit extends Component {
    state = {
        text: '',
    };

    handleOnChange = (event) => {
        this.setState({ text: event.target.value });
    };

    sendComment = () => {
        const { lectureId, updateComments } = this.props;

        LearnElectronicAPI.addComment({ lectureId, text: this.state.text }).then((newComment) => {
            updateComments(newComment);
        });

        this.setState({ text: '' });
    };

    render() {
        const { text } = this.state;

        return (
            <div className="container_text-edit">
                <div className="container_text-editor">
                    <textarea onChange={this.handleOnChange} value={text} className="text-editor_textarea" />
                </div>
                <button className="container_btn-send" onClick={this.sendComment}>
                    Оставить комментарий
                </button>
            </div>
        );
    }
}
