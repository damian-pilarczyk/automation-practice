import { baseUrl } from '../../../consts/cypress-env-vars-names';
import { ContentComponent } from '../../interfaces/content-component.interface';
import { PageBase } from '../../base/page-base';
import * as HomeCss from '../../selectors/home';
import { Store } from '../../../utils/store';

export class Home extends PageBase implements ContentComponent { 
    url = `${Cypress.env(baseUrl)}index.php`;

    addToCart(): this {
        cy.get(HomeCss.hoveredItem).then($item => {
            Store.itemsAddedToCart.unshift({
                name: $item.find(HomeCss.itemName).text().trim(),
                price: $item.find(HomeCss.itemPrice).text().trim(),
            });
            cy.wrap($item).find(HomeCss.addToCartButton).click();
        });

        return this;
    }

    hoverFirstItem(): this {
        cy.get(HomeCss.product).first().trigger('mouseover');

        return this;
    }
}
