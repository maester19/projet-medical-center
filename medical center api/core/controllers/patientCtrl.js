const Patient = require('../models/Patient');
const asyncHandler = require('../Utils/async')
const Result =require('../Utils/result')
const mongoose = require('mongoose');


module.exports = {

  create: asyncHandler (async (req, res, next)=>{
    const {
        name,
        phone,
        born,
        gender,
        weight,
        size,
        longitude,
        latitude
    } =  req.body;

    if(name == undefined){ // verify parametters value
        Result.sendObject(res, 401, false, {})
        return;
    }

    let location = {
        longitude: longitude,
        latitude: latitude
    }

    // save base parametters like [name, alais, partOf, adress, type]
    let objectID = mongoose.Types.ObjectId().toString(); // create patient id

    const patient = new Patient ({
      _id: objectID,
      name: name,
      phone: phone,
      born: born,
      gender: gender,
      weight: weight,
      size: size,
      location: location,
      createdAt: Date.now(),
      updatedAt: Date.now()
    });

    patient.save(function(err){
      if (err) throw err;
    });
    console.log(patient)
    Result.sendObject(res, 200, true, patient)

  }),

    getOne: asyncHandler(async (req, res, next)=> {
        Patient.findOne({ _id: req.params.id }) 
        .then(patient => Result.sendObject(res, 200, true, patient))
        .catch(error => res.status(404).json({ error }));
    }),

    modify: asyncHandler (async (req,res,next)=> {
        Patient.findByIdAndUpdate({ _id: req.params.id }, { ...req.body, _id: req.params.id, updatedAt: Date.now() },
          { new: true, upsert:true },
          function(err){
          if (err) throw err;
        })
        .then(patient => Result.sendObject(res, 200, true, patient))
        .catch(error => res.status(400).json({ error }));
    }),

    getAll: asyncHandler (async (req,res,next)=>{
        Patient.find()
        .then(patient => Result.sendObject(res, 200, true, patient))
        .catch(error => res.status(400).json({ error }));
    }),

    delete: asyncHandler (async (req,res,next) => {
      Patient.findById(req.params.id, function(err, patient) {
        patient.remove(function(err, patient) {
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
        Patient.find({ name: req.params.search })
        .then(patient => Result.sendObject(res, 200, true, patient))
        .catch(error => res.status(404).json({ error }));
    }),
}