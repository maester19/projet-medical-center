const mongoose = require('mongoose')
const mongoosastic = require('mongoosastic')
const es = require('elasticsearch')

const esClient = new es.Client({ node: 'http://localhost:9200' })
 
const HospitalSchema = new mongoose.Schema({
    _id: {
        type: String,
    }
}, { _id: false })

HospitalSchema.plugin(mongoosastic, {
    esClient: esClient
  })

module.exports = mongoose.model('mc_hospotal', HospitalSchema)