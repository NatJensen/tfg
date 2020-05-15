// packages
const express = require("express");
const mongoose = require("mongoose");

// models
const Reward = mongoose.model("Reward");

/* Start of routes */
const router = express.Router();

router.get("/rewards", async (req, res) => {
  const rewards = await Reward.find({ userId: req.user._id });
  res.send(rewards);
});

router.post("/rewards", async (req, res) => {
  const { image, date } = req.body;

  if (!image || !date) {
    return res
      .status(422)
      .send({ error: "You must provide all information about the reward" });
  }

  try {
    const reward = new Reward({
      image,
      date,
      userId: req.user._id,
      giantId: req.giant._id,
    });
    await reward.save();
  } catch (err) {
    return res.status(422).send(err.message);
  }
});

module.exports = router;
