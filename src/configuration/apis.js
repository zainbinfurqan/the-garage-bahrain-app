import { CONSTANTS } from './constants'
import {
    REGISTRATION,
    GETCATEGORIES
} from './urls'


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


export default apis