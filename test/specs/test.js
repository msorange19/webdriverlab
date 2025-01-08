import LoginView from '../pageobjects/login.js';
import testData from '../data.json'

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        const loginPage = new LoginView();
        await loginPage.verifyLogin(testData.username, testData.password);

    })
})

