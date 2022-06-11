const mongoose = require("mongoose");
const competitionModel = mongoose.Schema(
  {
    name: {
      type: String,
    },
    description: {
      type: String,
      unique: true,
      trim: true,
    },
    avatar: {
      type: String,
    },
    avatarID: {
      type: String,
    },
    date: {
      Date,
    },
    players: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "player",
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("competition", competitionModel);
