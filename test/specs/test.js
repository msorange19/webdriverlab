import LoginView from '../pageobjects/login.js';
import testData from '../data.json'

describe('Verify login page', () => {
    const loginPage = new LoginView();

    it('should give validation error when login is empty ', async () => {
        await loginPage.verifyLogin("", "");
        const invalidText = await loginPage.verifyEmptyLogin();
        expect(invalidText).toEqual('Username is required');
    })
    it('should login with valid credentials', async () => {
        await loginPage.verifyLogin(testData.username, testData.password);
        const dashboardText = await loginPage.verifiedLogIn();
        expect(dashboardText).toEqual('PRODUCTS');

    })
})

