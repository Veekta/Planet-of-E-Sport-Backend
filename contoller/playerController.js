const mongoose = require("mongoose");
const competitionModel = require("../model/competition");
const playerModel = require("../model/players");
const cloudinary = require("../utils/cloudinary");

const getAllUsers = async (req, res) => {
  try {
    const user = await competitionModel.find();
    res.status(200).json({
      message: "success",
      data: user,
    });
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};

const getSingleUser = async (req, res) => {
  try {
    const user = await competitionModel.findById(req.params.playerId);
    res.status(200).json({
      message: "success",
      data: user,
    });
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};

const createPlayer = async (req, res) => {
  try {
    const { username, email, address, age } = req.body;

    const image = await cloudinary.uploader.upload(req.file.path);
    const Competition = await competitionModel.findById(req.params.id);
    const user = new playerModel({
      username,
      email,
      address,
      address,
      age,
      Image: image.secure_url,
      ImageID: image.public_id,
    });
    user.competition = Competition;
    user.save();
    Competition.players.push(mongoose.Types.ObjectId(user._id));
    res.status(201).json({
      status: "success",
      data: user,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllUsers,
  getSingleUser,
  createPlayer,
};
