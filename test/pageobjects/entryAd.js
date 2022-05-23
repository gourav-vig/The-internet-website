const Page = require('./page');
const Locators = require('../../ConfigData/Locators');
class EntryAd extends Page{
    get link(){
        return $(Locators.entryaddLink)
    }
    get ad(){
        return $(Locators.entryad)
    }
    get closeButton(){
        return $(Locators.entryaddclosebutton)
    }
    async test(){
        let i=0;
        let a = await this.ad
        let b = await this.link
       /* while(!a.isDisplayed()){
            b.click();
           // await b.waitForClickable({ timeout: 5000 });
           i++;
        }
        if(a.isDisplayed()){
            await this.closeButton.click();
        }*/
    }
    async closeAd(){
        await this.closeButton.click();
    }
    open(){
        return super.open('entry_ad');
    }
}
module.exports = new EntryAd();