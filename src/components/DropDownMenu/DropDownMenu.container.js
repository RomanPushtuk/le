import { connect } from 'react-redux';
import { DropDownMenuPure } from './DropDownMenuPure';

import removeUserInfo from '../../store/actions/removeUserInfo';

const mapDispatchToProps = (dispatch) => ({
    removeUserInfo: removeUserInfo(dispatch),
});

export const DropDownMenu = connect(null, mapDispatchToProps)(DropDownMenuPure);
