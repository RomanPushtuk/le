import React, { Component } from 'react';
import cn from 'classnames';

import './index.scss';

export class DropDownMenu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: props.isOpen,
        };
    }

    handleMouseUp = () => {
        this.setState({ isOpen: true });
    };

    handleMouseLeave = () => {
        this.setState({ isOpen: false });
    };

    render() {
        return (
            <div
                onMouseOver={this.handleMouseUp}
                onMouseLeave={this.handleMouseLeave}
                className={cn('drop-down-menu', this.state.isOpen && 'open')}
            >
                <p className="menu_item">Личный кабинет</p>
                <p className="menu_item">Выход</p>
            </div>
        );
    }
}
