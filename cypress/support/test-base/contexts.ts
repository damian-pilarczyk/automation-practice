import { TestSection } from './test-sections';

export const loginContext = (testSection: TestSection, title: string, callback: () => void): void => {
    context(title, () => {
        beforeEach(() => {
            cy.loginViaApi();
        });
        callback();
    });
};
