const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  stock_number: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  tag_number: {
    type: String,
    required: true,
  },
  odometer: {
    type: String,
    required: true,
  },
  details: {
    type: String,
    required: true,
  },
  Warranty: {
    type: String,
    required: true,
  },
  shippment_payment: {
    type: String,
    required: true,
  },
  image_url: {
    type: String,
    // required: true,
  },
  gallery: {
    type: Array,
    // required: true,
  },
  category: {
    type: String,
  },
});

module.exports = mongoose.model("Task", taskSchema);
