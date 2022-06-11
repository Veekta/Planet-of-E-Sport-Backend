require("dotenv").config();
const competitionModel = require("../model/competition");
const cloudinary = require("../utils/cloudinary");

const getCompetitions = async (req, res) => {
  try {
    const user = await competitionModel.find();
    res.status(200).json({ message: "success", data: user });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const getCompetition = async (req, res) => {
  try {
    const user = await competitionModel.findById(res.params.id);
    res.status(200).json({ message: "success", data: user });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const deleteCompetition = async (req, res) => {
  try {
    const user = await competitionModel.findByIdAndDelete(res.params.id);
    res.status(200).json({ message: "success", data: user });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const updateCompetition = async (req, res) => {
  try {
    const { name, description } = req.body;
    const user = await competitionModel.findById(req.params.id);

    if (user) {
      await cloudinary.uploader.destroy(user.avatarID);
      const image = await cloudinary.uploader.upload(req.file.path);
      const user = await competitionModel.findByIdAndUpdate(
        res.params.id,
        {
          name,
          description,
          avatar: image.secure_url,
          avatarID: image.public_id,
        },
        { new: true }
      );
      res.status(200).json({ message: "success", data: user });
    }
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const createCompetition = async (req, res) => {
  try {
    const { name, description } = req.body;
    const image = await cloudinary.uploader.upload(req.file.path);
    const competition = await competitionModel.create({
      name,
      description,
      avatar: image.secure_url,
      avatarID: image.public_id,
    });
    res.status(201).json({
      status: "success",
      data: competition,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

module.exports = {
  createCompetition,
  getCompetitions,
  getCompetition,
  deleteCompetition,
  updateCompetition,
};
