const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AdminSchema = new Schema({
  email: {
    type: String,
    require: [true, "Email is required"],
    unique: true,
  },
  password: {
    type: String,
    require: [true, "Password is required"],
  },
  admin: {
    type: Boolean,
    default: true,
  },
  token: {
    type: String,
  },
});

module.exports = mongoose.model("Admin", AdminSchema);
