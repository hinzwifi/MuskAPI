const mongoose = require("mongoose");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const sample = require("lodash/sample");
const { v4: uuidv4 } = require("uuid");
const ApiModel = require("./model/musk.model")(mongoose);
const MuskAdmin = require("./model/muskAdmin.model")(mongoose);
const port = 3000;
require("dotenv").config();
app.use(bodyParser.json());
app.use(express());
app.use(bodyParser.urlencoded({ extended: true }));
app.listen(process.env.PORT || port);
app.get("/api", (req, res) => {
  ApiModel.find({}).exec(function (err, books) {
    if (err) {
      res.send("error has occured");
    } else {
      const random = sample(books);
      res.json({
        message: {
          type: "success",
          quotes: random.quote,
          URL: random.quoteURL,
        },
      });
    }
  });
});
app.get("/api/tweet/:id", async (req, res) => {
  try {
    const tweet_id = await ApiModel.findById({ _id: req.params.id });
    if (!tweet_id) {
      res.json({
        message: {
          type: "error",
          text: "Quote not found",
        },
      });
    } else {
      res.json({
        message: {
          type: "success",
          quotes: tweet_id.quote,
          URL: tweet_id.quoteURL,
        },
      });
    }
  } catch (err) {
    res.status(400).json({ message: err });
  }
});
app.post("/api/admin/:id", async (req, res) => {
  if (req.params.id) {
    const admin_id = await MuskAdmin.findById({ _id: req.params.id });
    if (!admin_id) {
      res.json({
        message: {
          type: "error",
          text: "Not an Admin",
        },
      });
    } else {
      const randomID = uuidv4();
      let newQuote = new ApiModel({
        _id: randomID,
        quote: req.body.quote,
        quoteURL: `http://localhost:6900/api/tweet/${randomID}`,
        addedBy: admin_id.username,
      });
      try {
        // await newQuote.save();
        res.json(newQuote);
      } catch (err) {
        res.status(400).json({ message: err });
      }
    }
  } else {
    res.redirect("/api");
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
