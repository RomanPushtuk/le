import React, { Component } from 'react';
import Cookies from 'js-cookie';
import { LearnElectronicAPI } from '../../../apis';

import { ErrorMessage } from '../ErrorMessage';

export class RegistrationPure extends Component {
    constructor(props) {
        super(props);

        this.fields = {
            userName: '',
            login: '',
            password: '',
            confirmPassword: '',
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
        const { userName, login, password, confirmPassword } = this.fields;

        if (login.length < 6) return this.setState({ errorMessage: 'Длинная логина должна быть больше 6 символов.' });
        if (password.length < 6)
            return this.setState({ errorMessage: 'Длинна пароля должена быть больше 6 символов.' });
        if (password !== confirmPassword) return this.setState({ errorMessage: 'Пароли не совпадают.' });

        LearnElectronicAPI.registration({ userName, login, password })
            .then((userInfo) => {
                const { history, setUserInfo } = this.props;
                const { id } = userInfo;

                Cookies.set('userId', id);
                setUserInfo(userInfo);
                history.push('/');
            })
            .catch(() => {
                this.setState({ errorMessage: 'Не удалось зарегистрировать пользователя.' });
            });
    };

    render() {
        const { errorMessage } = this.state;

        return (
            <div className="registration">
                <form className="registration_form">
                    <h1 className="form_title">Регистрация</h1>
                    <p className="form_input-label">Имя пользователя:</p>
                    <input
                        onChange={this.handleChange}
                        data-field="userName"
                        className="form_input"
                        type="text"
                        placeholder="Имя пользователя"
                    />
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
                    <p className="form_input-label">Повторите пароль:</p>
                    <input
                        onChange={this.handleChange}
                        data-field="confirmPassword"
                        className="form_input"
                        type="password"
                        placeholder="Повторите пароль"
                    />
                    <button onClick={this.handleSubmit} className="form_submit">
                        Зарегистрироваться
                    </button>
                </form>
                {errorMessage && <ErrorMessage text={errorMessage} />}
            </div>
        );
    }
}
