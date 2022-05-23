const Page = require('./page');
const Locators = require('../../ConfigData/Locators');
class checkboxes extends Page{
    get a(){
        return $$(Locators.checkbox)
    }
    async select(){
        //return $('//*[@id="checkboxes"]//child::input[1]')
        const element = await this.a;
        await element[1].click();
        await element[1].isSelected();
        //await element[2].isSelected();
    }
    open () {
        return super.open('checkboxes');
    }
}
module.exports = new checkboxes();