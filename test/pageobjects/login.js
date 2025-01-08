export default class LoginView {
    get usernameField() {
        return $('~test-Username');
    }

    get passwordField() {
        return $('~test-Password');
    }

    /*get autoFilled() {
        return $('//android.widget.TextView[@text="standard_user"]');
    }
*/
    get loginButton() {
        return $('~test-LOGIN');
    }

    async verifyLogin(username, password) {
        await this.usernameField.setValue(username);
        await this.passwordField.setValue(password);
        await this.loginButton.click();
    }
}