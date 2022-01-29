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
app.get("/api", (req, res) => {
  res.json({
    id: 90123818129,
    quote: "random",
    url: "http://localhost:6900/api/tweet/90123818129",
  });
});

app.get("/api/tweet/:id", (req, res) => {
  try {
    const user_id = req.params.id;
    if (!user_id) {
      res.send("eat shit");
    } else {
      res.json({ id: user_id });
    }
  } catch (err) {
    res.status(400).json({ message: err });
  }
});

// NOT YET SURE IF WILL ADD
// app.get("/api/category/:category", (req, res) => {
//   try {
//     const quote_category = req.params.category;
//     if (!quote_category) {
//       res.json("eat shit");
//     } else {
//       res.json({ category: quote_category });
//     }
//   } catch (err) {
//     res.status(400).json({ message: err });
//   }
// });

mongoose.connect(process.env.MONGO_URL || process.env.MONGO_LOCAL_URL);
