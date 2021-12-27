import { Authentication } from '../support/page/content-pages/my-account/authentication';
import { MyAccount } from '../support/page/content-pages/my-account/my-account';
import { PersonalInfo } from '../support/page/content-pages/my-account/personal-info';
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
    
    spec(testCategory.regression, 'Users personal info', () => {
        page
            .onTopBar(LoggedIn)
            .goToMyAccount()
            .onComponent(MyAccount)
            .goToPersonalInfo()
            .onComponent(PersonalInfo)
            .verifyPersonalInfo();            
    }); 
});
