const express = require("express");
const Donor = require("../Models/donor");
const ObjectID = require("mongoose").Types.ObjectId;

const router = express.Router();

router.get("/", (req, res) => {
  Donor.find((err, docs) => {
    if (!err) {
      res.send(docs);
    } else {
      console.log("Error while fetching records: ", err.message);
    }
  });
});

router.get("/:id", (req, res) => {
  if (!ObjectID.isValid(req.params.id)) {
    return res.status(400).send(`No record with id ${req.params.id} found!`);
  }

  Donor.findById(req.params.id, (err, docs) => {
    if (!err) {
      res.send(docs);
    } else {
      console.log("Error while fetching record: ", err.message);
    }
  });
});

router.post("/", (req, res) => {
  const newDonor = new Donor({
    name: req.body.name,
    bloodgroup: req.body.bloodgroup,
    city: req.body.city,
    phone: req.body.phone,
  });

  newDonor.save((err, docs) => {
    if (!err) {
      res.send(newDonor);
    } else {
      console.log("Error while creating new record: ", err.message);
    }
  });
});

router.put("/:id", (req, res) => {
  if (!ObjectID.isValid(req.params.id)) {
    return res.status(400).send(`No record with id ${req.params.id} found!`);
  }

  const DonorId = req.params.id;
  const updatedDonor = {
    name: req.body.name,
    bloodgroup: req.body.bloodgroup,
    city: req.body.city,
    phone: req.body.phone,
  };

  Donor.findByIdAndUpdate(
    DonorId,
    { $set: updatedDonor },
    { new: true },
    (err, docs) => {
      if (!err) {
        res.send(docs);
      } else {
        console.log("Error while updating record: ", err.message);
      }
    }
  );
});

router.delete("/:id", (req, res) => {
  if (!ObjectID.isValid(req.params.id)) {
    res.status(400).send("No records with id: " + req.params.id + " found");
  }
  const DonorId = req.params.id;
  Donor.findByIdAndDelete(DonorId, (err, docs) => {
    if (!err) {
      res.send(docs);
    } else {
      console.log("Error while deleting record: ", err.message);
    }
  });
});

module.exports = router;
