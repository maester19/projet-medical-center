const elasticsearch = require('elasticsearch');
const config = require('config')
var esclient;
module.exports = {
    getClient: function(){
        if(esclient == undefined){
            esclient = new elasticsearch.Client({
                // host: "localhost:9200", //local server 
                host: config.get("elasticsearch.url"),
                log: 'info'
                //httpAuth: 'user:Yq7s4XZttn8R'
            });
        }
       return esclient;
    },

    getCityIndexe: function(){
        return "cities"
    }
}