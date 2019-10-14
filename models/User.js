const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: {
      type: String
    },
    password: {
      type: String
    },
    job: {
      type: String
    }
  },
  {
    timestamps: true
  }
);

//cada que tenga un User, jalo este modelo - Scema
const User = mongoose.model("User", userSchema);
module.exports = User;
