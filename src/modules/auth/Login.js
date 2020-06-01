import React, { Component } from 'react';
import { LearnElectronicAPI } from '../../apis';
import Cookies from 'js-cookie';

export class Login extends Component {
    constructor(props) {
        super(props);
        this.fields = {
            login: '',
            password: '',
        };
    }

    handleChange = (event) => {
        const text = event.target.value;
        const { field } = event.target.dataset;

        this.fields[field] = text;
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const { login, password } = this.fields;

        LearnElectronicAPI.login({ login, password }).then((userInfo) => {
            const { history } = this.props;
            const { id } = userInfo;

            console.log(userInfo);

            Cookies.set('userId', id);

            localStorage.setItem('userInfo', JSON.stringify(userInfo));

            history.push('/');
        });
    };

    render() {
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
                        type="text"
                        placeholder="Пароль"
                    />
                    <button onClick={this.handleSubmit} className="form_submit">
                        Войти
                    </button>
                </form>
            </div>
        );
    }
}
