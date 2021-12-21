import { baseUrl } from '../consts/cypress-env-vars-names';
import { Home } from '../page/content-pages/home';
import { TestSection } from './test-sections';

function desktopContextBase(
    testSection: TestSection,
    callback: (homePage: Home) => void, beforeEachFunc: () => void): void {
    context(TestSection[testSection], () => {
        if (beforeEachFunc) {
            beforeEach(() => {
                beforeEachFunc();
            });
        }
        callback(new Home());
    });
}

export const desktopContext = (
    testSection: TestSection, 
    callback: (homePage: Home) => void): void => {
    desktopContextBase(testSection, callback, () => cy.visit(Cypress.env(baseUrl)));
};

export const desktopLoginContext = (
    testSection: TestSection, 
    callback: (homePage: Home) => void): void => {
    desktopContextBase(testSection, callback, () => cy.loginViaApi().visit(Cypress.env(baseUrl)));
};
