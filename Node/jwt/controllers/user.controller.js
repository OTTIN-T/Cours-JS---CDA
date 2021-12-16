const User = require("../models").User;
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const passwordService = require("../services/password.service");

exports.user_add = (req, res) => {
  passwordService.verifyPassword(req.body.password).then((result) => {
    if (result && result !== false) {
      let user = req.body;
      user.password = result;

      User.create(user)
        .then((userCreated) => {
          res.status(201).json(userCreated);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      res.status(400).json({ message: "Wrong password" });
    }
  });
};

exports.user_login = (req, res) => {
  User.findOne({
    where: {
      email: req.body.email,
    },
  })
    .then((user) => {
      if (!user) return;
      bcrypt.compare(req.body.password, user.password, (err, result) => {
        if (err) {
          throw err;
        }
        if (!result) {
          return res.status(401).json({
            message: "Bad login/password",
          });
        }
        const token = jwt.sign(
          { name: user.name, email: user.email },
          process.env.JWT_SECRET,
          { expiresIn: "1h" }
        );

        res.status(201).json({
          message: `${user.name} connected !`,
          token: token,
        });
      });
    })
    .catch((error) => {
      console.log(error);
    });
};
