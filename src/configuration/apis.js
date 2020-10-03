import { CONSTANTS } from './constants'
import { REGISTRATION } from './urls'


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

export default apis