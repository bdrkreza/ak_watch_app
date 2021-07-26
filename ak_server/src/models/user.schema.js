const { Schema, model } = require("mongoose");

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      index: true,
      unique: true,
      type: String,
      required: true,
    },
    username: {
      index: true,
      type: String,
      unique: true,
      required: true,
    },
    password: {
      index: true,
      type: String,
      required: true,
    },
    cPassword: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
const User = new model("users", UserSchema);
module.exports = User;
