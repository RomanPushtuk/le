import { connect } from 'react-redux';
import { RegistrationPure } from './RegistrationPure';

import setUserInfo from '../../../store/actions/setUserInfo';

const mapDispatchToProps = (dispatch) => ({
    setUserInfo: setUserInfo(dispatch),
});

export const Registration = connect(null, mapDispatchToProps)(RegistrationPure);
