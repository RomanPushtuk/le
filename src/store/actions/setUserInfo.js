export default (dispatch) => (userInfo) => {
    dispatch({
        type: 'SET_USER_INFO',
        payload: userInfo,
    });
};
