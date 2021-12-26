import * as Env from './../consts/cypress-env-vars-names';
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
    })
);
