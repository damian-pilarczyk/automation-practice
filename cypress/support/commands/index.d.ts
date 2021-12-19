declare namespace Cypress {
    interface Chainable {
        /**
         * Send the login request and set the login cookie
         */
        loginViaApi(): Chainable<any>;
    }
}
