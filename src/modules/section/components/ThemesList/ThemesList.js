import React, { Component } from 'react';
import cn from 'classnames';

export class ThemesList extends Component {
    handleSelect = (theme) => {
        this.props.onSelect(theme);
    };

    renderItems = () => {
        return this.props.themes.map((theme, index) => {
            const { id, title } = theme;
            const selected = id === this.props.selectedThemeId ? 'selected' : null;

            return (
                <li className="themes-list_item" key={index}>
                    <p className={cn('item_title', selected)} onClick={() => this.handleSelect(theme)}>
                        <span className="title_number">{index + 1}.</span>
                        {title}
                    </p>
                </li>
            );
        });
    };

    render() {
        return (
            <div className="content_themes-list">
                <h4 className="themes-list_title">Выберите тему</h4>
                <ul>{this.renderItems()}</ul>
            </div>
        );
    }
}
