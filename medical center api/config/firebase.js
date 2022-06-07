var serviceAccount = require("./ServiceAccount");
let databaseURL = "https://jooka-test.firebaseio.com";
var admin = require("firebase-admin");
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: databaseURL
  });
module.exports = {
    getFirebaseInstance: function(){
       return admin.database().ref();
    },
    getCredential: function(){
        return {
            credential: admin.credential.cert(serviceAccount),
            databaseURL: databaseURL
        }
    }
}