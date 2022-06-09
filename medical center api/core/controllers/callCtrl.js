const Call = require('../models/Call');
const asyncHandler = require('../Utils/async')
const Result =require('../Utils/result')
const mongoose = require('mongoose');


module.exports = {

  create: asyncHandler (async (req, res, next)=>{
    const {
        patient,
        medecin,
        duration,
    } =  req.body;

    // save base parametters like [name, alais, partOf, adress, type]
    let objectID = mongoose.Types.ObjectId().toString(); // create call id

    const call = new Call ({
      _id: objectID,
      patient: patient,
      medecin: medecin,
      duration: duration,
      createdAt: Date.now()
    });

    call.save(function(err){
      if (err) throw err;
    });
    console.log(call)
    Result.sendObject(res, 200, true, call)

  }),

    getOne: asyncHandler(async (req, res, next)=> {
        Call.findOne({ _id: req.params.id }) 
        .then(call => Result.sendObject(res, 200, true, call))
        .catch(error => res.status(404).json({ error }));
    }),

    modify: asyncHandler (async (req,res,next)=> {
        Call.findByIdAndUpdate({ _id: req.params.id }, { ...req.body, _id: req.params.id },
          { new: true, upsert:true },
          function(err){
          if (err) throw err;
        })
        .then(call => Result.sendObject(res, 200, true, call))
        .catch(error => res.status(400).json({ error }));
    }),

    getAll: asyncHandler (async (req,res,next)=>{
        Call.find()
        .then(call => Result.sendObject(res, 200, true, call))
        .catch(error => res.status(400).json({ error }));
    }),

    delete: asyncHandler (async (req,res,next) => {
      Call.findById(req.params.id, function(err, call) {
        call.remove(function(err, call) {
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
        Call.find({ name: req.params.search })
        .then(call => Result.sendObject(res, 200, true, call))
        .catch(error => res.status(404).json({ error }));
    }),

    
    }