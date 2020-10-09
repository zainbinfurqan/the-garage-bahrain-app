export const GET_CATEGORIES = 'GET_CATEGORIES';
export const GET_CAR_BRANDS = 'GET_CAR_BRANDS';
export const GET_CARS = 'GET_CARS';
import apis from '../../configuration/apis'


const action = {};

action.getCategoriesAction = function (data) {
    return async function (dispatch) {
        let response = await apis.getCategory();
        dispatch({ type: GET_CATEGORIES, payload: response });
    };
};

action.getCarBrandsAction = function (data) {
    return async function (dispatch) {
        let response = await apis.getCarBrands();
        dispatch({ type: GET_CAR_BRANDS, payload: response });
    };
};

action.getCarAction = function (data) {
    return async function (dispatch) {
        let response = await apis.getCars();
        dispatch({ type: GET_CARS, payload: response });
    };
};


export default action