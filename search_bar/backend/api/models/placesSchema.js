const mongoose = require("mongoose");

const placesSchema = new mongoose.Schema({
  place: { type: String },
  height: { type: Number },
  data: { type: String },
});

module.exports = mongoose.model("Places", placesSchema);
