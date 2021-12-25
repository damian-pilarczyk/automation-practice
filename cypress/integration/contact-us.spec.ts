import { ContactUs } from '../support/page/content-pages/contact-us/contact-us';
import { LoggedOut } from '../support/page/top-bars/logged-out';

desktopContext(section.contact, page => {
    spec(testCategory.night, 'Contact us', () => {
        page
            .onTopBar(LoggedOut)
            .contactUs()
            .onComponent(ContactUs)
            .verifyContactFormExists();
    });  
});
