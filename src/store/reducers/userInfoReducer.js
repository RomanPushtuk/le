const initState = {
    isRegistration: false,
};

export default (state = initState, action) => {
    const { type, payload } = action;

    switch (type) {
        case 'SET_USER_INFO':
            return {
                ...state,
                isRegistration: true,
                ...payload,
            };

        case 'REMOVE_USER_INFO':
            return {
                isRegistration: false,
            };

        default:
            return state;
    }
};
