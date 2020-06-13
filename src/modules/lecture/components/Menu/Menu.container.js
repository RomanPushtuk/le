import { connect } from 'react-redux';
import { MenuPure } from './MenuPure';

const mapStateToProps = (state) => ({
    isRegistration: state.userInfo.isRegistration,
});

export const Menu = connect(mapStateToProps, null)(MenuPure);
