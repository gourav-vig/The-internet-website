const Page = require('./page');
var chai = require('chai')
var assert = chai.assert;
const Locators = require('../../ConfigData/Locators');
class javaScriptAlerts extends Page{
    get jsAlert(){
        return $(Locators.jsAlert)
    }
    get jsConfirm(){
        return $(Locators.jsConfirm)
    }
    get jsPrompt(){
        return $(Locators.jsPrompt)
    }
    get result(){
        return $(Locators.Alertresult)
    }
    async test(){
        await this.jsAlert.click();
       let a = await this.result.getText();
        await this.acceptAlert;
        assert.equal(a,'You successfully clicked an alert')

        await this.jsConfirm.click();
        let b = await this.result.getText();
        await this.dismissAd;
        assert.equal(b,'You clicked: Cancel')

     /*   await this.jsPrompt.click();
        await this.sendAlertText('hello')
        let c = this.result.getText()
        await this.acceptAlert();
        assert.equal(c,'You entered: hello')*/
    }
    open(){
        return super.open('javascript_alerts');
    }
}
module.exports = new javaScriptAlerts();