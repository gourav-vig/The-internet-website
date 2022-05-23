const Page = require('./page');

class ABtesting extends Page {
    async abtest(){
        
    }
    open () {
        return super.open('abtest');
    }
}
module.exports = new ABtesting();