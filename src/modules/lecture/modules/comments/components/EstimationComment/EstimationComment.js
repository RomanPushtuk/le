import React, { Component } from 'react';
import { LearnElectronicAPI } from '../../../../../../apis';
import cn from 'classnames';

export class EstimationComment extends Component {
    constructor(props) {
        super(props);

        this.state = {
            rate: props.rate,
            likes: props.likes,
            dislikes: props.dislikes,
        };
    }

    likeComment = () => {
        const { commentId } = this.props;

        LearnElectronicAPI.likeComment({ id: commentId }).then((data) => {
            this.setState({ ...data });
        });
    };

    dislikeComment = () => {
        const { commentId } = this.props;

        LearnElectronicAPI.dislikeComment({ id: commentId }).then((data) => {
            this.setState({ ...data });
        });
    };

    render() {
        const { dislikes, likes, rate } = this.state;

        return (
            <div className={cn('estimation', rate)}>
                <span onClick={this.likeComment}>Лайков - {likes}</span>
                <span onClick={this.dislikeComment}>Дизлайков - {dislikes}</span>
            </div>
        );
    }
}
