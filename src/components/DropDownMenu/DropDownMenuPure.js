import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Cookies from 'js-cookie';

import cn from 'classnames';

import './index.scss';

export const DropDownMenuPure = ({ removeUserInfo, isOpen, onMouseLeave }) => {
    const [state, setState] = useState({ isOpen: false });
    const history = useHistory();

    const handleMouseOver = () => {
        setState({ isOpen: true });
    };

    const handleMouseLeave = () => {
        setState({ isOpen: false });
        onMouseLeave();
    };

    const handleExit = () => {
        Cookies.remove('userId');
        removeUserInfo();
        history.push('/');
    };

    return (
        <div
            onMouseOver={handleMouseOver}
            onMouseLeave={handleMouseLeave}
            className={cn('drop-down-menu', (isOpen || state.isOpen) && 'open')}
        >
            <p className="menu_item">
                <Link to="/user">Личный кабинет</Link>
            </p>
            <p onClick={handleExit} className="menu_item exit">
                Выход
            </p>
        </div>
    );
};
