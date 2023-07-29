const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("api running");
});

//DB connection
const mongoose = require("mongoose");
//DB security
const dotenv = require("dotenv");
dotenv.config();

mongoose
  .connect("mongodb://127.0.0.1:27017/merndb")
  .then(() => {
    console.log("connected successfully.");
    app.listen(process.env.PORT || 8000, (err) => {
      if(err) console.log(err);
      console.log("running successfully at", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log("error", error);
  });

//create & call Local DB Schema
const User = require("./models/userModel");

