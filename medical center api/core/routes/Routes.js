var express = require('express');
var routes = express.Router();
var multer = require("multer");
var v1 = express.Router();
var admin = express.Router();
const config  = require("config")
const apiKeys = require('../../security/apikey')
const organizationCtrl = require('../controllers/organizationCtrl')
const medecinCtrl = require('../controllers/medecinCtrl')
const advancedResults = require("../midlewares/advancedResults");
const Organization = require('../models/Organisation')
const Result = require('../Utils/result');


//paramètre de multer pour l'upload des fichiers de menus sur le serveur
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, config.get("csvFiles.url")) //definition de la destination
  },
  filename: function (req, file, cb) {
    console.log("try to create file")
    cb(null, Date.now() + "_" + Result.removeSpecials(file.originalname))  //definition du nom du fichier
  }
})

var upload = multer({storage: storage})

 v1.route("/organization")
 .get(advancedResults(Organization,['address', 'contact', 'telecom', 'type', 'endpoint', 'partOf']), organizationCtrl.list)
 .post(organizationCtrl.create) ;



admin.use(function(req, res, next){
    const apiKey = req.get('API-Key')
    apiKeys.findKey(apiKey, apiInfo=>{
        if(apiInfo==null || apiInfo.name != "admin"){
          res.status(401).json({error: 'admin unauthorised contact jookatech@gmail.com for more infomation'});
        } else{
          next()
        }
      })
})

// routes des medecin
routes.post('/medecin/new', medecinCtrl.create);
   
routes.get('/medecin/detail/:id', medecinCtrl.getOne);

routes.get('/medecin/:search', medecinCtrl.search);

routes.get('/medecin/es/:search', medecinCtrl.esSearch);

routes.get('/medecins/', medecinCtrl.getAll);

routes.put('/medecin/:id', medecinCtrl.modify);

routes.delete('/medecin/:id', medecinCtrl.delete);


routes.use('/v1', v1);
routes.use('/admin', admin);
module.exports = routes;


