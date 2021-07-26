const jwt = require("jsonwebtoken");
const passport = require("passport");
const User = require("../models/user.schema");

exports.userAuth = passport.authenticate("jwt", { session: false });

exports.generateToken = user =>
  jwt.sign(
    {
      id: user._id,
      email: user.email,
      username: user.username
    },
    process.env.JWT_ACCESS_SECRET,
    { expiresIn: "7 days" }
  );

exports.validateUsername = async username => {
  let user = await User.findOne({ username });
  return user ? false : true;
};

exports.validateEmail = async email => {
  let user = await User.findOne({ email });
  return user ? false : true;
};

exports.serializeUser = user => {
  return {
    username: user.username,
    email: user.email,
    name: user.name,
    _id: user._id,
    updatedAt: user.updatedAt,
    createdAt: user.createdAt
  };
};
