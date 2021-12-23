import * as CartModalCss from '../selectors/cart-modal';
import { Store } from '../../utils/store';
import { PageBase } from '../base/page-base';
import { Modal } from '../interfaces/modal.interface';
import { proceedToCheckoutButton } from '../selectors/check-out';

export class CartModal extends PageBase implements Modal {
    closeModal(): this {
        cy.get(CartModalCss.closeButton).click();

        return this;
    }

    proceedToCheckout(): this {
        cy.get(proceedToCheckoutButton).click();

        return this;
    }

    verifyAddedProduct(): this {
        cy.get(CartModalCss.cartModal).then($cartModal => {
            // newly added product will always have index 0
            cy.wrap($cartModal).find(CartModalCss.addedProductName)
                .should('have.text', Store.itemsAddedToCart[0].name);
        });

        return this;
    }
}
