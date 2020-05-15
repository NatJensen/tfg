// packages
const mongoose = require("mongoose");

/* Start of model */
const rewardSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  giantId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Giant",
  },
  image: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
});

mongoose.model("Reward", rewardSchema);
