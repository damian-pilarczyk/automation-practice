/// <reference types="Cypress" />
import './commands/user-commands';

Cypress.on('test:before:run', (details) => {
    /* ... */
});
