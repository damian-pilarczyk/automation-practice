import fetch from 'node-fetch';
import { getRandomUserBody, RegistrationRequestBody } from '../support/api/registration/body';
import * as Env from '../support/consts/cypress-env-vars-names';

function sendRegistrationRequest(url: string, body: RegistrationRequestBody): void {
    const formBody = [];
    for (const property in body) {
        const encodedKey = encodeURIComponent(property);
        const encodedValue = encodeURIComponent(body[property]);
        formBody.push(encodedKey + '=' + encodedValue);
    }
    const urlBody = formBody.join('&');

    fetch(url, {
        method: 'POST',
        body: urlBody,
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
        },
    });
}

module.exports = (on, config) => {     
    const body = getRandomUserBody();

    sendRegistrationRequest(`${config.env[Env.baseUrl]}${config.env[Env.authEndpoint]}`, body);

    config.env[Env.userEmail] = body.email;
    config.env[Env.userPassword] = body.passwd;
    config.env[Env.userFirstName] = body.firstname;
    config.env[Env.userLastName] = body.lastname;

    return config;
};
