import { loginContext } from '../support/test-base/contexts';
import { spec } from '../support/test-base/spec';
import { TestCategory } from '../support/test-base/test-categories';
import { TestSection } from '../support/test-base/test-sections';

loginContext(TestSection.account, 'context_1', () => {
    spec(TestCategory.smoke, 'spec_1', () => {
        cy.visit(Cypress.env('base_url'));
    });  
});
