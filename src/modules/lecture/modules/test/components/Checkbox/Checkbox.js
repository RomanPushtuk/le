import React, { Component } from 'react';
import cn from 'classnames';

export class Checkbox extends Component {
    handleChange = (event) => {
        const { value, onChange } = this.props;

        onChange(value);
    };

    render() {
        const { value, checked } = this.props;

        return (
            <label className="form-group_label">
                <input
                    className="label_checkbox"
                    type="checkbox"
                    checked={checked}
                    value={value}
                    onChange={this.handleChange}
                />
                <span className="label_text">{value}</span>
            </label>
        );
    }
}
