const express = require("express");
const router = express.Router();
const placesData = require("../models/placesSchema");
const mongoose = require("mongoose");

// const data = [
//   {
//     place: "shimla",
//     height: 100,
//     data: "shimlabeautiful",
//   },
//   {
//     place: "manali",
//     height: 70,
//     data: "manalibeautiful",
//   },
//   {
//     place: "agra",
//     height: 150,
//     data: "agrabeautiful",
//   },
//   {
//     place: "tokyo",
//     height: 50,
//     data: "tokyobeautiful",
//   },
//   {
//     place: "punjab",
//     height: 100,
//     data: "punjabbeautiful",
//   },
//   {
//     place: "himachal",
//     height: 70,
//     data: "himachalbeautiful",
//   },
//   {
//     place: "goa",
//     height: 150,
//     data: "goabeautiful",
//   },
//   {
//     place: "redfort",
//     height: 50,
//     data: "redfortbeautiful",
//   },
// ];

router.post("/save", (req, res) => {
  try {
    const data = new placesData({
      _id: mongoose.Types.ObjectId(),
      place: req.body.place,
      height: req.body.height,
      data: req.body.data,
    });
    try {
      data.save().then((result) => {
        console.log(result);
        res.send(result);
      });
    } catch (err) {
      console.log("error");
    }
  } catch (err) {
    console.log(err);
  }
});

router.get("/:filterval", (req, res) => {
  const filterval = req.params.filterval;
  try {
    placesData
      .find()
      .exec()
      .then((result) => {
        const transformed = result.filter((item) => {
          return (
            item.place.includes(filterval) || item.data.includes(filterval)
          );
        });
        res.send(transformed);
      });
  } catch (err) {
    console.log(err);
  }
});

router.get("/", (req, res) => {
  //   const data = [];
  placesData
    .find()
    .exec()
    .then((result) => {
      console.log(result);
      res.status(200).send(result);
    });
  //   console.log("hey");
  //   res.send(data);
});

module.exports = router;
