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
            <p className={cn('estimation', rate)}>
                <span className="likes" onClick={this.likeComment}>
                    Лайков - {likes}
                </span>
                <span className="dislikes" onClick={this.dislikeComment}>
                    Дизлайков - {dislikes}
                </span>
            </p>
        );
    }
}
