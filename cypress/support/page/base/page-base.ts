import { ContentComponent } from '../interfaces/content-component.interface';
import { Modal } from '../interfaces/modal.interface';
import { TopBar } from '../interfaces/top-bar.interface';

export abstract class PageBase {
    onComponent<C extends ContentComponent>(componentType: (new() => C), isComponentOpened = true): C {
        const component = new componentType();
        if (!isComponentOpened) {
            cy.visit(component.url);
        }

        return component;
    }

    onModal<M extends Modal>(modalType: (new() => M)): M{
        return new modalType();
    }

    onTopBar<T extends TopBar>(topBarType: (new() => T)): T{
        return new topBarType();
    }
}
