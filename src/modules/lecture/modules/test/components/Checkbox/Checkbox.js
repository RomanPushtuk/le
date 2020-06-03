import React, { Component } from 'react';
import cn from 'classnames';

export class Checkbox extends Component {
    handleChange = (event) => {
        const { value, onChange } = this.props;

        onChange(value);
    };

    render() {
        const { value } = this.props;

        return (
            <label className="form-group_label">
                <input className="label_checkbox" type="checkbox" value={value} onChange={this.handleChange} />
                <span className="label_text">{value}</span>
            </label>
        );
    }
}
