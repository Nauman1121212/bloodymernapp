const mongoose = require("mongoose");

const donorSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide name"],
  },
  bloodgroup: {
    type: String,
    required: [true, "Please provide blood type"],
  },
  city: {
    type: String,
    required: [true, "Please provide city"],
  },
  phone: {
    type: String,
    required: [true, "Please provide phone"],
  },
});

const Donor = mongoose.model("Donor", donorSchema);

module.exports = Donor;
