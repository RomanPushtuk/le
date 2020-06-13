import React, { PureComponent } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import Cookies from 'js-cookie';

import { Header } from './components';
import { Section, Lecture, Login, Registration, UserAccount } from './modules';

import { LearnElectronicAPI } from './apis';

export class LearnElectronicPure extends PureComponent {
    state = {
        isLoading: true,
        isError: false,
    };

    /* Проверям авторизацию */
    componentDidMount() {
        const userId = Cookies.get('userId');

        if (userId) {
            LearnElectronicAPI.getAccount()
                .then((userInfo) => {
                    const { id } = userInfo;

                    Cookies.set('userId', id);
                    this.props.setUserInfo(userInfo);
                })
                .catch(() => {
                    this.setState({ isLoading: false });
                });
        }

        this.setState({ isLoading: false });
    }

    render() {
        const { isError, isLoading } = this.state;

        return (
            <BrowserRouter>
                <Header />
                {!isLoading && (
                    <Switch>
                        <Route exact path="/" component={Section} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/registration" component={Registration} />
                        <Route exact path="/user" component={UserAccount} />
                        <Route exact path="/lecture/:id" component={Lecture} />
                    </Switch>
                )}
                {isLoading && <p>Получение данных</p>}
                {isError && <p>Ошибка сервера</p>}
            </BrowserRouter>
        );
    }
}

LearnElectronicPure.propTypes = {
    setUserInfo: PropTypes.func,
};
