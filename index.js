require("./utils/db");
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 2112;
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/competition", require("./router/competitionRouter.js"));
app.use("/api/player", require("./router/playerRouter.js"));
app.get("/", (req, res) => {
  res.status(200).json({
    message: "welcome",
  });
});

app.listen(port, () => {
  console.log(`listening to port ${port}`);
});
