/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
module.exports = class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    open (path) {
        return browser.url(`https://the-internet.herokuapp.com/${path}`)
    }
    dismissAd(){
       return browser.dismissAlert();
    }
    wait(){
        return browser.pause(10000);
    }
    iFrame(){
        let frame= browser.$('//*[@id="mce_0_ifr"]');
        browser.pause(5000);
        browser.switchToFrame(frame);
        let value = $('//*[@id="tinymce"]')
        value.click();
         value.setValue('Hello')
         value.getValue();
        browser.switchToParentFrame();
    }
    acceptAlert(){
        return browser.acceptAlert()
    }
    alertText(){
        return browser.getAlertText()
    }
    sendAlertText(text){
        return browser.sendAlertText(text)
    }
    key(value){
        return browser.keys(value)
    }
    switchWindow(){
        return browser.switchWindow('https://the-internet.herokuapp.com/windows/new');
    }
}
