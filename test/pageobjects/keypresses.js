const Page = require('./page');
var chai = require('chai')
var assert = chai.assert;
const Locators = require('../../ConfigData/Locators');
class PressKey extends Page{
    get result(){
        return $(Locators.keypressresult)
    }
    async test(){
        await this.key('a')
        let flag = await this.result.getText();
        assert.equal(flag,'You entered: A')
    }
    open(){
        return super.open('key_presses');
    }
}
module.exports = new PressKey();