require('dotenv').config()
const colors = require("colors");
const fs = require("fs")
const express = require('express')
var cors = require('cors');
const apiKeys = require('./security/apikey')
const morgan  = require('morgan');
var bodyParser = require('body-parser')
const swagger = require('./admin/swagger') 
const connectDB = require("./config/mongo");
var helmet = require('helmet');
//Config of elastic APM on project
const apm = require('./admin/apm')
const app = express();
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));
const port =  process.env.PORT;

//https security setup

var http = require('http');
var httpServer = http.createServer(app);
// use morgan to log requests to the console
app.use(morgan('dev'));
swagger.startSwagger(app);

app.use('/assets', express.static(__dirname + '/public'));

connectDB();

//creation du répertoire permettant d'uploader les CSV de menu s'il n'existe pas
fs.mkdir("./datas/Imports", function(err) {
  if (err) {} 
  else {
    console.log("The Loinc directory has been created")
  }
})

//for basics http secutity 
//https://expressjs.com/en/advanced/best-practice-security.html
app.use(helmet());

app.use(cors());

app.use(function(req, res, next){
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, API-Key')
  res.header('Access-Control-Expose-Headers', '*')
  next()
});

app.use(function(req, res, next){
    //recuperation des log params
    var span = apm.getAPM().startSpan('receiving body')
    let userId =  req.query.userId;
    apm.getAPM().setUserContext({id: userId, username: "Obiang45", email: "saintgermes1996@gmail.com"})
    apm.getAPM().setCustomContext({lat: 3.1544, lng: 11.45678})
    if (span) span.end()
    next()
});

app.use(function(req, res, next){
  const apiKey = req.get('API-Key')
  apiKeys.findKey(apiKey, apiInfo=>{
    if(apiInfo==null){
      res.status(401).json({error: 'unauthorised contact jookatech@gmail.com for more infomation'});
    } else{
      next()
    }
  })
});

// API ROUTES -------------------
// the core Route
var Labs = require("./core/routes/Routes")
app.use('/medical-center', Labs);
httpServer.listen(port);