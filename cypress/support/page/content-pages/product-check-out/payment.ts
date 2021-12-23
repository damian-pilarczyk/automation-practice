import { baseUrl } from '../../../consts/cypress-env-vars-names';
import { orderReferenceText, payByText } from '../../selectors/check-out';
import { ContentComponent } from '../../interfaces/content-component.interface';
import { CheckOutComponent } from '../../base/check-out-component';
import { Store } from '../../../utils/store';

export class Payment extends CheckOutComponent implements ContentComponent { 
    url = `${Cypress.env(baseUrl)}index.php?controller=order&multi-shipping=`;  

    confirmOrder(): this {
        this.proceedToCheckout();
        cy.get('div').contains(orderReferenceText).then($p => {
            const regex = new RegExp(/[A-Z]{9}/);
            Store.lastOrder.reference = regex.exec($p.text())[0];
            Store.lastOrder.date = new Date().toLocaleString('en-US').split(',')[0];
        });

        return this;
    }

    payByBankWire(): this {
        return this.payBy('bank wire');
    }

    payByCheck(): this {
        return this.payBy('check');
    }

    verifyOrderIsCorrectlyCompleted(): this {
        cy.contains('Your order on My Store is complete.').should('exist');

        return this;
    }

    private payBy(paymentMethod: string): this {
        cy.contains(payByText(paymentMethod)).click();
        Store.lastOrder.paymentMethod = paymentMethod;

        return this;
    }    
}
