const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const main_routes = require("./routes/routes");
const bodyParser = require("body-parser");

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json());

//mongo setup
const mongourl = "mongodb://localhost:27017/test";
mongoose.connect(mongourl, {
  useNewUrlParser: true,
});
const db = mongoose.connection;
db.once("open", (_) => {
  console.log("Database connected:", mongourl);
});
db.on("error", (err) => {
  console.error("connection error:", err);
});

//cors addition
app.use(cors());

app.use("/api", main_routes);

module.exports = app;
