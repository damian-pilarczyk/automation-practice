import * as Env from './../consts/cypress-env-vars-names';
import { getRandomAddress, getRandomEmail, getRandomName, getRandomNumber, getRandomPassword } from '../helpers/random-helper';
import { emailInput, passwordInput, submitButton } from '../page/selectors/auth';

Cypress.Commands.add('signIn', () => {
    cy.get(emailInput).type(Cypress.env(Env.userEmail));    
    cy.get(passwordInput).type(Cypress.env(Env.userPassword));
    return cy.get(submitButton).click();
});

Cypress.Commands.add('loginViaApi',  () => 
    cy.request({
        method: 'POST',
        url: `${Cypress.env(Env.baseUrl)}${Cypress.env(Env.authEndpoint)}`,
        body: {
            email: Cypress.env(Env.userEmail),
            passwd: Cypress.env(Env.userPassword),
            SubmitLogin: '',
        },
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
        },
    }).then(res => {
        const [cookieName, cookieValue] = res.requestHeaders.cookie.split('=');
        cy.setCookie(cookieName, cookieValue);
    })
);

Cypress.Commands.add('registerViaApi',  () => {
    const firstname = getRandomName();
    const lastname = getRandomName();
    const body = {
        email: getRandomEmail(),
        passwd: getRandomPassword(),
        firstname: firstname,
        lastname: lastname,
        customer_firstname: firstname,
        customer_lastname: lastname,
        address1: getRandomAddress(),
        city: getRandomName(),
        postcode: getRandomNumber(10000, 99999),
        id_country: 21,
        id_state: getRandomNumber(1, 50),
        phone_mobile: getRandomNumber(Math.pow(10, 9), Math.pow(10, 10) - 1),
        alias: 'My address',
        email_create: 1,
        is_new_customer: 1,
        submitAccount: '',
    };
    return cy.request({
        method: 'POST',
        url: `${Cypress.env(Env.baseUrl)}${Cypress.env(Env.authEndpoint)}`,
        body: body,
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
        },
    }).then(() => {
        Cypress.env(Env.userEmail, body.email);
        Cypress.env(Env.userPassword, body.address1);
        Cypress.env(Env.userFirstName, body.firstname);
        Cypress.env(Env.userLastName, body.lastname);
    });
});
