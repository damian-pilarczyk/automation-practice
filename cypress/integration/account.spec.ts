import { Authentication } from '../support/page/content-pages/authentication';
import { LoggedIn } from '../support/page/top-bars/logged-in';
import { LoggedOut } from '../support/page/top-bars/logged-out';
import { desktopContext, desktopLoginContext } from '../support/test-base/contexts';
import { spec } from '../support/test-base/spec';
import { TestCategory } from '../support/test-base/test-categories';
import { TestSection } from '../support/test-base/test-sections';

desktopContext(TestSection.account, (page) => {
    spec(TestCategory.smoke, 'Sign in', () => {
        page
            .onTopBar(LoggedOut)
            .clickSignIn()
            .onComponent(Authentication)
            .logIn()
            .onTopBar(LoggedIn)
            .verifyUserIsLoggedIn();
    });  
});

desktopLoginContext(TestSection.account, (page) => {
    spec(TestCategory.smoke, 'Sign out', () => {
        page
            .onTopBar(LoggedIn)
            .logOut()
            .onTopBar(LoggedOut)
            .verifyUserIsLoggedOut();
    });  
});
