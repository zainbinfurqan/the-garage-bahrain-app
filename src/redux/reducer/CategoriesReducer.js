import {
    GET_CARS, GET_CAR_BRANDS, GET_CATEGORIES
} from '../action/categoriesAction';

const initialState = {
    categories: [],
    carBrands: [],
    cars: [],
};


export default function (state = initialState, action) {
    switch (action.type) {
        case GET_CATEGORIES:
            return { ...state, categories: action.payload, };
        case GET_CAR_BRANDS:
            return { ...state, carBrands: action.payload, };
        case GET_CARS:
            return { ...state, cars: action.payload, };
        default:
            return state;
    }
}