import { MyAccount } from '../support/page/content-pages/my-account/my-account';
import { PersonalInfo } from '../support/page/content-pages/my-account/personal-info';
import { LoggedIn } from '../support/page/top-bars/logged-in';

desktopContext(section.account, page => {
    spec(testCategory.regression, 'Registration endpoint', () => {
        page
            .onTopBar(LoggedIn)
            .verifyUserIsLoggedIn()
            .goToMyAccount()
            .onComponent(MyAccount)
            .goToPersonalInfo()
            .onComponent(PersonalInfo)
            .verifyPersonalInfo();            
    });
});
