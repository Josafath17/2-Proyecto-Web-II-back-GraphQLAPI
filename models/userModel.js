const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//se Agrego numero y status
const user = new Schema({
  username: { type: String },
  password: { type: String },
  phone: { type: String },
  pin: { type: Number },
  firstName: { type: String },
  lastName: { type: String },
  country: { type: String },
  birth_date: { type: String },
  state: { type: String },
});

module.exports = mongoose.model("User", user);
