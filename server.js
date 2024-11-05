const express = require("express");
const app = express();
const db = require("./db");
require("dotenv").config();

const bodyParser = require("body-parser");
app.use(bodyParser.json());
const PORT= process.env.PORT || 3000;

// CRUD Operations vs HTTP requests
// Create       =>        POST
// Read         =>        GET
// Update       =>        PUT/PATCH
// Delete       =>        DELETE

app.get("/", function (req, res) {
  res.send("Welcome to our hotel!");
});

// Import router files
const personRoutes = require("./routes/personRoutes");
const menuItemRoutes = require("./routes/menuItemRoutes");

// Use routers
app.use("/person", personRoutes);
app.use("/menu", menuItemRoutes);

app.listen(PORT, () => {
  console.log("listening on port 3000");
});
