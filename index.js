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
          quoteId: random._id,
          quotes: random.quote,
          URL: `https://${req.headers.host}${random.quoteURL}`,
          addedBy: random.addedBy,
        },
      });
    }
  });
});
app.get("/", (req, res) => {
  res.json("Site Here");
});
app.get("/api/quote/:id", async (req, res) => {
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
          quoteId: tweet_id._id,
          quotes: tweet_id.quote,
          URL: `https://${req.headers.host}${tweet_id.quoteURL}`,
          home: `https://${req.headers.host}`,
        },
      });
    }
  } catch (err) {
    res.status(400).json({ message: err });
  }
});
app.post("/api/admin", async (req, res) => {
  const admin_id = await MuskAdmin.findById({ _id: req.body.adminId });
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
      quoteURL: `/api/quote/${randomID}`,
      addedBy: admin_id.username,
    });
    try {
      await newQuote.save();
      res.json(newQuote);
    } catch (err) {
      res.status(400).json({ message: err });
    }
  }
});
app.get("*", function (req, res) {
  res.redirect("/api");
});

// NOT YET SURE IF WILL ADD
// app.get("/api/category/:category", (req, res) => {
//   try {
//     const quote_category = req.params.category;
//     ApiModel.find({ category: quote_category }).exec(function (err, books) {
//       if (err) {
//         res.send("error has occured");
//       } else {
//         const random = sample(books);
//         res.json({
//           message: {
//             type: "success",
//             quotes: random.quote,
//             URL: random.quoteURL,
//           },
//         });
//       }
//     });
//   } catch (err) {
//     res.status(400).json({ message: err });
//   }
// });

mongoose.connect(process.env.MONGO_URL || process.env.MONGO_LOCAL_URL);
