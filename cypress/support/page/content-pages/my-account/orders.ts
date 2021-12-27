import { baseUrl } from '../../../consts/cypress-env-vars-names';
import { Store } from '../../../utils/store';
import { PageBase } from '../../base/page-base';
import { ContentComponent } from '../../interfaces/content-component.interface';
import * as MyAccountCss from '../../selectors/my-account';

export class Orders extends PageBase implements ContentComponent {    
    url = `${Cypress.env(baseUrl)}index.php?controller=history`;

    verifyLastOrder(): this {
        cy.get(MyAccountCss.ordersFirstRow).then($firstRow => {
            const expectedPaymentMethod = Store.lastOrder.paymentMethod === 'check' ? 'Payment by check' : Store.lastOrder.paymentMethod;
            expect($firstRow.find(MyAccountCss.orderReference).text().trim()).to.be.eq(Store.lastOrder.reference);
            expect($firstRow.find(MyAccountCss.orderDate).text().trim()).to.be.eq(Store.lastOrder.date);
            expect($firstRow.find(MyAccountCss.orderTotalPrice).text().trim()).to.be.eq(Store.lastOrder.totalPrice);
            expect($firstRow.find(MyAccountCss.orderPaymentMethod).text().trim()).to.be.eq(expectedPaymentMethod);
        });

        return this;
    }    
}
