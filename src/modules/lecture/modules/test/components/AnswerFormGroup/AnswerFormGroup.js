import React, { Component } from 'react';
import { Checkbox } from '../Checkbox';
import { Radio } from '../Radio';

const componentMap = {
    checkbox: Checkbox,
    radiobutton: Radio,
};

export class AnswerFormGroup extends Component {
    renderFormGroup = () => {
        const { component, variants, answer, correctAnswer } = this.props;
        const Element = componentMap[component];

        return variants.map((value, index) => {
            return <Element key={value} value={value} index={index} onChange={() => {}} />;
        });
    };

    render() {
        return <form className="test_form-group">{this.renderFormGroup()}</form>;
    }
}
