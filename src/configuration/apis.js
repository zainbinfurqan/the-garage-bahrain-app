import { CONSTANTS } from './constants'
import {
    REGISTRATION,
    GETCATEGORIES, GETCARS, GETCARBRANDS
} from './urls'
import helper from '../utils/helpers'

const apis = {}


apis.registration = async function (body = null, authorization = null, headers = null) {
    return await helper.apiMethod(
        null,
        'POST',
        body,
        authorization,
        `${CONSTANTS.BASE_URL}${REGISTRATION}`,
    );
};

//get categories
apis.getCategory = async function (body = null, authorization = null, headers = null) {
    return await helper.apiMethod(
        null,
        'GET',
        body,
        authorization,
        `${CONSTANTS.BASE_URL}${GETCATEGORIES}`,
    );
};

//get car brands
apis.getCarBrands = async function (body = null, authorization = null, headers = null) {
    return await helper.apiMethod(
        null,
        'GET',
        body,
        authorization,
        `${CONSTANTS.BASE_URL}${GETCARBRANDS}`,
    );
};

//get cars
apis.getCars = async function (body = null, authorization = null, headers = null) {
    return await helper.apiMethod(
        null,
        'GET',
        body,
        authorization,
        `${CONSTANTS.BASE_URL}${GETCARS}`,
    );
};



export default apis