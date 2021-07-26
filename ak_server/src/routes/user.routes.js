const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();
const User = require("../models/user.schema");
const { check, validationResult } = require("express-validator");
const { generateToken, validateUsername, validateEmail, userAuth, serializeUser } = require("../validation/auth");


router.get("/user", userAuth, async (req, res) => {
  return res.status(200).json(serializeUser(req.user));
});

router.post(
    "/",
    [
      check("username", "Username is required.")
        .not()
        .isEmpty(),
      check("password", "Password is required.").isLength({ min: 6 })
    ],
  
    async (req, res) => {
      const errors = validationResult(req);
  
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
  
      try {
        let { username, password } = req.body;
        // First Check if the username is in the database
        const user = await User.findOne({ username });
  
        if (!user) {
          return res.status(404).json({
            message: "Username is not found. Invalid login credentials.",
            success: false
          });
        }
  
        // Now check for the password
        let isMatch = await bcrypt.compare(password, user.password);
        if (isMatch) {
          // Sign in the token and issue it to the user
          let token = generateToken(user);
  
          let result = {
            username: user.username,
            email: user.email,
            token: `Bearer ${token}`,
            expiresIn: 168
          };
  
          return res.status(200).json({
            ...result,
            message: "Hurray! You are now logged in.",
            success: true
          });
        } else {
          return res.status(403).json({
            message: "Incorrect password.",
            success: false
          });
        }
      } catch (err) {
        console.log(err.message);
        return res
          .status(500)
          .json({ message: "Server error please try again.", success: false });
      }
    }
  );

  router.post("/register",
  [
      check("name", "Please add a Name.")
        .not()
        .isEmpty(),
      check("username", "Please add a Username.")
        .not()
        .isEmpty(),
      check("email", "Please include a valid Email.").isEmail(),
      check(
        "password",
        "Please enter a password with 6 or more characters."
      ).isLength({ min: 6 })
    ],
  
    async (req, res) => {
      const errors = validationResult(req);
  
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
  
      let { username, email, password } = req.body;
  
      // validate the username
      let usernameNotTaken = await validateUsername(username);
      if (!usernameNotTaken) {
        return res.status(400).json({
          message: `Username is already taken.`,
          success: false
        });
      }
  
      // validate the email
      let emailNotRegistered = await validateEmail(email);
      if (!emailNotRegistered) {
        return res.status(400).json({
          message: `Email is already registered.`,
          success: false
        });
      }
  
      try {
        hashPassword = await bcrypt.hash(password, 12);
        // create a new user
        const newUser = new User({
          ...req.body,
          password:hashPassword,
          cPassword:hashPassword
        });
        await newUser.save();
        let token = `Bearer ${generateToken(newUser)}`;
        let result = {
          token,
          username: newUser.username,
          email: newUser.email,
          expiresIn: 168
        };
        return res.status(201).json({
          message: "Hurry! You are logged in.",
          success: true,
          ...result
        });
      } catch (err) {
        console.log(err.message);
        return res
          .status(500)
          .json({ message: "Server error please try again.", success: false });
      }
    }
  );

module.exports = router;