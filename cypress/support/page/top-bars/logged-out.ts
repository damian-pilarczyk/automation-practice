import { PageBase } from '../base/page-base';
import { TopBarBase } from './top-bar-base';
import { Mixin } from 'ts-mixer';
import { accountName, signInText } from '../selectors/top-bar';

export class LoggedOut extends Mixin(TopBarBase, PageBase) {      
    clickSignIn(): this {
        cy.contains(signInText).click();

        return this;
    }

    verifyUserIsLoggedOut(): this {
        cy.contains(signInText).should('exist');
        cy.get(accountName).should('not.exist');

        return this;
    }
}
