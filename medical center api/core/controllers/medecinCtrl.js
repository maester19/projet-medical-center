const Medecin = require('../models/Medecin');
const asyncHandler = require('../Utils/async')
const Result =require('../Utils/result')
const mongoose = require('mongoose');


module.exports = {

  create: asyncHandler (async (req, res, next)=>{
    const {
        name,
        surname,
        image,
        hospital
    } =  req.body;

    if(name == undefined){ // verify parametters value
        Result.sendObject(res, 401, false, {})
        return;
    }

    // save base parametters like [name, alais, partOf, adress, type]
    let objectID = mongoose.Types.ObjectId().toString(); // create medecin id

    const medecin = new Medecin ({
      _id: objectID,
      name: name,
      surname: surname,
      image: image,
      hospital: hospital
    });

    medecin.save(function(err){
      if (err) throw err;
      /* Document indexation on going */
      medecin.on('es-indexed', function(err, res){
        if (err) throw err;
        /* Document is indexed */
      });
    });
    console.log(medecin)
    Result.sendObject(res, 200, true, medecin)

  }),

    getOne: asyncHandler(async (req, res, next)=> {
        Medecin.findOne({ _id: req.params.id }) 
        .then(medecin => Result.sendObject(res, 200, true, medecin))
        .catch(error => res.status(404).json({ error }));
    }),

    modify: asyncHandler (async (req,res,next)=> {
        Medecin.findByIdAndUpdate({ _id: req.params.id }, { ...req.body, _id: req.params.id },
          { new: true, upsert:true },
          function(err){
          if (err) throw err;
        })
        .then(medecin => Result.sendObject(res, 200, true, medecin))
        .catch(error => res.status(400).json({ error }));
    }),

    getAll: asyncHandler (async (req,res,next)=>{
        Medecin.find()
        .then(medecin => Result.sendObject(res, 200, true, medecin))
        .catch(error => res.status(400).json({ error }));
    }),

    delete: asyncHandler (async (req,res,next) => {
      Medecin.findById(req.params.id, function(err, medecin) {
        medecin.remove(function(err, medecin) {
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
        Medecin.find({ name: req.params.search })
        .then(medecin => Result.sendObject(res, 200, true, medecin))
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
    resultat = await Medecin.search(result, function (err, medecin) {
        if (err) throw err 

        console.log(resultat)
        Result.sendObject(res, 200, true, medecin.hits.hits)
    })

    
    })  

}