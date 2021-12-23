import { baseUrl } from '../../../consts/cypress-env-vars-names';
import { termsAgreementCheckbox } from '../../selectors/check-out';
import { ContentComponent } from '../../interfaces/content-component.interface';
import { CheckOutComponent } from '../../base/check-out-component';

export class Shipping extends CheckOutComponent implements ContentComponent { 
    url = `${Cypress.env(baseUrl)}index.php?controller=order`;  

    checkTermsOfServiceCheckbox(): this {
        cy.get(termsAgreementCheckbox).click();

        return this;
    }
}
