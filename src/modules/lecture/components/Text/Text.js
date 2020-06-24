import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';

import './index.scss';

export class Text extends Component {
    render() {
        const { source } = this.props;

        console.log(source)

        return (
            <div className="text">
                <ReactMarkdown source={source.toString()} />
            </div>
        );
    }
}
