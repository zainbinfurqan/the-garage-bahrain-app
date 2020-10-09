
const helpers = {};
import { CONSTANTS } from '../configuration/constants'

helpers.concatName = function (value) {
    if (value.firstName && value.lastName) {
        return value.firstName + ' ' + value.lastName
    }
    if (value.firstName && !value.lastName) {
        return value.firstName
    }
    if (!value.firstName && value.lastName) {
        return value.lastName
    }
}

helpers.dateFormate = function (formate, value) {
    if (formate === 'YYYY-MM-DD') {
        return moment(value).formate(formate)
    }
    if (formate === 'DD-MM-YYYY') {
        return moment(value).formate(formate)
    }
    if (formate === 'ddd mmm yyyy') {
        return moment(value).formate(formate)
    }
}

helpers.sortDescendingFNForString = function sortDescendingFNForString(label, data) {
    if (label) {
        return data.slice().sort((a, b) => b[`${label}`] - a[`${label}`])
    }
}

helpers.sortAscendingFNForString = function sortAscendingFNForString(label, data) {
    if (label) {
        return data.slice().sort((a, b) => a[`${label}`] - b[`${label}`])
    }
}

helpers.sortDescendingFNForDate = function sortDescendingFNForDate(label, data) {
    if (label) {
        return data.slice().sort((a, b) => new Date(b.created_at) - new Date(a.created_at))

    }
}

helpers.sortAscendingFNForDate = function sortAscendingFNForDate(label, data) {
    if (label) {
        return data.slice().sort((a, b) => new Date(a.created_at) - new Date(b.created_at))
    }
}



//api method
helpers.apiMethod = async function (path = null, method = null, body = null, authorization = null, url = null) {
    try {
        let apiUrl = url;

        if (!apiUrl) {
            apiUrl = CONSTANTS.BASE_URL + path;
        }
        const headers = {};

        if (authorization) {
            headers.authorization = authorization;
        }

        if (method !== 'GET') {
            headers['Content-Type'] = 'application/json';
        }

        const options = {
            method,
            headers,
        };

        if (body) {
            options['body'] = JSON.stringify(body);
        }
        const response = await fetch(apiUrl, options);
        const json = await response.json();
        if (response.status !== 200) {
            throw new Error(json.message);
        }

        return await json;
    } catch (e) {
        throw e;
    }
};

export default helpers