import { connect } from 'react-redux';
import { UserAccountPure } from './UserAccountPure';

const mapStateToProps = (state) => ({
    userInfo: state.userInfo,
});

export const UserAccount = connect(mapStateToProps)(UserAccountPure);
