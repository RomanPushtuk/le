import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { debounce } from 'throttle-debounce';
import { Link } from 'react-router-dom';

import { DropDownMenu } from '../DropDownMenu';

import './index.scss';

export class HeaderPure extends PureComponent {
    state = {
        isMenuOpen: false,
    };

    handleDropDownMenuShow = () => {
        this.setState({ isMenuOpen: true });
    };

    handleDropDownMenuOpenHide = debounce(350, () => {
        this.setState({ isMenuOpen: false });
    });

    render() {
        const { isRegistration, userName } = this.props;

        return (
            <div className="header">
                <h1 className="header_title">
                    <Link to="/">LearnElectronics</Link>
                </h1>
                {!isRegistration && (
                    <p className="header_user">
                        <Link to="/login">Вход</Link>
                        <Link to="/registration">Регистрация</Link>
                    </p>
                )}
                {isRegistration && (
                    <p
                        onClick={this.handleDropDownMenuShow}
                        onMouseOver={this.handleDropDownMenuShow}
                        onMouseLeave={this.handleDropDownMenuOpenHide}
                        className="header_user"
                    >
                        <span className="user-name">{userName}</span>
                    </p>
                )}
                <DropDownMenu isOpen={this.state.isMenuOpen} onMouseLeave={this.handleDropDownMenuOpenHide} />
            </div>
        );
    }
}

HeaderPure.propTypes = {
    isRegistration: PropTypes.bool,
    userName: PropTypes.string,
};
