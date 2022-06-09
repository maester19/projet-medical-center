const Message = require('../models/Message');
const asyncHandler = require('../Utils/async')
const Result =require('../Utils/result')
const mongoose = require('mongoose');


module.exports = {

  create: asyncHandler (async (req, res, next)=>{
    const {
        patient,
        medecin,
        body,
        file
    } =  req.body;

    // save base parametters like [name, alais, partOf, adress, type]
    let objectID = mongoose.Types.ObjectId().toString(); // create message id

    const message = new Message ({
      _id: objectID,
      patient: patient,
      medecin: medecin,
      body: body,
      file: file,
      createdAt: Date.now(),
      updatedAt: Date.now()
    });

    message.save(function(err){
      if (err) throw err;
    });
    console.log(message)
    Result.sendObject(res, 200, true, message)

  }),

    getOne: asyncHandler(async (req, res, next)=> {
        Message.findOne({ _id: req.params.id }) 
        .then(message => Result.sendObject(res, 200, true, message))
        .catch(error => res.status(404).json({ error }));
    }),

    modify: asyncHandler (async (req,res,next)=> {

        Message.findByIdAndUpdate({ _id: req.params.id }, { ...req.body, _id: req.params.id, updatedAt: Date.now() },
          { new: true, upsert:true },
          function(err){
          if (err) throw err;
        })
        .then(message => Result.sendObject(res, 200, true, message))
        .catch(error => res.status(400).json({ error }));
    }),

    getAll: asyncHandler (async (req,res,next)=>{
        Message.find()
        .then(message => Result.sendObject(res, 200, true, message))
        .catch(error => res.status(400).json({ error }));
    }),

    delete: asyncHandler (async (req,res,next) => {
      Message.findById(req.params.id, function(err, message) {
        message.remove(function(err, message) {
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
        Message.find({ name: req.params.search })
        .then(message => Result.sendObject(res, 200, true, message))
        .catch(error => res.status(404).json({ error }));
    }),

    
    }