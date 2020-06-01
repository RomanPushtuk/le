import React, { Component } from 'react';
import { SectionHeader, Themes } from './components';
import { LearnElectronicAPI } from '../../apis';

export class Section extends Component {
    state = {
        isError: false,
        isLoading: true,
        themes: null,
    };

    componentDidMount() {
        LearnElectronicAPI.getThemes()
            .then((themes) => {
                this.setState({
                    isLoading: false,
                    themes,
                });
            })
            .catch(() => {
                this.setState({
                    isLoading: false,
                    isError: true,
                });
            });
    }

    render() {
        const { isError, isLoading, themes } = this.state;

        return (
            <div className="section">
                {isError && <p>Ошибка получения данных</p>}
                {isLoading && <p>Получение данных</p>}
                {!isLoading && !isError && (
                    <>
                        <SectionHeader />
                        <Themes themes={themes} />
                    </>
                )}
            </div>
        );
    }
}
