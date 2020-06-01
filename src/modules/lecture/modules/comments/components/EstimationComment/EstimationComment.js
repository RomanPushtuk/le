import React, { Component } from 'react';
import { LearnElectronicAPI } from '../../../../../../apis';
import cn from 'classnames';

export class EstimationComment extends Component {
    constructor(props) {
        super(props);

        this.state = {
            likes: props.likes,
            dislikes: props.dislikes,
        };
    }

    likeComment = () => {
        const { commentId } = this.props;

        LearnElectronicAPI.likeComment({ id: commentId }).then((likes) => {
            this.setState({ likes });
        });
    };

    dislikeComment = () => {
        const { commentId } = this.props;

        LearnElectronicAPI.dislikeComment({ id: commentId }).then((dislikes) => {
            this.setState({ dislikes });
        });
    };

    render() {
        const { dislikes, likes } = this.state;

        return (
            <p className="estimation">
                <span onClick={this.likeComment}>Лайков - {likes}</span>
                <span onClick={this.dislikeComment}>Дизлайков - {dislikes}</span>
            </p>
        );
    }
}
