import React, { Component } from 'react';
import { LearnElectronicAPI } from '../../../apis';
import Cookies from 'js-cookie';

import { ErrorMessage } from '../ErrorMessage';

export class LoginPure extends Component {
    constructor(props) {
        super(props);
        this.fields = {
            login: '',
            password: '',
        };

        this.state = {
            errorMessage: null,
        };
    }

    handleChange = (event) => {
        const text = event.target.value;
        const { field } = event.target.dataset;

        this.fields[field] = text;
        this.setState({ errorMessage: null });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const { login, password } = this.fields;

        if (login.length < 6) return this.setState({ errorMessage: 'Длинная логина должна быть больше 6 символов' });
        if (password.length < 6) return this.setState({ errorMessage: 'Длинна пароля должена быть больше 6 символов' });

        LearnElectronicAPI.login({ login, password })
            .then((userInfo) => {
                const { history, setUserInfo } = this.props;
                const { id } = userInfo;

                Cookies.set('userId', id);
                setUserInfo(userInfo);
                history.push('/');
            })
            .catch(() => {
                this.setState({ errorMessage: 'Не удалось авторизовать пользователя.' });
            });
    };

    render() {
        const { errorMessage } = this.state;

        return (
            <div className="login">
                <form className="login_form">
                    <h1 className="form_title">Войти</h1>
                    <p className="form_input-label">Логин:</p>
                    <input
                        onChange={this.handleChange}
                        data-field="login"
                        className="form_input"
                        type="text"
                        placeholder="Логин"
                    />
                    <p className="form_input-label">Пароль:</p>
                    <input
                        onChange={this.handleChange}
                        data-field="password"
                        className="form_input"
                        type="password"
                        placeholder="Пароль"
                    />
                    <button onClick={this.handleSubmit} className="form_submit">
                        Войти
                    </button>
                </form>
                {errorMessage && <ErrorMessage text={errorMessage} />}
            </div>
        );
    }
}
