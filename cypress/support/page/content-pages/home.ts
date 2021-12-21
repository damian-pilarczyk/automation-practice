import { baseUrl } from '../../consts/cypress-env-vars-names';
import { ContentComponent } from '../interfaces/content-component.interface';
import { PageBase } from '../base/page-base';

export class Home extends PageBase implements ContentComponent { 
    url = `${Cypress.env(baseUrl)}index.php`;
}
