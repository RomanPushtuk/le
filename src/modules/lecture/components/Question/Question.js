import React, { Component } from 'react';
import { Checkboxes } from '../Checkboxes';

export class Question extends Component {
    renderSuccessInfo = () => {
        const { complete, attempt } = this.props;

        return (
            <span className="question_info success">
                Выполнено успешно ({complete} из {attempt})
            </span>
        );
    };

    renderFailedInfo = () => {
        const { complete, attempt } = this.props;

        return (
            <span className="question_info failed">
                Выполнено успешно ({complete} из {attempt})
            </span>
        );
    };

    render() {
        const { text, component, questions, onChange, onNext, decide, complete, attempt } = this.props;

        const info = complete === attempt ? this.renderSuccessInfo() : this.renderFailedInfo();

        return (
            <div className="question">
                <h6 className="test_question">
                    Вопрос: {text} {decide && info}
                </h6>
                {!decide && <h4 className="test_variant">Выберите вырианты из списка</h4>}
                {component === 'checkbox' && <Checkboxes decide={decide} questions={questions} onChange={onChange} />}
            </div>
        );
    }
}
