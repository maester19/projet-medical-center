const Resultat = require('../models/Resultat');
const asyncHandler = require('../Utils/async')
const Result =require('../Utils/result')
const mongoose = require('mongoose');


module.exports = {

  create: asyncHandler (async (req, res, next)=>{
    const {
        diagnostic,
        patient,
        medecin,
        prescription,
        comment
    } =  req.body;
    
    let table = prescription.split("|")
    let Prescription = []
    table.forEach(element => {
        let tabElmt = element.split(";")
        let pres = {
            nbre: tabElmt[0],
            medicament: tabElmt[1],
            posologie: tabElmt[2]
        }
        Prescription.push(pres)
    });
    
    // save base parametters like [name, alais, partOf, adress, type]
    let objectID = mongoose.Types.ObjectId().toString(); // create resultat id

    const resultat = new Resultat ({
      _id: objectID,
      diagnostic: diagnostic,
      patient: patient,
      medecin: medecin,
      prescription: Prescription,
      comment: comment,
      size: size,
      location: location,
      createdAt: Date.now(),
      updatedAt: Date.now()
    });

    resultat.save(function(err){
      if (err) throw err;
    });
    console.log(resultat)
    Result.sendObject(res, 200, true, resultat)

  }),

    getOne: asyncHandler(async (req, res, next)=> {
        Resultat.findOne({ _id: req.params.id }) 
        .then(resultat => Result.sendObject(res, 200, true, resultat))
        .catch(error => res.status(404).json({ error }));
    }),

    modify: asyncHandler (async (req,res,next)=> {
        Resultat.findByIdAndUpdate({ _id: req.params.id }, { ...req.body, _id: req.params.id, updatedAt: Date.now() },
          { new: true, upsert:true },
          function(err){
          if (err) throw err;
        })
        .then(resultat => Result.sendObject(res, 200, true, resultat))
        .catch(error => res.status(400).json({ error }));
    }),

    getAll: asyncHandler (async (req,res,next)=>{
        Resultat.find()
        .then(resultat => Result.sendObject(res, 200, true, resultat))
        .catch(error => res.status(400).json({ error }));
    }),

    delete: asyncHandler (async (req,res,next) => {
      Resultat.findById(req.params.id, function(err, resultat) {
        resultat.remove(function(err, resultat) {
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
        Resultat.find({ name: req.params.search })
        .then(resultat => Result.sendObject(res, 200, true, resultat))
        .catch(error => res.status(404).json({ error }));
    }),
}