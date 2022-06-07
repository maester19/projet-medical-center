const Organization = require('../models/Organisation')
const asyncHandler = require('../Utils/async')
const Result =require('../Utils/result')
const error =require('../../config/error')
const mongoose = require('mongoose');

module.exports = {
    list: asyncHandler(async (req, res, next)=>{
        res.status(200).json(res.advancedResults);
    }),

    create: asyncHandler (async (req, res, next)=>{
        const {
            name,
            alias,
            partOf,
            address,
            contact,
            telecom,
            type,
            endpoint,
            CLIA,
            NPI,
            identifier
        } =  req.body;

        if(name == undefined ||  type == undefined){ // verify parametters value
            Result.sendObject(res, 401, false, {})
            return;
        }

        // save base parametters like [name, alais, partOf, adress, type]
        let objectID = mongoose.Types.ObjectId().toString(); // create organization id

        let doc = {
            _id: objectID,
            name: name,
            alias: alias!=undefined? alias.split(','): undefined,  //define place alias
            partOf: partOf,
            type: type!=undefined? type.split(','): undefined, // define organization type
            address: address!=undefined? address.split(','): undefined, // define organization adress
            contact: contact!=undefined? contact.split(','): undefined, // define organization contact
            telecom: telecom!=undefined? telecom.split(','): undefined, // define organization telecom
            endpoint: endpoint!=undefined? endpoint.split(','): undefined, // define organization endpoint
            identifier: identifier!=undefined? identifier.split(','): undefined, // define organization indentifiers
            NPI: NPI, // define NPI
            CLIA: CLIA // define CLIA
        }
        
        let organization =  await Organization.findOneAndUpdate({_id: doc._id}, JSON.parse(JSON.stringify(doc)), {upsert: true, new: true}).populate("type")
        console.log(organization)
        Result.sendObject(res, 200, true, organization)
    })
}