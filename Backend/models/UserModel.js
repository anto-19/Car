const mongoose = require("mongoose");

const userDetails = new mongoose.Schema(
  {
    fname: String,
    lname: String,
    email: { type: String, unique: true },
    password: String,
  },
  {
    colletion: "UserInfo",
  }
);

module.exports = mongoose.model("UserInfo", userDetails);
