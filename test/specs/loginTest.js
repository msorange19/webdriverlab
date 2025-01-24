import testData from '../utilities/data.json';
import state from '../utilities/state.js';
import FilterPage from "../../pageobjects_ios/filterPage.js";

let LogInView; // Declare a variable for conditional import

if (driver.isAndroid) {
    LogInView = (await import("../../pageobjects_android/loginPage.js")).default;
} else {
    LogInView = (await import("../../pageobjects_ios/loginPage.js")).default;
}

describe('Verify login page', () => {
    let loginPage;
    let filterProduct;

    before(() => {
        loginPage = new LogInView();
        filterProduct = new FilterPage();
    });

    beforeEach(async () => {
        // Check login state before each test
        if (!state.isLoggedIn) {
            console.log('User not logged in. Logging in now...');
            await loginPage.verifyLogin(testData.username, testData.password);
            const homeText = await loginPage.verifiedLogIn();
            expect(homeText).toEqual('PRODUCTS');

            const isLoggedIn = await loginPage.verifyisLggedIn();
            if (isLoggedIn) {
                state.isLoggedIn = true;
                console.log('Login successful. Global state updated:', state.isLoggedIn);
            } else {
                throw new Error('Login failed during setup.');
            }
        } else {
            console.log('User is already logged in. Skipping login.');
        }
    });

    it('should give validation error when login is empty', async () => {
        await loginPage.verifyLogin("", "");
        const invalidText = await loginPage.verifyEmptyLogin();
        expect(invalidText).toEqual('Username is required');
    });

    it('should login with valid credentials', async () => {
        // Explicit login test to verify functionality
        await loginPage.verifyLogin(testData.username, testData.password);
        const homeText = await loginPage.verifiedLogIn();
        expect(homeText).toEqual('PRODUCTS');

        const isLoggedIn = await loginPage.verifyisLggedIn();
        expect(isLoggedIn).toBeTrue();

        // Update state if not already done
        if (!state.isLoggedIn) {
            state.isLoggedIn = true;
            console.log('Login successful. Global state updated:', state.isLoggedIn);
        }
    });


});
