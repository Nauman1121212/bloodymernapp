const express = require("express");
const User = require("../Models/user");
const ObjectID = require("mongoose").Types.ObjectId;
const bcrypt = require("bcrypt");

const route = express.Router();

route.get("/", (req, res) => {
  User.find((err, docs) => {
    if (!err) {
      res.send(docs);
    } else {
      console.log("Error while retrieving records: ", err.message);
    }
  });
});

route.post("/login", (req, res) => {
  console.log("in controller: ", req.body);
  User.findOne({ email: req.body.email }, (err, user) => {
    if (user) {
      console.log("Email: ", user.email);
      console.log("Password: ", user.password);
      bcrypt.compare(req.body.password, user.password, (error, same) => {
        if (same) {
          // req.session.user=(user)
          console.log("password is same");
          res.send(user);
        } else {
          console.log("Password not matched: ", error);
          //   res.json("Password not matched");
          res.send({ message: "Incorrect Password!" });
        }
      });
    } else {
      console.log("No user with email ", req.body.email, " found");
    }
  });
});

route.post("/", (req, res) => {
  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });

  newUser.save((err, docs) => {
    if (!err) {
      res.send(docs);
    } else {
      console.log("Error while inserting record: ", err.message);
    }
  });
});

route.delete("/:id", (req, res) => {
  if (!ObjectID.isValid(req.params.id)) {
    res.status(400).send("No record with id: " + req.params.id + " found");
  }
  const id = req.params.id;
  User.findByIdAndDelete(id, (err, user) => {
    if (!err) {
      res.send(user);
    } else {
      console.log("Error while inserting record: ", err.message);
    }
  });
});

module.exports = route;
