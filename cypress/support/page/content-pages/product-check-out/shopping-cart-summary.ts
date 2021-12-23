import { baseUrl } from '../../../consts/cypress-env-vars-names';
import { ContentComponent } from '../../interfaces/content-component.interface';
import { CheckOutComponent } from '../../base/check-out-component';
import { Store } from '../../../utils/store';
import { totalPrice } from '../../selectors/check-out';

export class ShoppingCartSummary extends CheckOutComponent implements ContentComponent { 
    url = `${Cypress.env(baseUrl)}index.php?controller=order`;

    proceedToCheckout(): this {
        cy.get(totalPrice).then($total => Store.lastOrder.totalPrice = $total.text());
        
        return super.proceedToCheckout();
    }
}
