import { Authentication } from '../support/page/content-pages/authentication';
import { LoggedIn } from '../support/page/top-bars/logged-in';
import { LoggedOut } from '../support/page/top-bars/logged-out';

desktopContext(section.account, page => {
    spec(testCategory.smoke, 'Sign in', () => {
        page
            .onTopBar(LoggedOut)
            .clickSignIn()
            .onComponent(Authentication)
            .logIn()
            .onTopBar(LoggedIn)
            .verifyUserIsLoggedIn();
    });  
});

desktopLoginContext(section.account, page => {
    spec(testCategory.smoke, 'Sign out', () => {
        page
            .onTopBar(LoggedIn)
            .logOut()
            .onTopBar(LoggedOut)
            .verifyUserIsLoggedOut();
    });  
});
