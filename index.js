const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const donorRoutes = require("./Controllers/donorController.js");
const userRoutes = require("./Controllers/userController.js");

dotenv.config({ path: "./config.env" });
require("./database.js");

const app = express();
app.use(bodyParser.json());
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use("/donors", donorRoutes);
app.use("/users", userRoutes);

if (process.env.NODE_ENV == "production") {
  app.use(express.static("front-end/build"));
}

app.listen(PORT, () => {
  console.log(`Server Listening on Port: ${PORT}`);
});

// TO commit changes to github
// 1. git status
// 2. git add .
// 3. git status
// 4. git commit -m "comments about new commit"
// 5. git push
