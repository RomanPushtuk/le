import React, { Component } from 'react';

export class Checkboxes extends Component {
    renderCheckboxes = () => {
        const answers = Object.keys(this.props.questions);

        return answers.map((value) => {
            return (
                <label className="form_label" key={Math.random()}>
                    <input className="label_checkbox" type="checkbox" value={value} onChange={this.props.onChange} />
                    <span className="label_test">{value}</span>
                </label>
            );
        });
    };

    renderAnswersCheckboxes = () => {
        const answers = Object.entries(this.props.questions);

        return answers.map(([value, checked]) => {
            return (
                <label className="form_label" key={Math.random()}>
                    <input
                        className="label_checkbox"
                        type="checkbox"
                        checked={checked}
                        value={value}
                        onChange={this.props.onChange}
                    />
                    <span className="label_test">{value}</span>
                </label>
            );
        });
    };

    render() {
        return (
            <form className="test_form">
                {this.props.decide ? this.renderAnswersCheckboxes() : this.renderCheckboxes()}
            </form>
        );
    }
}
