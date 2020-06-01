import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Header extends Component {
    render() {
        const { isRegistration, userName } = this.props;
        console.log(isRegistration, userName);

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
                    <p className="header_user">
                        <Link to="/user">{userName}</Link>
                    </p>
                )}
            </div>
        );
    }
}
