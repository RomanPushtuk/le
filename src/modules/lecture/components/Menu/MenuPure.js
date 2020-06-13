import React, { Component } from 'react';
import cn from 'classnames';
import { menuItems } from './constants';

export class MenuPure extends Component {
    state = {
        selectedComponent: 'text',
    };

    handleOnClick = (name) => {
        this.setState({ selectedComponent: name });
        this.props.onChangeComponent(name);
    };

    renderItemsWithContext = () => {
        const items = this.props.isRegistration ? menuItems.registered : menuItems.unregistered;

        return items.map((item, index) => {
            const { name, access, img } = item;
            const selected = this.state.selectedComponent === name ? 'selected' : null;
            const disabled = access ? null : 'disabled';

            return (
                <div
                    key={index}
                    className={cn('menu_item', selected, disabled)}
                    onClick={access ? () => this.handleOnClick(name) : null}
                >
                    <img className="item_img" src={img} />
                </div>
            );
        });
    };

    renderItems = () => {
        return this.state.menuItems.map((item, index) => {
            const { name } = item;
            const selected = this.state.selectedComponent === name ? 'selected' : null;

            return (
                <div key={index} className={cn('menu_item', selected)} onClick={() => this.handleOnClick(name)}>
                    <img className="item_img" src="https://image.flaticon.com/icons/svg/759/759247.svg" />
                </div>
            );
        });
    };

    render() {
        return <div className="lecture_menu">{this.renderItemsWithContext()}</div>;
    }
}
