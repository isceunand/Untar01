const Doctor = require("../model/doctor.js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

module.exports = {
  registerDoctor: (req, res) => {
    Doctor.create(req.body)
      .then(function(response) {
        console.log(req.body);
        console.log(response);
        res.status(200).json({
          message: "success registering doctor"
        });
      })
      .catch(function(err) {
        console.log(err);
        res.status(500).json({
          message: "something bad happening at the server"
        });
      });
  },

  loginDoctor: (req, res) => {
    Doctor.findOne({ email: req.body.email })
      .then(function(user) {
        if (!user) {
          res.status(401).json({
            message: "there's no such user, asshole"
          });
        }

        const hashedPassword = user.password;
        if (bcrypt.compareSync(req.body.password, hashedPassword)) {
          var token = jwt.sign(
            { email: user.email, id: user._id, role: "doctor" },
            "shhhhh"
          );
          console.log("testing");
          console.log(token, "<<<<<<< dari controller doctor");
          res.status(200).json({
            token: token,
            id: user._id,
            email: user.email
          });
        } else {
          res.status(401).json({
            message: "wrong password"
          });
        }
      })
      .catch(function(err) {
        res.status(500).json({
          message: "something went wrong"
        });
      });
  }
};
