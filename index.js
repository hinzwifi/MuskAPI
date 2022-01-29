const mongoose = require("mongoose");
const express = require("express");
const app = express();

// const cors = require("cors");

// const RouterBasic = require("./models/router.model")(mongoose);
// const StateBasic = require("./models/state.model")(mongoose);
const ApiModel = require("./model/musk.model")(mongoose);
const port = 3000;

app.use(express());
// app.use(cors());

require("dotenv").config();

app.listen(process.env.PORT || port);
app.get("/", (req, res) => {
  res.json({ bruh: "shesh" });
});

mongoose.connect(process.env.MONGO_URL || process.env.MONGO_LOCAL_URL);
