import {
    SET_USERDATA,
    LOGOUT,
} from '../action/AuthAction';

const initialState = {
    userData: { id: '001', name: "Zain Ahmed", email: 'zain.ahmed1995@gmail.com', role: ['admin'] },
    isLogin: true,
    apiResponseError: { isError: false, errorMessage: '', flag: '' },
};


export default function (state = initialState, action) {
    switch (action.type) {
        case SET_USERDATA:
            return { ...state, userData: action.payload, isLogin: true };
        case LOGOUT:
            return { ...state, userData: null, isLogin: false };
        default:
            return state;
    }
}