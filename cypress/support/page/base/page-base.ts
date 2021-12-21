import { ContentComponent } from '../interfaces/content-component.interface';
import { TopBar } from '../interfaces/top-bar.interface';

export abstract class PageBase {
    onComponent<C extends ContentComponent>(componentType: (new() => C)): C {
        const component = new componentType();
        cy.url().then((url) => {
            const regex = new RegExp(`^${component.url.replace('.', '\\.').replace('?', '\\?')}(&back=.+)?$`);
            if (!regex.test(url)) {
                cy.visit(component.url);
            }
        });

        return component;
    }

    onTopBar<T extends TopBar>(topBarType: (new() => T)): T{
        return new topBarType();
    }
}
