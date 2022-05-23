const Page = require('./page');
const Locators = require('../../ConfigData/Locators');
class dropDown extends Page{
    get value(){
        return $$(Locators.dropdown)
    }
    async select(){
        let items = await this.value;
        for(var i =0;i<await items.length;i++){
            if(await items[i].getText() === "Option 1"){
                await items[i].click();
            }
        }
    }
    open () {
        return super.open('dropdown');
    }
}
module.exports = new dropDown();