const Page = require('./page');
const Locators = require('../../ConfigData/Locators');
class newwindow extends Page{
    get link(){
        return $(Locators.newWindowlink)
    }
    async test(){
        await this.link.click();
        await this.switchWindow
    }
    open () {
        return super.open('windows');
    }
}
module.exports = new newwindow();