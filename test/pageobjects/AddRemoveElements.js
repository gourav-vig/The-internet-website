const Page = require('./page');
const Locators = require('../../ConfigData/Locators');
class add_remove_elements extends Page {
    get addElement(){
        return $(Locators.addElement)
    }
    get deleteElement(){
        return $(Locators.deleteElement)
    }
    async addRemove(){
       await this.addElement.click();
       await this.deleteElement.click();
    }
    open () {
        return super.open('add_remove_elements/');
    }
}
module.exports = new add_remove_elements();