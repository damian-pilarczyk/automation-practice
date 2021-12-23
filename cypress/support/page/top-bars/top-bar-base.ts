import { contactUs } from '../selectors/top-bar';
import { TopBar } from '../interfaces/top-bar.interface';

export class TopBarBase implements TopBar {
    contactUs(): this {
        cy.get(contactUs).click();

        return this;
    }
}
