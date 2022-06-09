const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema({
  _id: {type: String, required: true},
  patient: {type: String, ref: "Patient",required: true},
  medecin: {type: String, ref: "Medecin",required: true},
  body: { type: String, required: true },
  file: { type: String, required: false, default: undefined },
  createdAt: {type: Date, default: Date.now(),required: false},
  updatedAt: {type: Date, default: Date.now(),required: false},
}, {_id:false});

module.exports = mongoose.model('mc-message', MessageSchema);