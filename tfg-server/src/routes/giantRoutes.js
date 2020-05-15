// packages
const express = require("express");
const mongoose = require("mongoose");

// models
const Giant = mongoose.model("Giant");

/* Start of routes */
const router = express.Router();

router.get("/giants", async (req, res) => {
  const giants = await Giant.find();
  res.send(giants);
});

router.post("/giants", async (req, res) => {
  const {
    name,
    firstname,
    location,
    image,
    audio,
    description,
    latitude,
    longitude,
    station,
    stog,
    bus,
    busAddress,
    parking,
    isFound,
  } = req.body;

  if (
    !name ||
    !firstname ||
    !location ||
    !image ||
    !audio ||
    !description ||
    !latitude ||
    !longitude ||
    !station ||
    !stog ||
    !bus ||
    !busAddress ||
    !parking ||
    !isFound
  ) {
    return res
      .status(422)
      .send({ error: "You must provide all information about the giant" });
  }

  try {
    const giant = new Giant({
      name,
      firstname,
      location,
      image,
      audio,
      description,
      latitude,
      longitude,
      station,
      stog,
      bus,
      busAddress,
      parking,
      isFound,
    });
    await giant.save();
  } catch (err) {
    return res.status(422).send(err.message);
  }
});

module.exports = router;
