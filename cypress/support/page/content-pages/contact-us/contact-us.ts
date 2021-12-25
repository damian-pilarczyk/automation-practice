import { baseUrl } from '../../../consts/cypress-env-vars-names';
import { ContentComponent } from '../../interfaces/content-component.interface';
import { PageBase } from '../../base/page-base';
import { contactUsForm } from '../../selectors/contact-us';

export class ContactUs extends PageBase implements ContentComponent { 
    url = `${Cypress.env(baseUrl)}index.php?controller=contact`;
    
    verifyContactFormExists(): this {
        cy.get(contactUsForm).should('exist');

        return this;
    }
}
