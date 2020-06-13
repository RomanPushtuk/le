import { connect } from 'react-redux';
import { LoginPure } from './LoginPure';

import setUserInfo from '../../../store/actions/setUserInfo';

const mapDispatchToProps = (dispatch) => ({
    setUserInfo: setUserInfo(dispatch),
});

export const Login = connect(null, mapDispatchToProps)(LoginPure);
