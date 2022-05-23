const Page = require('./page');
const Locators = require('../../ConfigData/Locators');
class inputs extends Page{
    get input(){
        return $(Locators.inputs)
    }
    async setinput(){
        await this.input.setValue('12')
    }
    open(){
        return super.open('inputs');
    }
}
module.exports = new inputs();