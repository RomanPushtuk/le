import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { store } from './store';
import LearnElectronic from './LearnElectronic.container';

import './style/reset.scss';
import './style/index.scss';

ReactDOM.render(
    <Provider store={store}>
        <LearnElectronic />
    </Provider>,
    document.getElementById('root')
);
