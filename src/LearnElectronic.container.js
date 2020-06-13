import { connect } from 'react-redux';
import { LearnElectronicPure } from './LearnElectronicPure';

import setUserInfo from './store/actions/setUserInfo';

const mapDispatchToProps = (dispatch) => ({
    setUserInfo: setUserInfo(dispatch),
});

export default connect(null, mapDispatchToProps)(LearnElectronicPure);
