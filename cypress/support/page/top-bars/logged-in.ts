import { PageBase } from '../base/page-base';
import { userFirstName, userLastName } from '../../consts/cypress-env-vars-names';
import { accountName, signOutText } from '../selectors/top-bar';
import { TopBarBase } from './top-bar-base';
import { Mixin } from 'ts-mixer';

export class LoggedIn extends Mixin(PageBase, TopBarBase) {    
    logOut(): this {
        cy.contains(signOutText).click();
        
        return this;
    }

    goToMyAccount(): this {
        cy.get(accountName).click();

        return this;
    }
    
    verifyUserIsLoggedIn(): this {
        cy.contains(signOutText).should('exist');
        cy.get(accountName).should('have.text', `${Cypress.env(userFirstName)} ${Cypress.env(userLastName)}`);

        return this;
    }
}
