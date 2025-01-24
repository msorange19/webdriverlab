export default class FilterPage_ios {
    get filters() {
        return $('-ios class chain:**/XCUIElementTypeOther[`name == "test-Modal Selector Button"`]/XCUIElementTypeOther/XCUIElementTypeOther');
    }

    selector(optionText) {
        return $(`//XCUIElementTypeOther[@name="${optionText}"]`);
    }

    async verifyFilters() {
        try {
            console.log('Waiting for filter button...');
            const clickFilter = await this.filters;
            await clickFilter.waitForDisplayed({ timeout: 100000 });
            console.log('Filter button found. Clicking...');
            await clickFilter.click();
        } catch (error) {
            console.error('Error in verifyFilters:', error.message);
            throw error;
        }
    }

    get sortingOptions() {
        return {
            a_z: 'Name (A to Z)',
            z_a: 'Name (Z to A)',
            l_h: 'Price (Low to High)',
            h_l: 'Price (High to Low)',
            date: 'Date (Newest First)',
        };
    }

    async selectSortOption(sortOption) {
        try {
            console.log(`Selecting sort option: ${sortOption}`);
            const selector =  this.selector(sortOption);
            await selector.waitForDisplayed({ timeout: 100000 });
            await selector.click();
        } catch (error) {
            console.error('Error in selectSortOption:', error.message);
            throw error;
        }
    }
}
