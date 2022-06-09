const mongoose = require('mongoose')

const ResultatSchema = new mongoose.Schema({
    _id: {
        type: String
    },
    dianostic:{
        type: String,
        required: true
    },
    patient: {
        type: String,
        ref: "Patient",
        required:true,
    },
    medecin: {
        type: String,
        ref: "Medecin",
        required: true
    },
    prescription:{
        type: [{
            nbre: {
                type: Number
            },
            medicament: {
                type: String
            },
            posologie: {
                type: String,
                enum: [
                    "matin-soir","matin-midi","midi-soir","matin-midi-soir",
                    "matin uniquement","midi uniquement","soir uniquement"
                ]
            }
        }],
        required: true
    },
    comment: {
        type: String,
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

module.exports = mongoose.model('mc_resultat', ResultatSchema)