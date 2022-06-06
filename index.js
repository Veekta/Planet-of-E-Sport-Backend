require("./utils/db");
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const port = process.env.PORT;
const app = express();

app.get("/", (req, res) => {
  res.status(200).json({
    message: "welcome",
  });
});
app.use(cors());
app.use(express.json());
app.listen(port, () => {
  console.log(`listening to port ${port}`);
});
