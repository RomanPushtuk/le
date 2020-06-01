import React, { Component } from 'react';
import { LocalStorageAPI, LearnElectronicAPI } from '../../../../../../apis';
import moment from 'moment';

export class TextEdit extends Component {
    constructor(props) {
        super(props);
        this.text = '';
    }

    handleOnChange = (event) => {
        this.text = event.target.value;
    };

    sendComment = () => {
        const { lectureId, updateComments } = this.props;

        LearnElectronicAPI.addComment({ lectureId, text: this.text }).then((newComment) => {
            updateComments(newComment);
        });
    };

    render() {
        return (
            <div className="container_text-edit">
                <div className="container_text-editor">
                    <textarea onChange={this.handleOnChange} className="text-editor_textarea" />
                </div>
                <button className="container_btn-send" onClick={this.sendComment}>
                    Оставить комментарий
                </button>
            </div>
        );
    }
}
