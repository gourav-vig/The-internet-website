const Page = require('./page');
const Locators = require('../../ConfigData/Locators');
var chai = require('chai')
var assert = chai.assert;
const expectChai = require('chai').expect;
class notification_Msg extends Page{
    get link(){
        return $(Locators.notificmsglink)
    }
    get result(){
        return $(Locators.notificmsgresult)
    }
    async test(){
        await this.link.click();
        let a = await this.result.getText();
        if(expectChai(a).to.include('Action')){
            console.log('Test Pass')
        }else{
            console.log('Test Fail')
        }
    }
    open () {
        return super.open('notification_message_rendered');
    }
}
module.exports = new notification_Msg();