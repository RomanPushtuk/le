import React, { Component } from 'react';
import { Checkbox } from '../Checkbox';
import { Radio } from '../Radio';

const componentMap = {
    checkbox: Checkbox,
    radiobutton: Radio,
};

export class AnswerFormGroup extends Component {
    renderFormGroup = () => {
        const { component, variants, correctAnswer } = this.props;
        const Element = componentMap[component];

        const correctAnswerSet = new Set([...correctAnswer]);

        return variants.map((value, index) => {
            if (correctAnswerSet.has(value)) {
                return <Element key={value} checked value={value} index={index} onChange={() => {}} />;
            }
            return <Element key={value} value={value} index={index} onChange={() => {}} />;
        });
    };

    render() {
        return <form className="test_form-group">{this.renderFormGroup()}</form>;
    }
}
