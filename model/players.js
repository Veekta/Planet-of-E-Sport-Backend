const mongoose = require("mongoose");

const playersModel = mongoose.Schema(
  {
    username: {
      type: String,
    },
    email: {
      type: String,
    },
    age: {
      type: Number,
    },

    addresss: {
      type: String,
    },
    image: {
      type: String,
    },
    imageID: {
      type: String,
    },
    competition: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "competition",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("player", playersModel);
