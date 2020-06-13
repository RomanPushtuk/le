import { connect } from 'react-redux';
import { HeaderPure } from './HeaderPure';

const mapStateToProps = (state) => ({
    userName: state.userInfo.userName,
    isRegistration: state.userInfo.isRegistration,
});

export const Header = connect(mapStateToProps)(HeaderPure);
