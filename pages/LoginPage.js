class LoginPage {

    constructor(page) {

        this.page = page;

        this.username =
            page.locator('#username');

        this.password =
            page.locator('#password');

        this.submitButton =
            page.getByRole(
                'button',
                { name: 'Submit' }
            );

    }

    async open() {

        await this.page.goto(
            'https://practicetestautomation.com/practice-test-login'
        );

    }

    async login(user, pass) {

        await this.username.fill(user);

        await this.password.fill(pass);

        await this.submitButton.click();

    }

    async logout() {

        await this.page
            .getByText('Log out')
            .click();

    }

}
module.exports = LoginPage;

/*class LoginPage {

    constructor(page) {

        this.page = page;

        this.username =
            page.locator('#username');

        this.password =
            page.locator('#password');

        this.submitButton =
            page.getByRole(
                'button',
                { name: 'Submit' }
            );

    }

    async open() {

        await this.page.goto(
            'https://practicetestautomation.com/practice-test-login'
        );

    }

    async login(user, pass) {

        await this.username.fill(user);

        await this.password.fill(pass);

        await this.submitButton.click();

    }
    async logout() {

    await this.page
        .getByText('Log out')
        .click();

    }

    async verifyLoginSuccess() {

    return this.page.url();

    }

}

module.exports = LoginPage;*/