const Page = require('./page');
const Locators = require('../../ConfigData/Locators');
class geoLocation extends Page{
    get location(){
        return $(Locators.geolocation)
    }
    async test(){
        await this.location.click();
        await this.acceptAlert
    }
    open(){
        return super.open('geolocation');
    }
}
module.exports = new geoLocation();