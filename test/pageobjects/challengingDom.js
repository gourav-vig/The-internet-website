const Page = require('./page');
const Locators = require('../../ConfigData/Locators');
class ChallengingDom extends Page{
    get button(){
        return $(Locators.cdombutton)
    }
    get value(){
        return $(Locators.cdomvalue)
    }
    async test(){
        let b = await this.value.getText();
        await this.button.click();
       let a = await this.value.getText();
       if(a!=b){
           console.log("Clickable");
       }
    }
    open(){
        return super.open('challenging_dom');
    }
}
module.exports = new ChallengingDom();