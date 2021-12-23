import { ContactUs } from '../support/page/content-pages/contact-us';
import { LoggedOut } from '../support/page/top-bars/logged-out';
import { desktopContext } from '../support/test-base/contexts';
import { spec } from '../support/test-base/spec';
import { TestCategory } from '../support/test-base/test-categories';
import { TestSection } from '../support/test-base/test-sections';

desktopContext(TestSection.contact, (page) => {
    spec(TestCategory.night, 'Sign in', () => {
        page
            .onTopBar(LoggedOut)
            .contactUs()
            .onComponent(ContactUs)
            .verifyContactFormExists();
    });  
});
