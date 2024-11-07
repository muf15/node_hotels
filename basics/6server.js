const express = require("express");
const app = express();
const db = require("./db");
require("dotenv").config();
const passport = require("./6auth");

const bodyParser = require("body-parser");
app.use(bodyParser.json());
const PORT = process.env.PORT || 3000;

// Middleware (software between application and server) Function to log requests to the console
const logRequest = (req, res, next) => {
  console.log(
    `[${new Date().toLocaleString()}] Request Made to ${req.originalUrl}`
  );
  next(); // Move on to the next phase
};

app.use(logRequest);

// Authentication: to check if person belongs to hotel
// Implement using passport.js which acts as a middleware
// Authorization: to define their role
app.use(passport.initialize());
const localAuthMiddleware = passport.authenticate("local", { session: false });

app.get("/", function (req, res) {
  res.send("Welcome to our hotel!");
});

// Import router files
const personRoutes = require("./routes/personRoutes");
const menuItemRoutes = require("./routes/menuItemRoutes");

// Use routers
app.use("/person", localAuthMiddleware, personRoutes);
app.use("/menu", menuItemRoutes);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
