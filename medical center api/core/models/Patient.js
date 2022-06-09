const mongoose = require('mongoose')
 
const PatientSchema = new mongoose.Schema({
    _id: {
        type: String,
    },
    name: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    born: {
        type: Date,
        required: true
    },
    gender: {
        type: String,
        enum: ["male","femene","other"],
        required: true
    },
    weight: {
        type: Number,
        required: false
    },
    size: {
        type: Number,
        required: false
    },
    location: {
        type: {
            longitude: {
                type: Number
            },
            latitude: {
                type: Number
            }
        },
        required: false
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    updatedAt: {
        type: Date,
        default: Date.now()
    }

}, { _id: false })

module.exports = mongoose.model('mc_patient', PatientSchema)