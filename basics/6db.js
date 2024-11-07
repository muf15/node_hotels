// to establish connection with db using mongoose library
const mongoose = require("mongoose");
require("dotenv").config();

const mongoURL = process.env.MONGODB_URL_LOCAL; 
// const mongoURL= process.env.MONGODB_URL;
mongoose.connect(mongoURL);

// Get default connection
// Mongoose maintains a default connection object representing MongoDB connection
const db = mongoose.connection;

db.on("connected", () => {
  console.log("Connected to MongoDB server");
});

db.on("error", (err) => {
  console.log("MongoDB connection error", err);
});

db.on("disconnected", () => {
  console.log("MongoDB disconnected");
});

// Export the db connection
module.exports = db;
