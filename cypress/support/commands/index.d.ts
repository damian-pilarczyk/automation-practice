declare namespace Cypress {
    interface Chainable {
        /**
             * Enter credentials and click submit button
             */
        signIn(): Chainable<any>;
        /**
             * Send the login request and set the login cookie
             */
        loginViaApi(): Chainable<any>;
        /**
             * Register the user by a request and set environmental variables user_email and user_password
             */
        registerViaApi(): Chainable<any>;
    }
}
