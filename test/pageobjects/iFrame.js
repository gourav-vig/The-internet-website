const Page = require('./page');
var chai = require('chai')
var assert = chai.assert;
const Locators = require('../../ConfigData/Locators');
class IFrame extends Page{
    get selectBold(){
        return $(Locators.iframeselectbold)
    }
    get allignCenter(){
        return $(Locators.iframealligncenter)
    }
    async setData(){
        await this.selectBold.click();
        await this.iFrame
        await this.allignCenter.click();
    }
    open(){
        return super.open('iframe');
    }
}
module.exports = new IFrame();