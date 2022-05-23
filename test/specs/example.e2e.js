const ABTesting = require('../pageobjects/ABTesting');
const AddRemoveElements = require('../pageobjects/AddRemoveElements');
const challengingDom = require('../pageobjects/challengingDom');
const checkbox = require('../pageobjects/checkbox');
const dragAnddrop = require('../pageobjects/dragAnddrop');
const dropdown = require('../pageobjects/dropdown.page');
const dynamicControl = require('../pageobjects/dynamicControl');
const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');
const entryAd = require('../pageobjects/entryAd');
const iFrame = require('../pageobjects/iFrame');
const geoLocation = require('../pageobjects/geoLocation');
const javascriptAlerts = require('../pageobjects/javascriptAlerts');
const keypresses = require('../pageobjects/keypresses');
const inputs = require('../pageobjects/inputs');
const newWindow = require('../pageobjects/newWindow');
const notificationMsg = require('../pageobjects/notificationMsg');
describe('The Internet', () => {
    it('Check login validation', async () => {
        await LoginPage.open();

        await LoginPage.login('tomsmith', 'SuperSecretPassword!');
        await expect(SecurePage.flashAlert).toBeExisting();
        await expect(SecurePage.flashAlert).toHaveTextContaining(
            'You logged into a secure area!');
        
    });
    it('Check A/B Test validation', async()=>{
        await ABTesting.open();
        //await expect(SecurePage.flashAlert).toBeExisting();
    });
    it('Check AddRemoveElements validation', async()=>{
        await AddRemoveElements.open();
        await AddRemoveElements.addRemove();
    });
    it('Check functionality of checkboxes', async()=>{
        await checkbox.open();
        await checkbox.select();
    });
    it('Check functionality of dropdown', async()=>{
        await dropdown.open();
        await dropdown.select();
    });
    it('Check functionality of challenging dom', async()=>{
        await challengingDom.open();
        await challengingDom.test();
    })
    xit('Check functionality of drag and drop', async()=>{
        await dragAnddrop.open();
        await dragAnddrop.dragdrop();
    })
    it('Check functionality of dynamic controls', async()=>{
        await dynamicControl.open();
        await dynamicControl.test1();
        await dynamicControl.test2();
    })
    it('Check functionality of entry ad', async()=>{
        await entryAd.open();
        await entryAd.wait();
        await entryAd.closeAd();
       // await entryAd.wait();
      //  await entryAd.test();
      //  await entryAd.wait();
    })
    it('Check functionality of Iframe', async()=>{
        await iFrame.open();
        await iFrame.setData();
        await iFrame.wait();
    })
    it('Check functionality of geolocation', async()=>{
        await geoLocation.open();
        await geoLocation.test();

    })
    it('Check functionality of Alerts', async()=>{
        await javascriptAlerts.open();
        await javascriptAlerts.test();
    })
    it('Check functionality of key press', async()=>{
        await keypresses.open();
        await keypresses.test();
        await keypresses.wait();
    })
    it('Check functionality of inputs', async()=>{
        await inputs.open();
        await inputs.setinput();
    })
    it('Check functionality of new window', async()=>{
        await newWindow.open();
        await newWindow.test();
    })
    it('Check funtionality of notification message', async()=>{
        await notificationMsg.open();
        await notificationMsg.test();
    })
});


