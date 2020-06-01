import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Cookies from 'js-cookie';
import { Header } from './components';
import { Section, Lecture, Login, Registration, UserAccount } from './modules';
import { LearnElectronicAPI } from './apis';

export const { Provider, Consumer } = React.createContext(12);

export class LearnElectronic extends Component {
    state = {
        isLoading: true,
        isError: false,
        isRegistration: false,
        userInfo: null,
    };

    /* Проверям авторизацию */
    componentDidMount() {
        const userId = Cookies.get('userId');

        if (userId) {
            return LearnElectronicAPI.getAccount()
                .then((userInfo) => {
                    const { id, userName } = userInfo;

                    Cookies.set('userId', id);

                    this.setState({
                        isLoading: false,
                        isRegistration: true,
                        userName,
                    });
                })
                .catch(() => {
                    this.setState({ isLoading: false });
                });
        }

        this.setState({ isLoading: false });
    }

    render() {
        const { isRegistration, isError, isLoading, userName } = this.state;

        return (
            <Provider value={isRegistration}>
                <BrowserRouter>
                    <Header isRegistration={isRegistration} userName={userName} />
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
            </Provider>
        );
    }
}
