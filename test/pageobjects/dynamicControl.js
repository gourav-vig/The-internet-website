const Page = require("./page");
var chai = require('chai')
var assert = chai.assert;
const Locators = require('../../ConfigData/Locators');
class DynamicControl extends Page{
    get checkbox(){
        return $(Locators.dynamicControlCheckbox)
    }
    get removeButton(){
        return $(Locators.dynamicControlremoveButton)
    }
    get message1(){
        return $(Locators.dynamicControlmessage1)
    }
    get addButton(){
        return $(Locators.dynamicControladdButton)
    }
    get message2(){
        return $(Locators.dynamicControlmessage2)
    }
    get enableBuuton(){
        return $(Locators.dynamicControlenableBuuton)
    }
    get message3(){
        return $(Locators.dynamicControlmessage3)
    }
    get inputBox(){
        return $(Locators.dynamicControlinputBox)
    }
    get disableButton(){
        return $(Locators.dynamicControldisableButton)
    }
    get message4(){
        return $(Locators.dynamicControlmessage4)
    }
    async test1(){
        await this.checkbox.click();
        await this.removeButton.click();
        let a = await this.message1.getText();
        assert.equal(a,"It's gone!")
        await this.addButton.click();
        let b = await this.message2.getText();
        assert.equal(b,"It's back!")
    }
    async test2(){
        await this.enableBuuton.click();
        let c = await this.message3.getText();
        assert.equal(c,"It's enabled!")
        await this.inputBox.setValue("java")
        await this.disableButton.click();
        let d = await this.message4.getText();
        assert.equal(d,"It's disabled!")
    }
    open(){
        return super.open('dynamic_controls');
    }
}
module.exports = new DynamicControl();