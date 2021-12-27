import { Authentication } from '../support/page/content-pages/my-account/authentication';
import { MyAccount } from '../support/page/content-pages/my-account/my-account';
import { Orders } from '../support/page/content-pages/my-account/orders';
import { Address } from '../support/page/content-pages/product-check-out/address';
import { Payment } from '../support/page/content-pages/product-check-out/payment';
import { Shipping } from '../support/page/content-pages/product-check-out/shipping';
import { ShoppingCartSummary } from '../support/page/content-pages/product-check-out/shopping-cart-summary';
import { CartModal } from '../support/page/modals/cart-modal';
import { LoggedIn } from '../support/page/top-bars/logged-in';

desktopContext(section.order, page => {
    spec(testCategory.regression, 'Check-out', () => {
        page
            .hoverFirstItem()
            .addToCart()
            .onModal(CartModal)
            .proceedToCheckout()
            .onComponent(ShoppingCartSummary)
            .proceedToCheckout()
            .onComponent(Authentication)
            .logIn()
            .onComponent(Address)
            .proceedToCheckout()
            .onComponent(Shipping)
            .checkTermsOfServiceCheckbox()
            .proceedToCheckout()
            .onComponent(Payment)
            .payByCheck()
            .confirmOrder()
            .verifyOrderIsCorrectlyCompleted()
            .onTopBar(LoggedIn)
            .goToMyAccount()
            .onComponent(MyAccount)
            .goToOrders()
            .onComponent(Orders)
            .verifyLastOrder();
    });  
});
