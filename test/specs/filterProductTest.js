import FilterPage from '../../pageobjects_ios/filterPage.js';
import state from '../utilities/state.js';

describe('FilterProduct', () => {
    beforeEach(async () => {
        console.log("isLoggedIn: ", state.isLoggedIn); // Log state to check the login status
        if (!state.isLoggedIn) {
            throw new Error('Login failed. Skipping filter test.');
        }
    });
    
    const filterProduct = new FilterPage();

    it('Should display Name "a" to "z"', async () => {
        debugger;
        await filterProduct.verifyFilters();
        debugger;
        await filterProduct.selectSortOption(filterProduct.sortingOptions.z_a);
    })
})
