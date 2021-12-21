import { baseUrl } from '../../consts/cypress-env-vars-names';
import { PageBase } from '../base/page-base';
import { ContentComponent } from '../interfaces/content-component.interface';

export class MyAccount extends PageBase implements ContentComponent {    
    url = `${Cypress.env(baseUrl)}index.php?controller=my-account`;
}
