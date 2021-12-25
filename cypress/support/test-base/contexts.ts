import { activeSections, baseUrl } from '../consts/cypress-env-vars-names';
import { Home } from '../page/content-pages/home/home';
import { TestSection } from './test-sections';

function desktopContextBase(
    section: TestSection,
    callback: (homePage: Home) => void, 
    beforeEachFunc: () => void): void {
    const mwebSectionsToTestEnv = Cypress.env(activeSections);
    const mwebSectionsToTest = String(mwebSectionsToTestEnv)
        .toLowerCase()
        .split(',')
        .map((x) => TestSection[x.trim() as keyof typeof TestSection]);

    const isToTest = mwebSectionsToTest.includes(section);

    if (isToTest || mwebSectionsToTestEnv === 'all' || !mwebSectionsToTestEnv) {context(TestSection[section], () => {
        if (beforeEachFunc) {
            beforeEach(() => {
                beforeEachFunc();
            });
        }
        callback(new Home());
    });
    }    
}

export const desktopContext = (
    testSection: TestSection, 
    callback: (homePage: Home) => void): void => {
    desktopContextBase(testSection, callback, () => cy.viewport('macbook-16').visit(Cypress.env(baseUrl)));
};

export const desktopLoginContext = (
    testSection: TestSection, 
    callback: (homePage: Home) => void): void => {
    desktopContextBase(testSection, callback, () => cy.loginViaApi().viewport('macbook-16').visit(Cypress.env(baseUrl)));
};
