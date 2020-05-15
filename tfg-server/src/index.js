// models
require("./models/User");
require("./models/Giant");
require("./models/Reward");

// packages
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

// routes
const authRoutes = require("./routes/authRoutes");
const giantRoutes = require("./routes/giantRoutes");
const rewardRoutes = require("./routes/rewardRoutes");

// middlewares
const requireAuth = require("./middlewares/requireAuth");

/* Start of server */
const app = express();

app.use(bodyParser.json());
app.use(authRoutes);
app.use(giantRoutes);
app.use(rewardRoutes);

const mongoUri =
  "mongodb+srv://admin:password1234@clustertfg-jvxo0.mongodb.net/test?retryWrites=true&w=majority";

mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("Connected to mongo instance");
});

mongoose.connection.on("error", (err) => {
  console.error("Error connecting to mongo", err);
});

app.get("/", requireAuth, (req, res) => {
  res.send(`Your email: ${req.user.email}`);
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
