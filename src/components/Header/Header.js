import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { DropDownMenu } from '../DropDownMenu';

import './index.scss';

export class Header extends Component {
    state = {
        isMenuOpen: false,
    };

    throttle = (func, ms) => {
        let isThrottled = false,
            savedArgs,
            savedThis;

        function wrapper() {
            if (isThrottled) {
                // (2)
                savedArgs = arguments;
                savedThis = this;
                return;
            }

            func.apply(this, arguments); // (1)

            isThrottled = true;

            setTimeout(function () {
                isThrottled = false; // (3)
                if (savedArgs) {
                    wrapper.apply(savedThis, savedArgs);
                    savedArgs = savedThis = null;
                }
            }, ms);
        }

        return wrapper;
    };

    handleMouseUp = () => {
        this.setState({ isMenuOpen: true });
    };

    handleMouseLeave = this.throttle(() => {
        this.setState({ isMenuOpen: false });
    }, 500);

    render() {
        const { isRegistration, userName } = this.props;

        return (
            <div className="header">
                <h1 className="header_title">
                    <Link to="/">LearnElectronic</Link>
                </h1>
                {!isRegistration && (
                    <p className="header_user">
                        <Link to="/login">Вход</Link>
                        <Link to="/registration">Регистрация</Link>
                    </p>
                )}
                {isRegistration && (
                    <p onMouseOver={this.handleMouseUp} onMouseLeave={this.handleMouseLeave} className="header_user">
                        {userName}
                    </p>
                )}
                <DropDownMenu isOpen={this.state.isMenuOpen} />
            </div>
        );
    }
}
