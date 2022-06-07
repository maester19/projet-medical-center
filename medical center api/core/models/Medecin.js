const mongoose = require('mongoose')
const mongoosastic = require('mongoosastic')
const es = require('elasticsearch')

const esClient = new es.Client({ node: 'http://localhost:9200' })

const MedecinSchema = new mongoose.Schema({
    _id: {
        type: String
    },
    name:{
        type: String,
        required: true,
        es_indexed: true
    },
    surname: {
        type: String,
        required:false,
        es_indexed: true
    },
    image: {
        type: String,
        ref: 'Image',
        default: undefined
    },
    hospital:{
        type: String,
        ref: 'Hospital',
        es_indexed: true
    }
}, { _id: false })

MedecinSchema.plugin(mongoosastic, {
    esClient: esClient
  })

module.exports = mongoose.model('mc_medecin', MedecinSchema)