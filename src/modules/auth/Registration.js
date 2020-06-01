import React, { Component } from 'react';
import Cookies from 'js-cookie';
import { LearnElectronicAPI } from '../../apis';

export class Registration extends Component {
    constructor(props) {
        super(props);

        this.fields = {
            userName: '',
            login: '',
            password: '',
            confirmPassword: '',
        };

        this.state = {
            error: null,
        };
    }

    handleChange = (event) => {
        const text = event.target.value;
        const { field } = event.target.dataset;

        this.fields[field] = text;
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const { userName, login, password } = this.fields;

        LearnElectronicAPI.registration({ userName, login, password }).then((userInfo) => {
            const { history } = this.props;
            const { id, userName, registrationData, completedTestCount, commentCount, lecturesProgress } = userInfo;

            Cookies.set('userId', id);

            localStorage.setItem(
                'userInfo',
                JSON.stringify({
                    userName,
                    registrationData,
                    completedTestCount,
                    commentCount,
                    lecturesProgress,
                })
            );

            history.push('/');
        });
    };

    render() {
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
                        type="text"
                        placeholder="Пароль"
                    />
                    <p className="form_input-label">Повторите пароль:</p>
                    <input
                        onChange={this.handleChange}
                        data-field="confirmPassword"
                        className="form_input"
                        type="text"
                        placeholder="Повторите пароль"
                    />
                    <button onClick={this.handleSubmit} className="form_submit">
                        Зарегистрироваться
                    </button>
                </form>
            </div>
        );
    }
}
