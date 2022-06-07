//definition des cles de l'api
const apiKeys = new Map();

//https://randomkeygen.com/ generation des key random
apiKeys.set('ZvLyIQ4qced8XsP7JFUpv4bS15vOHvZJ', {
    id: 1,
    name: 'android'
});

apiKeys.set('0pGLL8DFw54mlEY9vD6nr8CJAPlMPlsX', {
    id: 5,
    name: 'admin'
});

module.exports = {
    findKey: function(keyId, callback){
        //check if api key exist on database
        if(apiKeys.has(keyId)){
            callback(apiKeys.get(keyId))
        }else{
            callback(null);
        }
    },
    getContact: function(){
        return "jookatech@gmail.com"
    },
    getTestKey: function(){
        return "p91Cn31vk1TD4QVkj0ufKT5LaLuFcDs2"
    }
}