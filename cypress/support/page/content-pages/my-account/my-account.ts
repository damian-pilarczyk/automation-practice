import { baseUrl } from '../../../consts/cypress-env-vars-names';
import { PageBase } from '../../base/page-base';
import { ContentComponent } from '../../interfaces/content-component.interface';
import { accountInfo, orders } from '../../selectors/my-account';

export class MyAccount extends PageBase implements ContentComponent {    
    url = `${Cypress.env(baseUrl)}index.php?controller=my-account`;

    goToPersonalInfo(): this {
        cy.get(accountInfo).click();

        return this;
    }

    goToOrders(): this {
        cy.get(orders).click();

        return this;
    }
}
