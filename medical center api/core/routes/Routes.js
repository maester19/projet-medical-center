var express = require('express');
var routes = express.Router();
var multer = require("multer");
var v1 = express.Router();
var admin = express.Router();
const config  = require("config")
const apiKeys = require('../../security/apikey')
const medecinCtrl = require('../controllers/medecinCtrl')
const hospitalCtrl = require('../controllers/hospitalCtrl')
const callCtrl = require('../controllers/callCtrl')
const messageCtrl = require('../controllers/messageCtrl')
const patientCtrl = require('../controllers/patientCtrl')
const advancedResults = require("../midlewares/advancedResults");
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

// *********************routes des medecin*********************
routes.post('/medecin/new', medecinCtrl.create);
   
routes.get('/medecin/detail/:id', medecinCtrl.getOne);

routes.get('/medecin/:search', medecinCtrl.search);

routes.get('/medecin/es/:search', medecinCtrl.esSearch);

routes.get('/medecins/', medecinCtrl.getAll);

routes.put('/medecin/:id', medecinCtrl.modify);

routes.delete('/medecin/:id', medecinCtrl.delete);

// *********************routes des call*********************
routes.post('/call/new', callCtrl.create);
   
routes.get('/call/detail/:id', callCtrl.getOne);

routes.get('/call/:search', callCtrl.search);

routes.get('/calls/', callCtrl.getAll);

routes.put('/call/:id', callCtrl.modify);

routes.delete('/call/:id', callCtrl.delete);

// *********************routes des hopitaux*********************
routes.post('/hospital/new', hospitalCtrl.create);
   
routes.get('/hospital/detail/:id', hospitalCtrl.getOne);

routes.get('/hospital/:search', hospitalCtrl.search);

routes.get('/hospital/es/:search', hospitalCtrl.esSearch);

routes.get('/hospitals/', hospitalCtrl.getAll);

routes.put('/hospital/:id', hospitalCtrl.modify);

routes.delete('/hospital/:id', hospitalCtrl.delete);

// *********************routes des message*********************
routes.post('/message/new', messageCtrl.create);
   
routes.get('/message/detail/:id', messageCtrl.getOne);

routes.get('/message/:search', messageCtrl.search);

routes.get('/messages/', messageCtrl.getAll);

routes.put('/message/:id', messageCtrl.modify);

routes.delete('/message/:id', messageCtrl.delete);

// *********************routes des patient*********************
routes.post('/patient/new', patientCtrl.create);
   
routes.get('/patient/detail/:id', patientCtrl.getOne);

routes.get('/patient/:search', patientCtrl.search);

routes.get('/patients/', patientCtrl.getAll);

routes.put('/patient/:id', patientCtrl.modify);

routes.delete('/patient/:id', patientCtrl.delete);


routes.use('/v1', v1);
routes.use('/admin', admin);
module.exports = routes;


