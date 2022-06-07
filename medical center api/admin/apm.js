var apm;
const config = require('config')
module.exports = {
    getAPM: function(){
        if(apm==null){
            apm = require('elastic-apm-node').start({
                //  Set custom APM Server URL (default: http://localhost:8200)
                serverUrl: config.get("apm.url")
            });
        }
        return apm;               
    },
}