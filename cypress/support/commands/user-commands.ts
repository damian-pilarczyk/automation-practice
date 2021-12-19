Cypress.Commands.add('loginViaApi',  () => 
    cy.request({
        method: 'POST',
        url: `${Cypress.env('base_url')}${Cypress.env('login_endpoint')}`,
        body: {
            email: Cypress.env('user_email'),
            passwd: Cypress.env('user_password'),
            SubmitLogin: '',
        },
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
        },
    }).then(res => {
        const [cookieName, cookieValue] = res.requestHeaders.cookie.split('=');
        cy.setCookie(cookieName, cookieValue);
    })
);
