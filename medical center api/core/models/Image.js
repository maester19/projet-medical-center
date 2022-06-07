const mongoose = require("mongoose");

const ImageSchema = new mongoose.Schema({
  _id: {type: String, required: true},
  url: {type: String, required: true},
  color: {type: String, required: false},
  thumbnail: {type: String, required: false}
}, {_id:false});

module.exports = mongoose.model('mc-Image', ImageSchema);