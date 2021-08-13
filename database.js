const mongoose = require("mongoose");

const URL = process.env.DATABASE;

mongoose.connect(
  URL,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
  },
  (err) => {
    if (!err) {
      console.log("----------- Successfully connected to MONGO DB ATLAS");
    } else {
      console.log("Error while connecting to db: ", err.message);
    }
  }
);
