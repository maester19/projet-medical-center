const mongoose = require("mongoose");

const CallSchema = new mongoose.Schema({
  _id: {type: String, required: true},
  patient: {type: String, ref: "Patient",required: true},
  medecin: {type: String, ref: "Medecin",required: true},
  duration: { type: Number, required: false },
  createdAt: {type: Date, default: Date.now(),required: false},
}, {_id:false});

module.exports = mongoose.model('mc-call', CallSchema);