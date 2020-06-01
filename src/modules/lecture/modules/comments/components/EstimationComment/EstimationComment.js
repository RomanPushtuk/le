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

        LearnElectronicAPI.likeComment({ commentId }).then((likes) => {
            this.setState({ likes });
        });
    };

    dislikeComment = () => {
        const { commentId } = this.props;

        LearnElectronicAPI.dislikeComment({ commentId }).then((dislikes) => {
            this.setState({ dislikes });
        });
    };

    render() {
        const { dislikes, likes } = this.state;

        return (
            <p className="estimation">
                <span onClick={this.likeComment}>Лайков - {dislikes}</span>
                <span onClick={this.dislikeComment}>Дизлайков - {likes}</span>
            </p>
        );
    }
}
