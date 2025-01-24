export default class LogInView {
    get usernameField() {
        return $('~test-Username');
    }

    get passwordField() {
        return $('~test-Password');
    }

    get errorText() {
        return $('//android.widget.TextView[@text="Username is required"]')
    }

   get homeText(){
        return $('//android.widget.TextView[@text="PRODUCTS"]')
   }
    get loginButton() {
        return $('~test-LOGIN');
    }

    async verifyLogin(username, password) {
        await this.usernameField.setValue(username);
        await this.passwordField.setValue(password);
        await this.loginButton.click();
    }

    async verifyEmptyLogin() {
        return await this.errorText.getText();
    }
    async verifiedLogIn(){
        return await this.homeText.getText();
    }
    async verifyisLggedIn(){
        return await this.homeText.isDisplayed();
    }
}