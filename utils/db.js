require("dotenv").config();
const mongoose = require("mongoose");
const url = process.env.URL;
mongoose
  .connect(url)
  .then(() => {
    console.log("connected");
  })
  .catch((error) => {
    console.log(error);
  });
