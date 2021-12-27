import * as CartModalCss from '../selectors/cart-modal';
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
}
