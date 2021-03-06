import React, { Component } from 'react';
import { Comments } from './modules/comments';
import { LearnElectronicAPI } from '../../apis';
import { Menu, Editor, Text } from './components';
import { Test } from './modules/test';

/* lectureId: id-шник лекции который получаем из строки URL */

export class Lecture extends Component {
    state = {
        isError: false,
        isLoading: true,
        selectedComponent: 'text',
    };

    componentDidMount() {
        const lectureId = Number(this.props.match.params.id);

        LearnElectronicAPI.getLecture(lectureId)
            .then((lecture) => {
                this.setState({ ...lecture, isLoading: false });
            })
            .catch(() => {
                this.setState({ isError: this, isLoading: false });
            });
    }

    handleChangeComponent = (name) => {
        this.setState({ selectedComponent: name });
    };

    updateComments = (comments) => {
        this.setState({ comments });
    };

    renderLecture = () => {
        const { selectedComponent, id, title, comments, content, test } = this.state;

        return (
            <div className="lecture">
                <Menu onChangeComponent={this.handleChangeComponent} />
                {selectedComponent === 'editor' && <Editor />}
                {selectedComponent === 'text' && <Text source={content} />}
                {selectedComponent === 'tests' && <Test lectureId={id} lectureTitle={title} test={test} />}
                {selectedComponent === 'comments' && (
                    <Comments
                        lectureId={id}
                        lectureTitle={title}
                        updateComments={this.updateComments}
                        comments={comments}
                    />
                )}
            </div>
        );
    };

    render() {
        const { isError, isLoading } = this.state;

        return isError ? <p>Ошибка получения лекции</p> : <>{isLoading ? <p>Загрузка...</p> : this.renderLecture()}</>;
    }
}
