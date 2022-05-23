const Page = require("./page");
const Locators = require('../../ConfigData/Locators');
class DragAndDrop extends Page{
    get value1(){
        return $(Locators.dragdropvalue1)
    }
    get value2(){
        return $(Locators.dragdropvalue2)
    }
    get value3(){
        return $(Locators.dragdropvalue3)
    }
    async dragdrop(){
        const elem = await this.value1
        const target = await this.value2
        const a = await this.value3
        await elem.dragAndDrop(target)
        if(target==a){
            console.log("Pass")
        }
    }
    open(){
        return super.open('drag_and_drop');
    }
}
module.exports = new DragAndDrop();