export default (dispatch) => () => {
    dispatch({ type: 'REMOVE_USER_INFO' });
};
