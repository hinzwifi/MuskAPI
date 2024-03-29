const mongoose = require("mongoose");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const sample = require("lodash/sample");
const forEa = require("lodash/forEach");
const { v4: uuidv4 } = require("uuid");
const ApiModel = require("./model/musk.model")(mongoose);
const MuskAdmin = require("./model/muskAdmin.model")(mongoose);
const port = 3002;
const cors = require("cors");
const corsOptions = {
  origin: "*",
};
app.use(cors(corsOptions));
require("dotenv").config();
app.use(bodyParser.json());
app.use(express());
app.use(bodyParser.urlencoded({ extended: true }));
app.listen(process.env.PORT || port);
app.get("/", (req, res) => {
  res.redirect("https://muskapi.hinzwifi.xyz");
});
app.get("/api/random", (req, res) => {
  ApiModel.find({}).exec(function (err, books) {
    if (err) {
      res.send("error has occured");
    } else {
      const random = sample(books);
      res.json({
        message: {
          type: "success",
          quoteId: random._id,
          quote: random.quote,
          URL: `https://${req.headers.host}/api/quote/${random._id}`,
        },
      });
    }
  });
});
app.get("/api", (req, res) => {
  ApiModel.find({}).exec(async function (err, books) {
    if (err) {
      res.send("error has occured");
    } else {
      let data = [];
      const bruh = await forEa(books, function (value) {
        data.push({
          type: "success",
          quoteId: value._id,
          quote: value.quote,
          kekw: `https://${req.headers.host}/api/quote/${value._id}`,
        });
      });
      res.json(data);
    }
  });
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
        text: "No user found",
      },
    });
  } else {
    if (!admin_id.admin) {
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
        if (err.code === 11000) {
          res.status(400).json({
            message: {
              type: "Duplication",
              text: "It is already in the database",
            },
          });
        }
      }
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

mongoose.connect(process.env.MONGO_URL);
