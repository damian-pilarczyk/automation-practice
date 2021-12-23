import { proceedToCheckoutButton } from '../selectors/check-out';
import { columns } from '../selectors/general';
import { PageBase } from './page-base';

export abstract class CheckOutComponent extends PageBase {  
    proceedToCheckout(): this {
        cy.get(`${columns} ${proceedToCheckoutButton}`).click();

        return this;
    }
}
