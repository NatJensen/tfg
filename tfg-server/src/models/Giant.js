// packages
const mongoose = require("mongoose");

/* Start of model */
const giantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  firstname: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  audio: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  latitude: {
    type: Number,
    required: true,
  },
  longitude: {
    type: Number,
    required: true,
  },
  station: {
    type: String,
    required: true,
  },
  stog: {
    type: String,
    required: true,
  },
  bus: {
    type: String,
    required: true,
  },
  busAddress: {
    type: String,
    required: true,
  },
  parking: {
    type: String,
    required: true,
  },
  isFound: {
    type: Boolean,
    required: true,
  },
});

mongoose.model("Giant", giantSchema);
