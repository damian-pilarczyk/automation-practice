import { baseUrl, userEmail, userFirstName, userLastName } from '../../../consts/cypress-env-vars-names';
import { PageBase } from '../../base/page-base';
import { ContentComponent } from '../../interfaces/content-component.interface';
import { personalInfoEmailInput, personalInfoFirstNameInput, personalInfoLastNameInput } from '../../selectors/my-account';

export class PersonalInfo extends PageBase implements ContentComponent {  
    url = `${Cypress.env(baseUrl)}index.php?controller=my-account`;

    verifyPersonalInfo(): this {
        cy.get(personalInfoFirstNameInput).invoke('val').should('eq', Cypress.env(userFirstName));
        cy.get(personalInfoLastNameInput).invoke('val').should('eq', Cypress.env(userLastName));
        cy.get(personalInfoEmailInput).invoke('val').should('eq', Cypress.env(userEmail));
        
        return this;
    }
}
