import {
    GET_CARS, GET_CAR_BRANDS, GET_CATEGORIES,GET_CATEGORIES_LEVEL_1,GET_CATEGORIES_LEVEL_2
} from '../action/categoriesAction';

const initialState = {
    categories: [],
    carBrands: [],
    cars: [],
    categoriesLevel1: [],
    categoriesLevel2: [],
};


export default function (state = initialState, action) {
    switch (action.type) {
        case GET_CATEGORIES:
            return { ...state, categories: action.payload, };
        case GET_CAR_BRANDS:
            return { ...state, carBrands: action.payload, };
        case GET_CARS:
            return { ...state, cars: action.payload, };
            case GET_CATEGORIES_LEVEL_1:
                return { ...state, categoriesLevel1: action.payload, };
                case GET_CATEGORIES_LEVEL_2:
                return { ...state, categoriesLevel2: action.payload, };
        default:
            return state;
    }
}