import { CONSTANTS } from './constants'
import {
    REGISTRATION,
    GETCATEGORIES, GETCARS, GETCARBRANDS,GETLEVEL1CATEGORIES,GETLEVEL2CATEGORIES
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

//get categories level 1
apis.getCategoryLevel1 = async function (body = null, authorization = null, headers = null) {
    return await helper.apiMethod(
        null,
        'GET',
        body,
        authorization,
        `${CONSTANTS.BASE_URL}${GETLEVEL1CATEGORIES}`,
    );
};

//get categories level 2
apis.getCategoryLevel2 = async function (body = null, authorization = null, headers = null) {
    return await helper.apiMethod(
        null,
        'GET',
        body,
        authorization,
        `${CONSTANTS.BASE_URL}${GETLEVEL2CATEGORIES}`,
    );
};


export default apis