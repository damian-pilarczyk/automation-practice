import { ContactUs } from '../support/page/content-pages/contact-us';
import { LoggedOut } from '../support/page/top-bars/logged-out';

desktopContext(section.contact, (page) => {
    spec(testCategory.night, 'Sign in', () => {
        page
            .onTopBar(LoggedOut)
            .contactUs()
            .onComponent(ContactUs)
            .verifyContactFormExists();
    });  
});
