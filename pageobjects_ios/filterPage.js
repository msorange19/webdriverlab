export default class FilterPage_ios {
    get filters() {
        return $('-ios class chain:**/XCUIElementTypeOther[`name == "test-Modal Selector Button"`]/XCUIElementTypeOther/XCUIElementTypeOther');
    }

    selector(optionText) {
        return $(`//XCUIElementTypeOther[@name="${optionText}"]`);
    }

    async verifyFilters() {

            const clickFilter = await this.filters;
            await clickFilter.waitForDisplayed({ timeout: 100000 });
            await clickFilter.click();

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

            const selector =  this.selector(sortOption);
            await selector.waitForDisplayed({ timeout: 100000 });
            await selector.click();

    }
}
