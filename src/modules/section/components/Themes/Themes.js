import React, { Component } from 'react';
import { ThemesList } from '../ThemesList';
import { ThemeHeader } from '../ThemeHeader';
import { Lectures } from '../Lectures';

export class Themes extends Component {
    constructor(props) {
        super(props);

        const { themes } = this.props;

        this.state = {
            theme: themes[0],
            themes,
        };
    }

    handleSelect = (theme) => {
        this.setState({ theme });
    };

    render() {
        const { theme, themes } = this.state;

        // TODO - на бэке переименовать свойтво
        const { id, title, date, description, ligthLectures: lightLectures } = theme;

        return (
            <div className="section_themes">
                <ThemeHeader title={title} date={date} description={description} />
                <div className="themes_content">
                    <div className="content_container">
                        <ThemesList selectedThemeId={id} themes={themes} onSelect={this.handleSelect} />
                        <Lectures lightLectures={lightLectures} />
                    </div>
                </div>
            </div>
        );
    }
}
