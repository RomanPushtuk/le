import React, { Component } from 'react';
import cn from 'classnames';

export class Checkbox extends Component {
    handleChange = (event) => {
        const { checked } = event.target;
        const { value, index, onChange } = this.props;
        const userOption = { value, correct: checked };

        onChange({ index, userOption });
    };

    render() {
        const { value, style, correct } = this.props;

        return (
            <label className={cn('form-group_label', style)}>
                <input
                    className="label_checkbox"
                    type="checkbox"
                    checked={correct}
                    value={value}
                    onChange={this.handleChange}
                />
                <span className="label_text">{value}</span>
            </label>
        );
    }
}
