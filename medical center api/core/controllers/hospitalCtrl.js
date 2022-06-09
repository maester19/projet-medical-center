const Hospital = require('../models/Hospital');
const asyncHandler = require('../Utils/async')
const Result =require('../Utils/result')
const mongoose = require('mongoose');


module.exports = {

  create: asyncHandler (async (req, res, next)=>{
    const {
        name,
        longitude,
        latitude,
        medecins,
        description
    } =  req.body;

    if(name == undefined){ // verify parametters value
        Result.sendObject(res, 401, false, {})
        return;
    }
    let location = {
        longitude,
        latitude
    }

    // save base parametters like [name, alais, partOf, adress, type]
    let objectID = mongoose.Types.ObjectId().toString(); // create hospital id

    const hospital = new Hospital ({
      _id: objectID,
      name: name,
      location: location,
      medecins: medecins.split(';'),
      description: description,
      createdAt: Date.now()
    });

    hospital.save(function(err){
      if (err) throw err;
      /* Document indexation on going */
      hospital.on('es-indexed', function(err, res){
        if (err) throw err;
        /* Document is indexed */
      });
    });
    console.log(hospital)
    Result.sendObject(res, 200, true, hospital)

  }),

    getOne: asyncHandler(async (req, res, next)=> {
        Hospital.findOne({ _id: req.params.id }) 
        .then(hospital => Result.sendObject(res, 200, true, hospital))
        .catch(error => res.status(404).json({ error }));
    }),

    modify: asyncHandler (async (req,res,next)=> {
        Hospital.findByIdAndUpdate({ _id: req.params.id }, { ...req.body, _id: req.params.id },
          { new: true, upsert:true },
          function(err){
          if (err) throw err;
        })
        .then(hospital => Result.sendObject(res, 200, true, hospital))
        .catch(error => res.status(400).json({ error }));
    }),

    getAll: asyncHandler (async (req,res,next)=>{
        Hospital.find()
        .then(hospital => Result.sendObject(res, 200, true, hospital))
        .catch(error => res.status(400).json({ error }));
    }),

    delete: asyncHandler (async (req,res,next) => {
      Hospital.findById(req.params.id, function(err, hospital) {
        hospital.remove(function(err, hospital) {
           if (err) {
              console.log(err);
  
              return;
           }                
         });
     })
     .then(() => res.status(200).json({ message: 'Objet supprimé !'}))
     .catch(error => res.status(400).json({ error }));
    }),

    search: asyncHandler (async (req, res, next)=> {
        Hospital.find({ name: req.params.search })
        .then(hospital => Result.sendObject(res, 200, true, hospital))
        .catch(error => res.status(404).json({ error }));
    }),

    esSearch: asyncHandler (async (req, res, next)=> {
      var result = {
        bool : {
            must : [{
                query_string : {
                  query:  String(req.params.search)+"~",
                  fields: ["name"]
                }
            }]
        }
    }
    resultat = await Hospital.search(result, function (err, hospital) {
        if (err) throw err 

        console.log(resultat)
        Result.sendObject(res, 200, true, hospital.hits.hits)
    })

    
    })  

}