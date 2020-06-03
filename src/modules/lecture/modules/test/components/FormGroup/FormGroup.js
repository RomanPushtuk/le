import React, { Component } from 'react';
import { path } from 'ramda';
import { Checkbox } from '../Checkbox';
import { Radio } from '../Radio';

const componentMap = {
    checkbox: Checkbox,
    radiobutton: Radio,
};

export class FormGroup extends Component {
    renderFormGroup = () => {
        const { component, variants, onChange } = this.props;
        const Element = componentMap[component]

        return variants.map((value, index) => {
            return <Element key={value} value={value} index={index} onChange={onChange} />;
        });
    };

    render() {
        return <form className="test_form-group">{this.renderFormGroup()}</form>;
    }
}
