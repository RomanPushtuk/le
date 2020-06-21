import React, { PureComponent } from 'react';

import './index.scss';

export class ErrorMessage extends PureComponent {
    render() {
        return (
            <div className="error-message">
                <h4 className="title">Ошибка!</h4>
                <p className="subtitle">{this.props.text}</p>
            </div>
        );
    }
}
