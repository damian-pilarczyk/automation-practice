import { baseUrl } from '../../../consts/cypress-env-vars-names';
import { CheckOutComponent } from '../../base/check-out-component';
import { ContentComponent } from '../../interfaces/content-component.interface';

export class Address extends CheckOutComponent implements ContentComponent { 
    url = `${Cypress.env(baseUrl)}index.php?controller=order&step=1&multi-shipping=0`;  
}
