export default class FilterPage {
    get filters() {
        return $('//android.view.ViewGroup[@content-desc="test-Modal Selector Button"]');
    }

    selector(optionText) {
        return $(`//android.widget.TextView[@text="${optionText}"]`);
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
