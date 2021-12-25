import { baseUrl } from '../../../consts/cypress-env-vars-names';
import { PageBase } from '../../base/page-base';
import { ContentComponent } from '../../interfaces/content-component.interface';

export class Authentication extends PageBase implements ContentComponent {    
    url = `${Cypress.env(baseUrl)}index.php?controller=authentication`;

    logIn(): this {
        cy.signIn();
        
        return this;
    }
}
